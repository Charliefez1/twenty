import { defineApplication } from 'twenty-sdk';
import { APP_ID } from 'src/constants/universal-identifiers.constant';
import { DEFAULT_ROLE_UNIVERSAL_IDENTIFIER } from 'src/roles/default-role';

export default defineApplication({
  universalIdentifier: APP_ID,
  displayName: 'NQI Hub',
  description:
    'Internal operations hub for NDG — projects, invoicing, workshops, sessions, delivery tracking, and client management built on top of Twenty CRM.',
  icon: 'IconBuildingSkyscraper',
  author: 'NDG (Neurodiversity Global)',
  defaultRoleUniversalIdentifier: DEFAULT_ROLE_UNIVERSAL_IDENTIFIER,
});
