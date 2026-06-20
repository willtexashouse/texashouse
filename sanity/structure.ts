import type { StructureResolver } from 'sanity/structure';

// Singletons appear as a single editable document (not a creatable list).
const SINGLETONS: { id: string; type: string; title: string }[] = [
  { id: 'siteSettings', type: 'siteSettings', title: 'Site Settings' },
  { id: 'homePage', type: 'homePage', title: 'Home Page' },
  { id: 'aboutPage', type: 'aboutPage', title: 'About Page' },
  { id: 'partnershipsPage', type: 'partnershipsPage', title: 'Partnerships Page' },
];

const SINGLETON_TYPES = new Set(SINGLETONS.map((s) => s.type));

export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Editorial / page content
      S.listItem()
        .title('Pages & Settings')
        .child(
          S.list()
            .title('Pages & Settings')
            .items(
              SINGLETONS.map((singleton) =>
                S.listItem()
                  .title(singleton.title)
                  .id(singleton.id)
                  .child(
                    S.document()
                      .schemaType(singleton.type)
                      .documentId(singleton.id),
                  ),
              ),
            ),
        ),
      S.divider(),

      // Events
      S.documentTypeListItem('event').title('Events'),
      S.documentTypeListItem('session').title('Sessions / Panels'),
      S.divider(),

      // Newsroom
      S.documentTypeListItem('article').title('Articles'),
      S.documentTypeListItem('topic').title('Topics'),
      S.divider(),

      // People & partners
      S.documentTypeListItem('person').title('People (Team / Board / Advisors)'),
      S.documentTypeListItem('sponsor').title('Sponsors & Brands'),
      S.divider(),

      // Reusable building blocks
      S.documentTypeListItem('activation').title('Activations'),
      S.documentTypeListItem('partnershipType').title('Partnership Types'),
      S.documentTypeListItem('faq').title('FAQs'),

      // Anything not explicitly listed above (and not a singleton)
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() != null &&
          ![
            'event',
            'session',
            'article',
            'topic',
            'person',
            'sponsor',
            'activation',
            'partnershipType',
            'faq',
            ...SINGLETON_TYPES,
          ].includes(item.getId() as string),
      ),
    ]);
