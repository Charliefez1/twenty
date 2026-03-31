import { defineObject, FieldType } from 'twenty-sdk';
import { OBJECTS } from 'src/constants/universal-identifiers.constant';

enum WorkshopStatus {
  DRAFT = 'DRAFT',
  PLANNING = 'PLANNING',
  CONFIRMED = 'CONFIRMED',
  MATERIALS_READY = 'MATERIALS_READY',
  DELIVERED = 'DELIVERED',
  FOLLOW_UP = 'FOLLOW_UP',
}

export const WORKSHOP_OBJECT_ID = OBJECTS.workshop.id;

export default defineObject({
  universalIdentifier: WORKSHOP_OBJECT_ID,
  nameSingular: 'ndgWorkshop',
  namePlural: 'ndgWorkshops',
  labelSingular: 'Workshop',
  labelPlural: 'Workshops',
  description: 'Neurodiversity training workshops and events',
  icon: 'IconPresentation',
  labelIdentifierFieldMetadataUniversalIdentifier:
    OBJECTS.workshop.fields.title,
  fields: [
    {
      universalIdentifier: OBJECTS.workshop.fields.description,
      name: 'workshopDescription',
      type: FieldType.RICH_TEXT,
      label: 'Description',
      icon: 'IconNotes',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.workshop.fields.workshopDate,
      name: 'workshopDate',
      type: FieldType.DATE_TIME,
      label: 'Date',
      icon: 'IconCalendar',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.workshop.fields.status,
      name: 'workshopStatus',
      type: FieldType.SELECT,
      label: 'Status',
      icon: 'IconProgress',
      defaultValue: `'${WorkshopStatus.DRAFT}'`,
      options: [
        {
          value: WorkshopStatus.DRAFT,
          label: 'Draft',
          position: 0,
          color: 'gray',
        },
        {
          value: WorkshopStatus.PLANNING,
          label: 'Planning',
          position: 1,
          color: 'blue',
        },
        {
          value: WorkshopStatus.CONFIRMED,
          label: 'Confirmed',
          position: 2,
          color: 'purple',
        },
        {
          value: WorkshopStatus.MATERIALS_READY,
          label: 'Materials Ready',
          position: 3,
          color: 'orange',
        },
        {
          value: WorkshopStatus.DELIVERED,
          label: 'Delivered',
          position: 4,
          color: 'green',
        },
        {
          value: WorkshopStatus.FOLLOW_UP,
          label: 'Follow Up',
          position: 5,
          color: 'turquoise',
        },
      ],
    },
    {
      universalIdentifier: OBJECTS.workshop.fields.location,
      name: 'workshopLocation',
      type: FieldType.ADDRESS,
      label: 'Location',
      icon: 'IconMapPin',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.workshop.fields.maxParticipants,
      name: 'maxParticipants',
      type: FieldType.NUMBER,
      label: 'Max Participants',
      icon: 'IconUsers',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.workshop.fields.deckUrl,
      name: 'deckUrl',
      type: FieldType.LINKS,
      label: 'Deck',
      icon: 'IconSlideshow',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.workshop.fields.feedbackUrl,
      name: 'feedbackUrl',
      type: FieldType.LINKS,
      label: 'Feedback Form',
      icon: 'IconForms',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.workshop.fields.tags,
      name: 'workshopTags',
      type: FieldType.ARRAY,
      label: 'Tags',
      icon: 'IconTag',
      isNullable: true,
    },
  ],
});
