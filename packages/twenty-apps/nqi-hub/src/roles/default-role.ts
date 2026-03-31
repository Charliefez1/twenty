import { defineRole } from 'twenty-sdk';
import { ROLES } from 'src/constants/universal-identifiers.constant';

export const DEFAULT_ROLE_UNIVERSAL_IDENTIFIER = ROLES.defaultFunction;

export default defineRole({
  universalIdentifier: DEFAULT_ROLE_UNIVERSAL_IDENTIFIER,
  label: 'NQI Hub default function role',
  description:
    'Default role for NQI Hub logic functions. Full read/write on all objects.',
  canReadAllObjectRecords: true,
  canUpdateAllObjectRecords: true,
  canSoftDeleteAllObjectRecords: true,
  canDestroyAllObjectRecords: false,
});
