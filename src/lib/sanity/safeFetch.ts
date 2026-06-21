import { sanityFetch } from './queries';
import { projectId } from './client';

const isConfigured = Boolean(projectId) && projectId !== 'placeholder-project-id';

/**
 * Fetch from Sanity but never crash the build. Returns the provided fallback if
 * the project isn't configured or a query fails (e.g. an empty/private dataset
 * before content is imported), so `astro build` always succeeds. Once content
 * exists, it returns live data.
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
