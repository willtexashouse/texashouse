import { defineType, defineField, defineArrayMember } from 'sanity';

// Newsroom article — maps from the Webflow "Newsrooms" collection. `topics` and
// `featured` are net-new (not in Webflow) and get set during/after import.
export const article = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Blog', value: 'blog' },
          { title: 'Media', value: 'media' },
        ],
        layout: 'radio',
      },
      initialValue: 'blog',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Powers the featured article on the Newsroom and homepage.',
      initialValue: false,
    }),
    defineField({
      name: 'topics',
      title: 'Topics',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'topic' }] })],
      description: 'Drives the Newsroom topic filter.',
    }),
    defineField({ name: 'summary', title: 'Summary', type: 'text', rows: 3 }),
    defineField({ name: 'mainImage', title: 'Main image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'author', title: 'Author', type: 'string' }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        defineArrayMember({ type: 'block' }),
        defineArrayMember({ type: 'image', options: { hotspot: true } }),
      ],
    }),
  ],
  orderings: [
    { title: 'Published, newest first', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] },
  ],
  preview: {
    select: { title: 'title', date: 'publishedAt', media: 'mainImage', featured: 'featured', type: 'type' },
    prepare({ title, date, media, featured, type }) {
      const d = date ? new Date(date).toLocaleDateString() : 'Unpublished';
      return { title, subtitle: `${featured ? '★ ' : ''}${type ?? ''} · ${d}`, media };
    },
  },
});
