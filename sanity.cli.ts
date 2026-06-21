import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: process.env.PUBLIC_SANITY_PROJECT_ID || 'naolvj96',
    dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
  },
  deployment: {
    appId: 'tlp32mzeyjcqjahv6kxrxd5y',
  },
});
