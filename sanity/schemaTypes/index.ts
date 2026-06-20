import type { SchemaTypeDefinition } from 'sanity';

// Objects
import { postcard } from './objects/postcard';
import { navLink } from './objects/navLink';
import { socialLink } from './objects/socialLink';

// Documents
import { event } from './documents/event';
import { session } from './documents/session';
import { article } from './documents/article';
import { topic } from './documents/topic';
import { person } from './documents/person';
import { sponsor } from './documents/sponsor';
import { activation } from './documents/activation';
import { partnershipType } from './documents/partnershipType';
import { faq } from './documents/faq';

// Singletons
import { siteSettings } from './singletons/siteSettings';
import { homePage } from './singletons/homePage';
import { aboutPage } from './singletons/aboutPage';
import { partnershipsPage } from './singletons/partnershipsPage';

export const schemaTypes: SchemaTypeDefinition[] = [
  // Objects
  postcard,
  navLink,
  socialLink,
  // Documents
  event,
  session,
  article,
  topic,
  person,
  sponsor,
  activation,
  partnershipType,
  faq,
  // Singletons
  siteSettings,
  homePage,
  aboutPage,
  partnershipsPage,
];
