import { defineType, defineField, defineArrayMember } from 'sanity';

// A single panel / session within an event's schedule.
export const scheduleItem = defineType({
  name: 'scheduleItem',
  title: 'Schedule item',
  type: 'object',
  fields: [
    defineField({ name: 'time', title: 'Time', type: 'string', description: 'e.g. "2:00 PM" or a date/time' }),
    defineField({ name: 'title', title: 'Panel / session title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({
      name: 'panelImage',
      title: 'Panel graphic (landscape)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'panelists',
      title: 'Panelists',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'person' }] })],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'time', media: 'panelImage' },
  },
});
