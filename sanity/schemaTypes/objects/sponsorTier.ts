import { defineType, defineField, defineArrayMember } from 'sanity';

// A group of sponsors at a given tier within an event.
export const sponsorTier = defineType({
  name: 'sponsorTier',
  title: 'Sponsor tier',
  type: 'object',
  fields: [
    defineField({
      name: 'tier',
      title: 'Tier',
      type: 'string',
      options: {
        list: [
          { title: 'Partners', value: 'partner' },
          { title: 'Food & Beverage Partners', value: 'food_beverage' },
          { title: 'Experience Partners', value: 'experience' },
        ],
        layout: 'radio',
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'sponsors',
      title: 'Sponsors',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'sponsor' }] })],
    }),
  ],
  preview: {
    select: { tier: 'tier', count: 'sponsors.length' },
    prepare({ tier, count }) {
      const labels: Record<string, string> = {
        partner: 'Partners',
        food_beverage: 'Food & Beverage Partners',
        experience: 'Experience Partners',
      };
      return {
        title: labels[tier as string] ?? 'Sponsor tier',
        subtitle: `${count ?? 0} sponsor(s)`,
      };
    },
  },
});
