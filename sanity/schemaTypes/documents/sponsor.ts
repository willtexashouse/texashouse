import { defineType, defineField, defineArrayMember } from 'sanity';

// Used in event/session sponsor lists AND the "Brands we've worked with" wall.
// Tier flags map from Webflow switches; see docs/webflow-migration.md for the
// confirmed mapping to the planning-sheet tiers (Partners / Experience / F&B).
export const sponsor = defineType({
  name: 'sponsor',
  title: 'Sponsor / Brand',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
      description: 'Prefer SVG or transparent PNG.',
    }),
    defineField({ name: 'link', title: 'Website', type: 'url' }),

    // Tier flags (a sponsor may carry more than one).
    defineField({ name: 'presenting', title: 'Tier 1 — Presenting Partner', type: 'boolean', initialValue: false }),
    defineField({ name: 'partner', title: 'Tier 2 — Partner', type: 'boolean', initialValue: false }),
    defineField({ name: 'experience', title: 'Experience Partner (Tier 3 / Activation)', type: 'boolean', initialValue: false }),
    defineField({ name: 'foodBeverage', title: 'Food & Beverage Partner', type: 'boolean', initialValue: false }),

    defineField({
      name: 'events',
      title: 'Sponsored events',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'event' }] })],
      description: 'Which event(s) this sponsor supported.',
    }),
    defineField({
      name: 'workedWith',
      title: "Show on 'Brands we've worked with'",
      type: 'boolean',
      initialValue: false,
    }),
    // Deliberately NO initialValue: the 52 imported sponsors have no value for
    // this field, and unset must mean "shown". Only an explicit `false` hides.
    defineField({
      name: 'marquee',
      title: 'Show in marquee',
      type: 'boolean',
      description:
        'Controls the scrolling logo strip on the home page. On by default — switch this off to keep this logo out of the strip (the sponsor stays everywhere else).',
    }),
  ],
  preview: {
    select: { title: 'name', media: 'logo' },
  },
});
