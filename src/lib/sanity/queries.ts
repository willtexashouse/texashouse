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

export const UPCOMING_EVENTS_QUERY = `*[_type == "event" && status in ["upcoming", "active"]]
  | order(startDate asc){
    _id, title, slug, status, startDate, endDate, location, lumaUrl,
    heroImage, panelGraphic, summary
  }`;

// The single active event drives the homepage Schedule section.
export const ACTIVE_EVENT_QUERY = `*[_type == "event" && status == "active"]
  | order(startDate asc)[0]{
    _id, title, slug, startDate, endDate, location, panelGraphic, summary,
    schedule[]{
      time, title, description, panelImage,
      panelists[]->{ _id, name, role, headshot }
    },
    sponsorTiers[]{
      tier,
      sponsors[]->{ _id, name, logo, url }
    }
  }`;

export const PAST_EVENTS_QUERY = `*[_type == "event" && status == "past"]
  | order(startDate desc){
    _id, title, slug, startDate, endDate, location, heroImage, summary
  }`;

// ---------- Newsroom ----------

export const FEATURED_ARTICLE_QUERY = `*[_type == "article" && featured == true]
  | order(publishedAt desc)[0]{
    _id, title, slug, excerpt, heroImage, publishedAt,
    "topics": topics[]->{ _id, title, slug },
    "author": author->{ _id, name }
  }`;

export const RECENT_ARTICLES_QUERY = `*[_type == "article"]
  | order(publishedAt desc)[0...$limit]{
    _id, title, slug, excerpt, heroImage, publishedAt,
    "topics": topics[]->{ _id, title, slug }
  }`;

export const ALL_ARTICLES_QUERY = `*[_type == "article"]
  | order(publishedAt desc){
    _id, title, slug, excerpt, heroImage, publishedAt, featured,
    "topics": topics[]->{ _id, title, slug }
  }`;

export const ARTICLE_BY_SLUG_QUERY = `*[_type == "article" && slug.current == $slug][0]{
  _id, title, slug, excerpt, heroImage, publishedAt, body,
  "topics": topics[]->{ _id, title, slug },
  "author": author->{ _id, name, role, headshot }
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
  "brands": *[_type == "sponsor" && workedWith == true]{ _id, name, logo, url }
}`;

// ---------- Helper ----------

/** Thin typed wrapper around sanityClient.fetch. */
export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
): Promise<T> {
  return sanityClient.fetch<T>(query, params);
}
