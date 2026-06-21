import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemaTypes';
import { deskStructure } from './sanity/structure';

const projectId =
  import.meta.env?.PUBLIC_SANITY_PROJECT_ID ||
  process.env.PUBLIC_SANITY_PROJECT_ID ||
  'naolvj96';

const dataset =
  import.meta.env?.PUBLIC_SANITY_DATASET ||
  process.env.PUBLIC_SANITY_DATASET ||
  'production';

export default defineConfig({
  name: 'texashouse',
  title: 'Texas House',
  projectId,
  dataset,
  plugins: [
    structureTool({ structure: deskStructure }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
