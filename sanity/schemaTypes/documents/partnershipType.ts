import { defineType, defineField, defineArrayMember } from 'sanity';

// Sponsorship, In-Kind, Preferred Partner.
export const partnershipType = defineType({
  name: 'partnershipType',
  title: 'Partnership type',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [defineArrayMember({ type: 'block' })],
    }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
  orderings: [
    { title: 'Manual order', name: 'order', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'title' },
  },
});
