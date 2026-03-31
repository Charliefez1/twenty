/**
 * Workshop & Session relations:
 * - Workshop → Project (MANY_TO_ONE)
 * - Workshop → Facilitator (MANY_TO_ONE)
 * - Session → Workshop (MANY_TO_ONE)
 * - Session → Facilitator (MANY_TO_ONE)
 * - SessionAttendee → Session (MANY_TO_ONE)
 */
import {
  defineField,
  FieldType,
  RelationType,
  OnDeleteAction,
} from 'twenty-sdk';
import { OBJECTS } from 'src/constants/universal-identifiers.constant';

// ─── Workshop → Project ──────────────────────────────────────────────────────
export const workshopProjectField = defineField({
  universalIdentifier: OBJECTS.workshop.fields.project,
  objectUniversalIdentifier: OBJECTS.workshop.id,
  type: FieldType.RELATION,
  name: 'project',
  label: 'Project',
  icon: 'IconFolder',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier: OBJECTS.project.id,
  relationTargetFieldMetadataUniversalIdentifier:
    OBJECTS.project.fields.workshops,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'projectId',
  },
});

export const projectWorkshopsField = defineField({
  universalIdentifier: OBJECTS.project.fields.workshops,
  objectUniversalIdentifier: OBJECTS.project.id,
  type: FieldType.RELATION,
  name: 'workshops',
  label: 'Workshops',
  icon: 'IconPresentation',
  relationTargetObjectMetadataUniversalIdentifier: OBJECTS.workshop.id,
  relationTargetFieldMetadataUniversalIdentifier:
    OBJECTS.workshop.fields.project,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

// ─── Workshop → Facilitator ──────────────────────────────────────────────────
export const workshopFacilitatorField = defineField({
  universalIdentifier: OBJECTS.workshop.fields.facilitator,
  objectUniversalIdentifier: OBJECTS.workshop.id,
  type: FieldType.RELATION,
  name: 'facilitator',
  label: 'Facilitator',
  icon: 'IconUserStar',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier: OBJECTS.facilitator.id,
  relationTargetFieldMetadataUniversalIdentifier:
    OBJECTS.facilitator.fields.workshops,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'facilitatorId',
  },
});

export const facilitatorWorkshopsField = defineField({
  universalIdentifier: OBJECTS.facilitator.fields.workshops,
  objectUniversalIdentifier: OBJECTS.facilitator.id,
  type: FieldType.RELATION,
  name: 'workshops',
  label: 'Workshops',
  icon: 'IconPresentation',
  relationTargetObjectMetadataUniversalIdentifier: OBJECTS.workshop.id,
  relationTargetFieldMetadataUniversalIdentifier:
    OBJECTS.workshop.fields.facilitator,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

// ─── Session → Workshop ──────────────────────────────────────────────────────
export const sessionWorkshopField = defineField({
  universalIdentifier: OBJECTS.session.fields.workshop,
  objectUniversalIdentifier: OBJECTS.session.id,
  type: FieldType.RELATION,
  name: 'workshop',
  label: 'Workshop',
  icon: 'IconPresentation',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier: OBJECTS.workshop.id,
  relationTargetFieldMetadataUniversalIdentifier:
    OBJECTS.workshop.fields.sessions,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'workshopId',
  },
});

export const workshopSessionsField = defineField({
  universalIdentifier: OBJECTS.workshop.fields.sessions,
  objectUniversalIdentifier: OBJECTS.workshop.id,
  type: FieldType.RELATION,
  name: 'sessions',
  label: 'Sessions',
  icon: 'IconSchool',
  relationTargetObjectMetadataUniversalIdentifier: OBJECTS.session.id,
  relationTargetFieldMetadataUniversalIdentifier:
    OBJECTS.session.fields.workshop,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

// ─── Session → Facilitator ───────────────────────────────────────────────────
export const sessionFacilitatorField = defineField({
  universalIdentifier: OBJECTS.session.fields.facilitator,
  objectUniversalIdentifier: OBJECTS.session.id,
  type: FieldType.RELATION,
  name: 'facilitator',
  label: 'Facilitator',
  icon: 'IconUserStar',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier: OBJECTS.facilitator.id,
  relationTargetFieldMetadataUniversalIdentifier:
    OBJECTS.facilitator.fields.sessions,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'facilitatorId',
  },
});

export const facilitatorSessionsField = defineField({
  universalIdentifier: OBJECTS.facilitator.fields.sessions,
  objectUniversalIdentifier: OBJECTS.facilitator.id,
  type: FieldType.RELATION,
  name: 'sessions',
  label: 'Sessions',
  icon: 'IconSchool',
  relationTargetObjectMetadataUniversalIdentifier: OBJECTS.session.id,
  relationTargetFieldMetadataUniversalIdentifier:
    OBJECTS.session.fields.facilitator,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

// ─── SessionAttendee → Session ───────────────────────────────────────────────
export const attendeeSessionField = defineField({
  universalIdentifier: OBJECTS.sessionAttendee.fields.session,
  objectUniversalIdentifier: OBJECTS.sessionAttendee.id,
  type: FieldType.RELATION,
  name: 'session',
  label: 'Session',
  icon: 'IconSchool',
  relationTargetObjectMetadataUniversalIdentifier: OBJECTS.session.id,
  relationTargetFieldMetadataUniversalIdentifier:
    OBJECTS.session.fields.attendees,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.CASCADE,
    joinColumnName: 'sessionId',
  },
});

export const sessionAttendeesField = defineField({
  universalIdentifier: OBJECTS.session.fields.attendees,
  objectUniversalIdentifier: OBJECTS.session.id,
  type: FieldType.RELATION,
  name: 'attendees',
  label: 'Attendees',
  icon: 'IconUsers',
  relationTargetObjectMetadataUniversalIdentifier: OBJECTS.sessionAttendee.id,
  relationTargetFieldMetadataUniversalIdentifier:
    OBJECTS.sessionAttendee.fields.session,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
