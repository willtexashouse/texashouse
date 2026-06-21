import { createClient } from '@sanity/client';

// Texas House Sanity project. projectId/dataset are public (safe to commit);
// the read token (if any) stays in env. Override via env vars if needed.
export const projectId =
  import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'naolvj96';
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
