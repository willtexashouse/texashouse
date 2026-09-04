import React from 'react';
import { PortableText } from '@portabletext/react';
import { urlFor } from '../lib/sanity/image';

/*
  Renders a Sanity Portable Text body. Rendered by Astro WITHOUT a client
  directive, so it becomes static HTML at build time and ships no JavaScript.
  Uses @portabletext/react, which is already a dependency — no new install.
*/
const components = {
  types: {
    image: ({ value }) =>
      value?.asset ? (
        <img
          src={urlFor(value).width(1400).url()}
          alt={value.alt || ''}
          loading="lazy"
        />
      ) : null,
  },
};

export default function PortableBody({ value }) {
  if (!value) return null;
  return <PortableText value={value} components={components} />;
}
