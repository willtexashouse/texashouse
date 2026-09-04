import { defineType, defineField, defineArrayMember } from 'sanity';

// One type for Team, Board of Directors, and Strategic Advisors (by `group`).
// Also reused as article authors and event panelists.
export const person = defineType({
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'role', title: 'Role / title', type: 'string' }),
    defineField({
      name: 'organization',
      title: 'Organization',
      type: 'string',
      description: 'Shown on Board / Advisor cards (e.g. the company or institution).',
    }),
    defineField({
      name: 'group',
      title: 'Group',
      type: 'string',
      options: {
        list: [
          { title: 'Team', value: 'team' },
          { title: 'Board of Directors', value: 'board' },
          { title: 'Strategic Advisor', value: 'advisor' },
        ],
        layout: 'radio',
      },
      description: 'Determines which About-page roster this person appears in.',
    }),
    defineField({ name: 'headshot', title: 'Headshot', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [defineArrayMember({ type: 'block' })],
    }),
    defineField({ name: 'order', title: 'Order', type: 'number', description: 'Manual order within the group.' }),
    defineField({
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [defineArrayMember({ type: 'socialLink' })],
    }),
  ],
  orderings: [
    { title: 'Manual order', name: 'order', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'name', subtitle: 'role', media: 'headshot' },
  },
});
