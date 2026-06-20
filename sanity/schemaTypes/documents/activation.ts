import { defineType, defineField } from 'sanity';

// "What we showcase": Music, Film, Research, Tech, Policy, Areas of Economic Opportunity.
export const activation = defineType({
  name: 'activation',
  title: 'Activation',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'icon', title: 'Icon', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'blurb', title: 'Blurb', type: 'text', rows: 2 }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
  orderings: [
    { title: 'Manual order', name: 'order', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'title', media: 'icon' },
  },
});
