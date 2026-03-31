/**
 * CoachingRequest relations:
 * - CoachingRequest → Company (MANY_TO_ONE)
 * - CoachingRequest → Session (MANY_TO_ONE)
 */
import {
  defineField,
  FieldType,
  RelationType,
  OnDeleteAction,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
} from 'twenty-sdk';
import { OBJECTS } from 'src/constants/universal-identifiers.constant';

// ─── CoachingRequest → Company ───────────────────────────────────────────────
const COMPANY_COACHING_REQUESTS_FIELD_ID =
  'a1b0c2d3-e4f5-6789-abcd-600600000001';

export const coachingRequestCompanyField = defineField({
  universalIdentifier: OBJECTS.coachingRequest.fields.company,
  objectUniversalIdentifier: OBJECTS.coachingRequest.id,
  type: FieldType.RELATION,
  name: 'company',
  label: 'Company',
  icon: 'IconBuildingSkyscraper',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.company.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier:
    COMPANY_COACHING_REQUESTS_FIELD_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'companyId',
  },
});

export const companyCoachingRequestsField = defineField({
  universalIdentifier: COMPANY_COACHING_REQUESTS_FIELD_ID,
  objectUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.company.universalIdentifier,
  type: FieldType.RELATION,
  name: 'ndgCoachingRequests',
  label: 'Coaching Requests',
  icon: 'IconMessageCircle',
  relationTargetObjectMetadataUniversalIdentifier: OBJECTS.coachingRequest.id,
  relationTargetFieldMetadataUniversalIdentifier:
    OBJECTS.coachingRequest.fields.company,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

// ─── CoachingRequest → Session ───────────────────────────────────────────────
const SESSION_COACHING_REQUESTS_FIELD_ID =
  'a1b0c2d3-e4f5-6789-abcd-600600000002';

export const coachingRequestSessionField = defineField({
  universalIdentifier: OBJECTS.coachingRequest.fields.session,
  objectUniversalIdentifier: OBJECTS.coachingRequest.id,
  type: FieldType.RELATION,
  name: 'session',
  label: 'Session',
  icon: 'IconSchool',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier: OBJECTS.session.id,
  relationTargetFieldMetadataUniversalIdentifier:
    SESSION_COACHING_REQUESTS_FIELD_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'sessionId',
  },
});

export const sessionCoachingRequestsField = defineField({
  universalIdentifier: SESSION_COACHING_REQUESTS_FIELD_ID,
  objectUniversalIdentifier: OBJECTS.session.id,
  type: FieldType.RELATION,
  name: 'coachingRequests',
  label: 'Coaching Requests',
  icon: 'IconMessageCircle',
  relationTargetObjectMetadataUniversalIdentifier: OBJECTS.coachingRequest.id,
  relationTargetFieldMetadataUniversalIdentifier:
    OBJECTS.coachingRequest.fields.session,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
