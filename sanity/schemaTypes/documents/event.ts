import { defineType, defineField, defineArrayMember } from 'sanity';

// Umbrella event / showcase — maps from the Webflow "Activations" collection
// (e.g. SXSW 2025, SXSW London 2025, Race Weekend / F1 2025, SXSW 2026).
// Individual panels live in `session` and reference this.
//
// STATUS IS DERIVED FROM DATES, NOT STORED. `date` is the start, `endDate` the
// end. A run that has finished IS past — nobody has to remember to flip a
// switch, which is exactly how the live Webflow site ended up promoting SXSW
// 2026 in its <title> while also listing it under Past Events.
// `statusOverride` exists only for the cases dates can't express (postponed,
// cancelled). Blank means derived. See src/lib/sanity/queries.ts.
export const event = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      description: 'Used to order events (newest first). e.g. SXSW 25 < SXSW London < Race Weekend < SXSW 26.',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End date',
      type: 'datetime',
      description:
        'Last day of the run. Leave blank for a single-day event (the start date is then used as the end). This is what retires an event into Past Events.',
    }),
    defineField({
      name: 'statusOverride',
      title: 'Status override',
      type: 'string',
      description:
        'Leave blank in almost every case — status is worked out from the dates. Set this only when the dates cannot tell the truth.',
      options: {
        list: [
          { title: 'Upcoming (force)', value: 'upcoming' },
          { title: 'Happening now (force)', value: 'active' },
          { title: 'Past (force)', value: 'past' },
          { title: 'Cancelled', value: 'cancelled' },
          { title: 'Postponed', value: 'postponed' },
        ],
        layout: 'dropdown',
      },
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      options: {
        list: [
          { title: 'Austin', value: 'austin' },
          { title: 'London', value: 'london' },
        ],
      },
    }),
    defineField({ name: 'coverImage', title: 'Cover image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'recapVideo', title: 'Recap video (URL)', type: 'url' }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [defineArrayMember({ type: 'block' })],
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [defineArrayMember({ type: 'image', options: { hotspot: true } })],
    }),
    defineField({ name: 'gallery2Title', title: 'Gallery 2 title', type: 'string' }),
    defineField({
      name: 'gallery2',
      title: 'Gallery 2',
      type: 'array',
      of: [defineArrayMember({ type: 'image', options: { hotspot: true } })],
    }),
    defineField({ name: 'featured', title: 'Featured', type: 'boolean', initialValue: false }),
  ],
  orderings: [
    { title: 'Date, newest first', name: 'dateDesc', by: [{ field: 'date', direction: 'desc' }] },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      endDate: 'endDate',
      override: 'statusOverride',
      media: 'coverImage',
    },
    prepare({ title, date, endDate, override, media }) {
      const now = Date.now();
      const start = date ? new Date(date).getTime() : null;
      const end = new Date(endDate ?? date ?? 0).getTime();
      let status = 'no dates';
      if (start !== null) {
        status = now < start ? 'upcoming' : now > end ? 'past' : 'happening now';
      }
      const label = override ? `${override} (forced)` : status;
      const d = date ? new Date(date).toLocaleDateString() : '';
      return { title, subtitle: [label.toUpperCase(), d].filter(Boolean).join(' · '), media };
    },
  },
});
