import { sanityClient } from './client';

/*
  GROQ queries for the Texas House site.
  These are the data hooks the Claude Design import will plug into — each page
  fetches with one of these and feeds the results into the (branded) components.
*/

// ---------- Site-wide ----------

export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
  logo, nav, socials, mission, footerLinks, contactEmail
}`;

// ---------- Events ----------
/*
  Status is DERIVED from dates, never stored — see sanity/schemaTypes/documents/
  event.ts. `date` is the start, `endDate` the end (blank endDate = single-day,
  so the start doubles as the end).

  ⚠️ BUILD-TIME EVALUATION. astro.config.mjs sets `output: 'static'`, so now() is
  resolved when the site builds, not when a visitor loads it. An event therefore
  retires on the next deploy, not at the stroke of midnight. Schedule a daily
  rebuild (Vercel cron → deploy hook) or events will linger. Day-level accuracy
  is fine for multi-day events; if "happening now" ever needs to be exact, that
  one badge should be computed client-side.
*/

// Reusable projection. `statusOverride` wins when an editor has set it.
const EVENT_STATUS = `"status": select(
    defined(statusOverride) => statusOverride,
    dateTime(coalesce(endDate, date)) < dateTime(now()) => "past",
    dateTime(date) > dateTime(now()) => "upcoming",
    "active"
  )`;

export const EVENTS_QUERY = `*[_type == "event"] | order(date desc){
  _id, title, slug, date, endDate, city, coverImage, recapVideo, featured,
  ${EVENT_STATUS}
}`;

// Past — newest first. Anything finished, plus anything forced past.
export const PAST_EVENTS_QUERY = `*[_type == "event" && (
  statusOverride == "past" ||
  (!defined(statusOverride) && dateTime(coalesce(endDate, date)) < dateTime(now()))
)] | order(date desc){
  _id, title, slug, date, endDate, city, coverImage, recapVideo, featured,
  ${EVENT_STATUS}
}`;

// Upcoming — soonest first. Excludes cancelled.
export const UPCOMING_EVENTS_QUERY = `*[_type == "event" && (
  statusOverride == "upcoming" ||
  (!defined(statusOverride) && dateTime(date) > dateTime(now()))
) && statusOverride != "cancelled"] | order(date asc){
  _id, title, slug, date, endDate, city, coverImage, description,
  ${EVENT_STATUS}
}`;

// Happening now — the run has started but not finished. Usually 0 or 1.
export const ACTIVE_EVENTS_QUERY = `*[_type == "event" && (
  statusOverride == "active" ||
  (!defined(statusOverride)
    && dateTime(date) <= dateTime(now())
    && dateTime(coalesce(endDate, date)) >= dateTime(now()))
)] | order(date asc){
  _id, title, slug, date, endDate, city, coverImage,
  ${EVENT_STATUS}
}`;

// Home "Upcoming Events": whatever is live now, then what's next.
export const HOME_EVENTS_QUERY = `{
  "active": ${ACTIVE_EVENTS_QUERY},
  "upcoming": ${UPCOMING_EVENTS_QUERY}[0...3]
}`;

export const EVENT_BY_SLUG_QUERY = `*[_type == "event" && slug.current == $slug][0]{
  _id, title, slug, date, endDate, city, coverImage, recapVideo, description,
  ${EVENT_STATUS},
  gallery, gallery2Title, gallery2,
  "sessions": *[_type == "session" && event._ref == ^._id] | order(date asc){
    _id, title, slug, date, endTime, room, eventDay, shortDescription, image, rsvpLink,
    "topics": topics[]->{ _id, title, slug },
    "sponsors": sponsors[]->{ _id, name, logo, link }
  }
}`;

export const EVENT_SLUGS_QUERY = `*[_type == "event" && defined(slug.current)].slug.current`;

// ---------- Sessions ----------

export const SESSIONS_FOR_EVENT_QUERY = `*[_type == "session" && event._ref == $eventId] | order(date asc){
  _id, title, slug, date, endTime, room, eventDay, shortDescription, image, rsvpLink,
  "topics": topics[]->{ _id, title, slug },
  "sponsors": sponsors[]->{ _id, name, logo, link }
}`;

// ---------- Sponsors ----------

export const SPONSORS_QUERY = `*[_type == "sponsor"] | order(name asc){
  _id, name, slug, logo, link, presenting, partner, experience, foodBeverage, workedWith
}`;

// Home-page logo strip. `marquee != false` is deliberate — it keeps docs where
// the field is unset, so a sponsor is only hidden by an explicit switch-off.
export const MARQUEE_SPONSORS_QUERY = `*[_type == "sponsor" && defined(logo) && marquee != false] | order(name asc){
  _id, name, logo, link
}`;

export const BRANDS_WORKED_WITH_QUERY = `*[_type == "sponsor" && workedWith == true]{
  _id, name, logo, link
}`;

// ---------- Newsroom ----------

export const FEATURED_ARTICLE_QUERY = `*[_type == "article" && featured == true]
  | order(publishedAt desc)[0]{
    _id, title, slug, type, summary, mainImage, publishedAt, author,
    "topics": topics[]->{ _id, title, slug }
  }`;

export const RECENT_ARTICLES_QUERY = `*[_type == "article"]
  | order(publishedAt desc)[0...$limit]{
    _id, title, slug, type, summary, mainImage, publishedAt,
    "topics": topics[]->{ _id, title, slug }
  }`;

export const ALL_ARTICLES_QUERY = `*[_type == "article"]
  | order(publishedAt desc){
    _id, title, slug, type, summary, mainImage, publishedAt, featured,
    "topics": topics[]->{ _id, title, slug }
  }`;

export const ARTICLE_BY_SLUG_QUERY = `*[_type == "article" && slug.current == $slug][0]{
  _id, title, slug, type, summary, mainImage, publishedAt, author, body,
  "topics": topics[]->{ _id, title, slug }
}`;

export const ARTICLE_SLUGS_QUERY = `*[_type == "article" && defined(slug.current)].slug.current`;

export const TOPICS_QUERY = `*[_type == "topic"] | order(order asc){ _id, title, slug }`;

// ---------- People ----------

export const PEOPLE_BY_GROUP_QUERY = `*[_type == "person" && group == $group]
  | order(order asc){ _id, name, role, organization, headshot, bio, socials }`;

// ---------- Page singletons ----------

export const HOME_PAGE_QUERY = `*[_type == "homePage"][0]{
  heroHeadline, heroCta, marqueeItems,
  postcards[]{ caption, image },
  "activations": activations[]->{ _id, title, blurb, icon },
  processBlurbs
}`;

export const ABOUT_PAGE_QUERY = `*[_type == "aboutPage"][0]{ heroHeadline, story, why }`;

export const PARTNERSHIPS_PAGE_QUERY = `*[_type == "partnershipsPage"][0]{
  headerCopy, gallery,
  "areasOfFocus": areasOfFocus[]->{ _id, title, blurb, icon },
  whatWeDo, whatToExpect,
  "partnershipTypes": partnershipTypes[]->{ _id, title, description },
  "faqs": faqs[]->{ _id, question, answer },
  "brands": *[_type == "sponsor" && workedWith == true]{ _id, name, logo, link }
}`;

// ---------- Helper ----------

/** Thin typed wrapper around sanityClient.fetch. */
export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
): Promise<T> {
  return sanityClient.fetch<T>(query, params);
}
