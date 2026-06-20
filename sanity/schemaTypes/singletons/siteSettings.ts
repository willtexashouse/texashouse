import { defineType, defineField, defineArrayMember } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'logo', title: 'Logo', type: 'image' }),
    defineField({
      name: 'nav',
      title: 'Primary navigation',
      type: 'array',
      of: [defineArrayMember({ type: 'navLink' })],
    }),
    defineField({
      name: 'socials',
      title: 'Social links',
      type: 'array',
      of: [defineArrayMember({ type: 'socialLink' })],
    }),
    defineField({
      name: 'mission',
      title: 'Mission statement (footer)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'footerLinks',
      title: 'Footer links (Privacy, Terms, …)',
      type: 'array',
      of: [defineArrayMember({ type: 'navLink' })],
    }),
    defineField({ name: 'contactEmail', title: 'Contact email', type: 'string' }),
  ],
  preview: {
    prepare() {
      return { title: 'Site Settings' };
    },
  },
});
