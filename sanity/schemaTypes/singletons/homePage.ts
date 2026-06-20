import { defineType, defineField, defineArrayMember } from 'sanity';

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroHeadline',
      title: 'Hero headline lines',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      description: 'The mission lines shown in the hero (one per line).',
    }),
    defineField({
      name: 'heroCta',
      title: 'Hero CTA',
      type: 'navLink',
      description: 'Defaults to "Become a Partner" → /partnerships.',
    }),
    defineField({
      name: 'marqueeItems',
      title: 'Brand marquee items',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'postcards',
      title: 'Postcard showcase',
      type: 'array',
      of: [defineArrayMember({ type: 'postcard' })],
    }),
    defineField({
      name: 'activations',
      title: 'Activations (What we showcase)',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'activation' }] })],
    }),
    defineField({
      name: 'processBlurbs',
      title: 'Process blurbs (Superconnectors, Curated Connections, …)',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'processBlurb',
          fields: [
            defineField({ name: 'title', type: 'string' }),
            defineField({ name: 'description', type: 'text', rows: 2 }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Home Page' };
    },
  },
});
