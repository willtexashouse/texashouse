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

// ---------- Events (all past; ordered by date desc) ----------

export const EVENTS_QUERY = `*[_type == "event"] | order(date desc){
  _id, title, slug, date, city, coverImage, recapVideo, featured
}`;

// Alias kept for the homepage "Past Events" section.
export const PAST_EVENTS_QUERY = EVENTS_QUERY;

export const EVENT_BY_SLUG_QUERY = `*[_type == "event" && slug.current == $slug][0]{
  _id, title, slug, date, city, coverImage, recapVideo, description,
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

export const SPONSORS_QUERY = `*[_type == "sponsor"]{
  _id, name, slug, logo, link, presenting, partner, experience, foodBeverage, workedWith
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
  | order(order asc){ _id, name, role, headshot, bio, socials }`;

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
