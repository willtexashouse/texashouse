import { defineType, defineField, defineArrayMember } from 'sanity';

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
      name: 'status',
      title: 'Status',
      type: 'string',
      description:
        'Upcoming = shows in Upcoming Events. Active = also surfaces the Schedule section. Past = shows in Past Events.',
      options: {
        list: [
          { title: 'Upcoming', value: 'upcoming' },
          { title: 'Active (show schedule)', value: 'active' },
          { title: 'Past', value: 'past' },
        ],
        layout: 'radio',
      },
      initialValue: 'upcoming',
      validation: (r) => r.required(),
    }),
    defineField({ name: 'startDate', title: 'Start date', type: 'datetime' }),
    defineField({ name: 'endDate', title: 'End date', type: 'datetime' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({
      name: 'lumaUrl',
      title: 'Luma URL',
      type: 'url',
      description: 'Link out to the Luma event page.',
    }),
    defineField({ name: 'heroImage', title: 'Hero image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'panelGraphic',
      title: 'Panel graphic (landscape)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({ name: 'summary', title: 'Summary', type: 'text', rows: 3 }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [defineArrayMember({ type: 'block' })],
    }),
    defineField({
      name: 'schedule',
      title: 'Schedule (panels / sessions)',
      type: 'array',
      of: [defineArrayMember({ type: 'scheduleItem' })],
    }),
    defineField({
      name: 'sponsorTiers',
      title: 'Sponsor tiers',
      type: 'array',
      of: [defineArrayMember({ type: 'sponsorTier' })],
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [defineArrayMember({ type: 'image', options: { hotspot: true } })],
    }),
    defineField({ name: 'featured', title: 'Featured', type: 'boolean', initialValue: false }),
  ],
  orderings: [
    {
      title: 'Start date, newest first',
      name: 'startDateDesc',
      by: [{ field: 'startDate', direction: 'desc' }],
    },
  ],
  preview: {
    select: { title: 'title', status: 'status', media: 'heroImage' },
    prepare({ title, status, media }) {
      return { title, subtitle: status ? `Status: ${status}` : undefined, media };
    },
  },
});
