import { defineObject, FieldType } from 'twenty-sdk';
import { OBJECTS } from 'src/constants/universal-identifiers.constant';

export const SERVICE_OBJECT_ID = OBJECTS.service.id;

export default defineObject({
  universalIdentifier: SERVICE_OBJECT_ID,
  nameSingular: 'ndgService',
  namePlural: 'ndgServices',
  labelSingular: 'Service',
  labelPlural: 'Services',
  description: 'Fixed-price service catalogue',
  icon: 'IconBriefcase',
  labelIdentifierFieldMetadataUniversalIdentifier: OBJECTS.service.fields.name,
  fields: [
    {
      universalIdentifier: OBJECTS.service.fields.category,
      name: 'category',
      type: FieldType.SELECT,
      label: 'Category',
      icon: 'IconCategory',
      options: [
        { value: 'TRAINING', label: 'Training', position: 0, color: 'blue' },
        { value: 'COACHING', label: 'Coaching', position: 1, color: 'green' },
        {
          value: 'CONSULTANCY',
          label: 'Consultancy',
          position: 2,
          color: 'purple',
        },
        { value: 'CONTENT', label: 'Content', position: 3, color: 'orange' },
        { value: 'OTHER', label: 'Other', position: 4, color: 'gray' },
      ],
    },
    {
      universalIdentifier: OBJECTS.service.fields.price,
      name: 'price',
      type: FieldType.CURRENCY,
      label: 'Price',
      icon: 'IconCurrencyPound',
    },
    {
      universalIdentifier: OBJECTS.service.fields.duration,
      name: 'duration',
      type: FieldType.TEXT,
      label: 'Duration',
      description: 'e.g. "Half day", "Full day", "2 hours"',
      icon: 'IconClock',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.service.fields.vatRate,
      name: 'vatRate',
      type: FieldType.NUMBER,
      label: 'VAT Rate (%)',
      icon: 'IconPercentage',
      defaultValue: 20,
    },
    {
      universalIdentifier: OBJECTS.service.fields.isActive,
      name: 'isActive',
      type: FieldType.BOOLEAN,
      label: 'Active',
      icon: 'IconToggleRight',
      defaultValue: true,
    },
  ],
});
