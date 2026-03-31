import { defineObject, FieldType } from 'twenty-sdk';
import { OBJECTS } from 'src/constants/universal-identifiers.constant';

enum KirkpatrickLevel {
  L1 = 'L1',
  L3 = 'L3',
  L4 = 'L4',
}

export const DELIVERY_OBJECT_ID = OBJECTS.delivery.id;

export default defineObject({
  universalIdentifier: DELIVERY_OBJECT_ID,
  nameSingular: 'ndgDelivery',
  namePlural: 'ndgDeliveries',
  labelSingular: 'Delivery',
  labelPlural: 'Deliveries',
  description:
    'Training delivery events with satisfaction scoring and Kirkpatrick evaluation',
  icon: 'IconTruck',
  fields: [
    {
      universalIdentifier: OBJECTS.delivery.fields.deliveryDate,
      name: 'deliveryDate',
      type: FieldType.DATE_TIME,
      label: 'Date',
      icon: 'IconCalendar',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.delivery.fields.location,
      name: 'deliveryLocation',
      type: FieldType.ADDRESS,
      label: 'Location',
      icon: 'IconMapPin',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.delivery.fields.delegateCount,
      name: 'delegateCount',
      type: FieldType.NUMBER,
      label: 'Delegates',
      icon: 'IconUsersGroup',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.delivery.fields.satisfactionScore,
      name: 'satisfactionScore',
      type: FieldType.RATING,
      label: 'Satisfaction',
      icon: 'IconStar',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.delivery.fields.kirkpatrickLevel,
      name: 'kirkpatrickLevel',
      type: FieldType.SELECT,
      label: 'Kirkpatrick Level',
      description: 'Evaluation level: L1 (Reaction), L3 (Behaviour), L4 (Results)',
      icon: 'IconChartBar',
      isNullable: true,
      options: [
        {
          value: KirkpatrickLevel.L1,
          label: 'L1 - Reaction',
          position: 0,
          color: 'blue',
        },
        {
          value: KirkpatrickLevel.L3,
          label: 'L3 - Behaviour',
          position: 1,
          color: 'purple',
        },
        {
          value: KirkpatrickLevel.L4,
          label: 'L4 - Results',
          position: 2,
          color: 'green',
        },
      ],
    },
    {
      universalIdentifier: OBJECTS.delivery.fields.deliveryNotes,
      name: 'deliveryNotes',
      type: FieldType.RICH_TEXT,
      label: 'Notes',
      icon: 'IconNotes',
      isNullable: true,
    },
  ],
});
