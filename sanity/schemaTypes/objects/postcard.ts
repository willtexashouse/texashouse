import { defineType, defineField } from 'sanity';

// A single card in the homepage Postcard Showcase component.
export const postcard = defineType({
  name: 'postcard',
  title: 'Postcard',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'caption', title: 'Caption', type: 'string' }),
  ],
  preview: {
    select: { title: 'caption', media: 'image' },
    prepare({ title, media }) {
      return { title: title || 'Postcard', media };
    },
  },
});
