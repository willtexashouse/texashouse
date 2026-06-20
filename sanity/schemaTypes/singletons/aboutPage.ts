import { defineType, defineField, defineArrayMember } from 'sanity';

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({ name: 'heroHeadline', title: 'Hero headline', type: 'string' }),
    defineField({
      name: 'story',
      title: 'The story of Texas House',
      type: 'array',
      of: [defineArrayMember({ type: 'block' }), defineArrayMember({ type: 'image', options: { hotspot: true } })],
    }),
    defineField({
      name: 'why',
      title: 'Why we do it',
      type: 'array',
      of: [defineArrayMember({ type: 'block' })],
    }),
  ],
  // Team / Board / Advisors are pulled from `person` by group — not stored here.
  preview: {
    prepare() {
      return { title: 'About Page' };
    },
  },
});
