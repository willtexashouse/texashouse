import { defineType, defineField, defineArrayMember } from 'sanity';

export const partnershipsPage = defineType({
  name: 'partnershipsPage',
  title: 'Partnerships Page',
  type: 'document',
  fields: [
    defineField({
      name: 'headerCopy',
      title: 'Header copy',
      type: 'array',
      of: [defineArrayMember({ type: 'block' })],
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery (beneath header)',
      type: 'array',
      of: [defineArrayMember({ type: 'image', options: { hotspot: true } })],
    }),
    defineField({
      name: 'areasOfFocus',
      title: 'Areas of focus',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'activation' }] })],
    }),
    defineField({
      name: 'whatWeDo',
      title: 'What we do',
      type: 'array',
      of: [defineArrayMember({ type: 'block' })],
    }),
    defineField({
      name: 'whatToExpect',
      title: 'What to expect',
      type: 'array',
      of: [defineArrayMember({ type: 'block' })],
    }),
    defineField({
      name: 'partnershipTypes',
      title: 'Types of partnerships',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'partnershipType' }] })],
    }),
    defineField({
      name: 'faqs',
      title: 'FAQ',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'faq' }] })],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Partnerships Page' };
    },
  },
});
