import { defineObject, FieldType } from 'twenty-sdk';
import { OBJECTS } from 'src/constants/universal-identifiers.constant';

enum ProjectStatus {
  CONTRACTING = 'CONTRACTING',
  PROJECT_PLANNING = 'PROJECT_PLANNING',
  SESSION_PLANNING = 'SESSION_PLANNING',
  CONTENT_REVIEW = 'CONTENT_REVIEW',
  DELIVERY = 'DELIVERY',
  FEEDBACK_ANALYTICS = 'FEEDBACK_ANALYTICS',
  CLOSED = 'CLOSED',
}

export const PROJECT_OBJECT_ID = OBJECTS.project.id;

export default defineObject({
  universalIdentifier: PROJECT_OBJECT_ID,
  nameSingular: 'ndgProject',
  namePlural: 'ndgProjects',
  labelSingular: 'Project',
  labelPlural: 'Projects',
  description: 'Client engagement projects with stage-based workflow',
  icon: 'IconFolder',
  labelIdentifierFieldMetadataUniversalIdentifier: OBJECTS.project.fields.name,
  fields: [
    {
      universalIdentifier: OBJECTS.project.fields.status,
      name: 'projectStatus',
      type: FieldType.SELECT,
      label: 'Status',
      icon: 'IconProgress',
      defaultValue: `'${ProjectStatus.CONTRACTING}'`,
      options: [
        {
          value: ProjectStatus.CONTRACTING,
          label: 'Contracting',
          position: 0,
          color: 'gray',
        },
        {
          value: ProjectStatus.PROJECT_PLANNING,
          label: 'Project Planning',
          position: 1,
          color: 'blue',
        },
        {
          value: ProjectStatus.SESSION_PLANNING,
          label: 'Session Planning',
          position: 2,
          color: 'purple',
        },
        {
          value: ProjectStatus.CONTENT_REVIEW,
          label: 'Content Review',
          position: 3,
          color: 'orange',
        },
        {
          value: ProjectStatus.DELIVERY,
          label: 'Delivery',
          position: 4,
          color: 'yellow',
        },
        {
          value: ProjectStatus.FEEDBACK_ANALYTICS,
          label: 'Feedback & Analytics',
          position: 5,
          color: 'turquoise',
        },
        {
          value: ProjectStatus.CLOSED,
          label: 'Closed',
          position: 6,
          color: 'green',
        },
      ],
    },
    {
      universalIdentifier: OBJECTS.project.fields.stage,
      name: 'stage',
      type: FieldType.NUMBER,
      label: 'Stage',
      description: 'Numeric stage indicator (1-7)',
      icon: 'IconStairs',
      defaultValue: 1,
    },
    {
      universalIdentifier: OBJECTS.project.fields.startDate,
      name: 'startDate',
      type: FieldType.DATE,
      label: 'Start Date',
      icon: 'IconCalendar',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.project.fields.endDate,
      name: 'endDate',
      type: FieldType.DATE,
      label: 'End Date',
      icon: 'IconCalendarDue',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.project.fields.budget,
      name: 'budget',
      type: FieldType.CURRENCY,
      label: 'Budget',
      icon: 'IconCurrencyPound',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.project.fields.tags,
      name: 'tags',
      type: FieldType.ARRAY,
      label: 'Tags',
      icon: 'IconTag',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.project.fields.notes,
      name: 'projectNotes',
      type: FieldType.RICH_TEXT,
      label: 'Notes',
      icon: 'IconNotes',
      isNullable: true,
    },
  ],
});
