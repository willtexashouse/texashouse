import { defineType, defineField } from 'sanity';

// A navigation / footer link.
export const navLink = defineType({
  name: 'navLink',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Label', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'href', title: 'URL / path', type: 'string', validation: (r) => r.required() }),
  ],
  preview: {
    select: { title: 'label', subtitle: 'href' },
  },
});
