import { defineType, defineField } from 'sanity';

// Used in event sponsor tiers AND the "Brands we've worked with" wall.
export const sponsor = defineType({
  name: 'sponsor',
  title: 'Sponsor / Brand',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
      description: 'Prefer SVG or transparent PNG.',
    }),
    defineField({ name: 'url', title: 'Website', type: 'url' }),
    defineField({
      name: 'workedWith',
      title: "Show on 'Brands we've worked with'",
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: 'name', media: 'logo' },
  },
});
