import { sanityFetch } from './queries';
import { projectId } from './client';

const isConfigured = Boolean(projectId) && projectId !== 'placeholder-project-id';

/**
 * Fetch from Sanity but never crash the build. Until a real Sanity project is
 * configured (see docs/setup.md), this returns the provided fallback so pages
 * still render and `astro build` succeeds. Once env vars are set, it returns
 * live content.
 */
export async function safeFetch<T>(
  query: string,
  params: Record<string, unknown>,
  fallback: T,
): Promise<T> {
  if (!isConfigured) return fallback;
  try {
    return await sanityFetch<T>(query, params);
  } catch (err) {
    console.warn('[sanity] fetch failed, using fallback:', (err as Error).message);
    return fallback;
  }
}

export { isConfigured };
