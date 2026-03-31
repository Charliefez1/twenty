import { defineObject, FieldType } from 'twenty-sdk';
import { OBJECTS } from 'src/constants/universal-identifiers.constant';

enum SessionType {
  AWARENESS = 'AWARENESS',
  CHAMPIONS = 'CHAMPIONS',
  MANAGERS = 'MANAGERS',
  LEADERS = 'LEADERS',
  COACHING = 'COACHING',
  CONSULTANCY = 'CONSULTANCY',
}

enum SessionStatus {
  DRAFT = 'DRAFT',
  CONFIRMED = 'CONFIRMED',
  CANCELLED = 'CANCELLED',
  FULL = 'FULL',
  COMPLETED = 'COMPLETED',
}

export const SESSION_OBJECT_ID = OBJECTS.session.id;

export default defineObject({
  universalIdentifier: SESSION_OBJECT_ID,
  nameSingular: 'ndgSession',
  namePlural: 'ndgSessions',
  labelSingular: 'Session',
  labelPlural: 'Sessions',
  description:
    'Training sessions — awareness, champions, managers, leaders, coaching, consultancy',
  icon: 'IconSchool',
  fields: [
    {
      universalIdentifier: OBJECTS.session.fields.sessionType,
      name: 'sessionType',
      type: FieldType.SELECT,
      label: 'Type',
      icon: 'IconCategory',
      options: [
        {
          value: SessionType.AWARENESS,
          label: 'Awareness',
          position: 0,
          color: 'blue',
        },
        {
          value: SessionType.CHAMPIONS,
          label: 'Champions',
          position: 1,
          color: 'green',
        },
        {
          value: SessionType.MANAGERS,
          label: 'Managers',
          position: 2,
          color: 'purple',
        },
        {
          value: SessionType.LEADERS,
          label: 'Leaders',
          position: 3,
          color: 'orange',
        },
        {
          value: SessionType.COACHING,
          label: 'Coaching',
          position: 4,
          color: 'turquoise',
        },
        {
          value: SessionType.CONSULTANCY,
          label: 'Consultancy',
          position: 5,
          color: 'yellow',
        },
      ],
    },
    {
      universalIdentifier: OBJECTS.session.fields.sessionDate,
      name: 'sessionDate',
      type: FieldType.DATE_TIME,
      label: 'Date & Time',
      icon: 'IconCalendar',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.session.fields.startTime,
      name: 'startTime',
      type: FieldType.TEXT,
      label: 'Start Time',
      description: 'e.g. "09:00"',
      icon: 'IconClock',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.session.fields.endTime,
      name: 'endTime',
      type: FieldType.TEXT,
      label: 'End Time',
      description: 'e.g. "17:00"',
      icon: 'IconClockOff',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.session.fields.isOnline,
      name: 'isOnline',
      type: FieldType.BOOLEAN,
      label: 'Online',
      icon: 'IconWorld',
      defaultValue: true,
    },
    {
      universalIdentifier: OBJECTS.session.fields.capacity,
      name: 'capacity',
      type: FieldType.NUMBER,
      label: 'Capacity',
      icon: 'IconUsers',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.session.fields.teamsLink,
      name: 'teamsLink',
      type: FieldType.LINKS,
      label: 'Teams Link',
      icon: 'IconVideo',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.session.fields.delegateCount,
      name: 'delegateCount',
      type: FieldType.NUMBER,
      label: 'Delegates',
      icon: 'IconUsersGroup',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.session.fields.cost,
      name: 'cost',
      type: FieldType.CURRENCY,
      label: 'Cost',
      icon: 'IconCurrencyPound',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.session.fields.sessionStatus,
      name: 'sessionStatus',
      type: FieldType.SELECT,
      label: 'Status',
      icon: 'IconProgress',
      defaultValue: `'${SessionStatus.DRAFT}'`,
      options: [
        {
          value: SessionStatus.DRAFT,
          label: 'Draft',
          position: 0,
          color: 'gray',
        },
        {
          value: SessionStatus.CONFIRMED,
          label: 'Confirmed',
          position: 1,
          color: 'green',
        },
        {
          value: SessionStatus.CANCELLED,
          label: 'Cancelled',
          position: 2,
          color: 'red',
        },
        {
          value: SessionStatus.FULL,
          label: 'Full',
          position: 3,
          color: 'orange',
        },
        {
          value: SessionStatus.COMPLETED,
          label: 'Completed',
          position: 4,
          color: 'blue',
        },
      ],
    },
  ],
});
