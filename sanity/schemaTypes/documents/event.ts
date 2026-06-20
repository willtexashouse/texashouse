import { defineType, defineField, defineArrayMember } from 'sanity';

// Umbrella past event / showcase — maps from the Webflow "Activations" collection
// (e.g. SXSW 2025, SXSW London 2025, Race Weekend / F1 2025, SXSW 2026).
// Individual panels live in `session` and reference this. Everything is past;
// ordered by `date`.
export const event = defineType({
  name: 'event',
  title: 'Event',
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
      name: 'date',
      title: 'Date',
      type: 'datetime',
      description: 'Used to order events (newest first). e.g. SXSW 25 < SXSW London < Race Weekend < SXSW 26.',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      options: {
        list: [
          { title: 'Austin', value: 'austin' },
          { title: 'London', value: 'london' },
        ],
      },
    }),
    defineField({ name: 'coverImage', title: 'Cover image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'recapVideo', title: 'Recap video (URL)', type: 'url' }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [defineArrayMember({ type: 'block' })],
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [defineArrayMember({ type: 'image', options: { hotspot: true } })],
    }),
    defineField({ name: 'gallery2Title', title: 'Gallery 2 title', type: 'string' }),
    defineField({
      name: 'gallery2',
      title: 'Gallery 2',
      type: 'array',
      of: [defineArrayMember({ type: 'image', options: { hotspot: true } })],
    }),
    defineField({ name: 'featured', title: 'Featured', type: 'boolean', initialValue: false }),
  ],
  orderings: [
    { title: 'Date, newest first', name: 'dateDesc', by: [{ field: 'date', direction: 'desc' }] },
  ],
  preview: {
    select: { title: 'title', date: 'date', media: 'coverImage' },
    prepare({ title, date, media }) {
      const d = date ? new Date(date).toLocaleDateString() : '';
      return { title, subtitle: d, media };
    },
  },
});
