import { defineType, defineField, defineArrayMember } from 'sanity';

// A panel / session within an event — maps from the Webflow "Past Events" and
// "ROS Segments" (run-of-show) collections. References its parent `event` and
// carries sponsors, room, day, and times.
export const session = defineType({
  name: 'session',
  title: 'Session / Panel',
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
      name: 'event',
      title: 'Event',
      type: 'reference',
      to: [{ type: 'event' }],
      description: 'The umbrella event this session belongs to.',
    }),
    defineField({ name: 'date', title: 'Start', type: 'datetime' }),
    defineField({ name: 'endTime', title: 'End', type: 'datetime' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({
      name: 'room',
      title: 'Room',
      type: 'string',
      options: {
        list: [
          { title: 'Main Room', value: 'main_room' },
          { title: 'Rooftop', value: 'rooftop' },
          { title: 'CMYK', value: 'cmyk' },
        ],
      },
    }),
    defineField({
      name: 'eventDay',
      title: 'Event day',
      type: 'string',
      options: {
        list: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      },
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
    defineField({ name: 'shortDescription', title: 'Short description', type: 'text', rows: 2 }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [defineArrayMember({ type: 'block' }), defineArrayMember({ type: 'image', options: { hotspot: true } })],
    }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'rsvpLink', title: 'RSVP / Luma link', type: 'url' }),
    defineField({
      name: 'topics',
      title: 'Topics',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'topic' }] })],
    }),
    defineField({
      name: 'sponsors',
      title: 'Sponsors',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'sponsor' }] })],
      description: 'Sponsors / partners for this session (Webflow had up to 3).',
    }),
  ],
  orderings: [
    { title: 'Start time', name: 'dateAsc', by: [{ field: 'date', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'title', event: 'event.title', media: 'image' },
    prepare({ title, event, media }) {
      return { title, subtitle: event, media };
    },
  },
});
