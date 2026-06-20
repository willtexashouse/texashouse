import { defineType, defineField } from 'sanity';

// A social media link used in the header/footer.
export const socialLink = defineType({
  name: 'socialLink',
  title: 'Social link',
  type: 'object',
  fields: [
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        list: [
          { title: 'Instagram', value: 'instagram' },
          { title: 'X / Twitter', value: 'x' },
          { title: 'LinkedIn', value: 'linkedin' },
          { title: 'YouTube', value: 'youtube' },
          { title: 'TikTok', value: 'tiktok' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'url', title: 'URL', type: 'url', validation: (r) => r.required() }),
  ],
  preview: {
    select: { title: 'platform', subtitle: 'url' },
  },
});
