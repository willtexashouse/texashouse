import { createClient } from '@sanity/client';

// Falls back to a valid-format placeholder so the client constructs without a
// real project configured. `safeFetch` treats this placeholder as "unconfigured"
// and returns fallbacks instead of querying. See docs/setup.md.
export const projectId =
  import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'placeholder-project-id';
export const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = import.meta.env.PUBLIC_SANITY_API_VERSION || '2024-01-01';

// Server-side read token — only needed for private datasets / drafts.
const token = import.meta.env.SANITY_API_READ_TOKEN || undefined;

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: !token, // CDN for public reads; bypass when using a token (fresh/auth'd)
  token,
});
