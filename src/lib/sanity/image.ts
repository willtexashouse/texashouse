import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { sanityClient } from './client';

const builder = imageUrlBuilder(sanityClient);

/** Build a CDN URL for a Sanity image source. e.g. urlFor(img).width(800).url() */
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
