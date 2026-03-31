/**
 * Project relations:
 * - Project → Company (MANY_TO_ONE)
 * - Project → Person as Owner (MANY_TO_ONE)
 */
import {
  defineField,
  FieldType,
  RelationType,
  OnDeleteAction,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
} from 'twenty-sdk';
import { OBJECTS } from 'src/constants/universal-identifiers.constant';

// ─── Project → Company ───────────────────────────────────────────────────────
// Reverse field on Company (ONE_TO_MANY)
const COMPANY_PROJECTS_FIELD_ID = 'a1b0c2d3-e4f5-6789-abcd-600100000001';

export const projectCompanyField = defineField({
  universalIdentifier: OBJECTS.project.fields.company,
  objectUniversalIdentifier: OBJECTS.project.id,
  type: FieldType.RELATION,
  name: 'company',
  label: 'Company',
  icon: 'IconBuildingSkyscraper',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.company.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier: COMPANY_PROJECTS_FIELD_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'companyId',
  },
});

export const companyProjectsField = defineField({
  universalIdentifier: COMPANY_PROJECTS_FIELD_ID,
  objectUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.company.universalIdentifier,
  type: FieldType.RELATION,
  name: 'ndgProjects',
  label: 'Projects',
  icon: 'IconFolder',
  relationTargetObjectMetadataUniversalIdentifier: OBJECTS.project.id,
  relationTargetFieldMetadataUniversalIdentifier: OBJECTS.project.fields.company,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

// ─── Project → Person (Owner) ────────────────────────────────────────────────
const PERSON_OWNED_PROJECTS_FIELD_ID = 'a1b0c2d3-e4f5-6789-abcd-600100000002';

export const projectOwnerField = defineField({
  universalIdentifier: OBJECTS.project.fields.owner,
  objectUniversalIdentifier: OBJECTS.project.id,
  type: FieldType.RELATION,
  name: 'owner',
  label: 'Owner',
  icon: 'IconUser',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.person.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier:
    PERSON_OWNED_PROJECTS_FIELD_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'ownerId',
  },
});

export const personOwnedProjectsField = defineField({
  universalIdentifier: PERSON_OWNED_PROJECTS_FIELD_ID,
  objectUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.person.universalIdentifier,
  type: FieldType.RELATION,
  name: 'ndgOwnedProjects',
  label: 'Owned Projects',
  icon: 'IconFolder',
  relationTargetObjectMetadataUniversalIdentifier: OBJECTS.project.id,
  relationTargetFieldMetadataUniversalIdentifier: OBJECTS.project.fields.owner,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
