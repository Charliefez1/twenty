import { defineObject, FieldType } from 'twenty-sdk';
import { OBJECTS } from 'src/constants/universal-identifiers.constant';

enum BookingStatus {
  CONFIRMED = 'CONFIRMED',
  WAITLIST = 'WAITLIST',
  CANCELLED = 'CANCELLED',
}

export const SESSION_ATTENDEE_OBJECT_ID = OBJECTS.sessionAttendee.id;

export default defineObject({
  universalIdentifier: SESSION_ATTENDEE_OBJECT_ID,
  nameSingular: 'ndgSessionAttendee',
  namePlural: 'ndgSessionAttendees',
  labelSingular: 'Session Attendee',
  labelPlural: 'Session Attendees',
  description: 'Delegates booked onto training sessions',
  icon: 'IconUserCheck',
  labelIdentifierFieldMetadataUniversalIdentifier:
    OBJECTS.sessionAttendee.fields.attendeeName,
  fields: [
    {
      universalIdentifier: OBJECTS.sessionAttendee.fields.attendeeName,
      name: 'attendeeName',
      type: FieldType.TEXT,
      label: 'Name',
      icon: 'IconUser',
    },
    {
      universalIdentifier: OBJECTS.sessionAttendee.fields.attendeeEmail,
      name: 'attendeeEmail',
      type: FieldType.EMAILS,
      label: 'Email',
      icon: 'IconMail',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.sessionAttendee.fields.bookingStatus,
      name: 'bookingStatus',
      type: FieldType.SELECT,
      label: 'Status',
      icon: 'IconProgress',
      defaultValue: `'${BookingStatus.CONFIRMED}'`,
      options: [
        {
          value: BookingStatus.CONFIRMED,
          label: 'Confirmed',
          position: 0,
          color: 'green',
        },
        {
          value: BookingStatus.WAITLIST,
          label: 'Waitlist',
          position: 1,
          color: 'orange',
        },
        {
          value: BookingStatus.CANCELLED,
          label: 'Cancelled',
          position: 2,
          color: 'red',
        },
      ],
    },
  ],
});
