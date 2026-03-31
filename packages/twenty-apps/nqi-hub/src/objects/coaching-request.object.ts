import { defineObject, FieldType } from 'twenty-sdk';
import { OBJECTS } from 'src/constants/universal-identifiers.constant';

enum RequestStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  SCHEDULED = 'SCHEDULED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

export const COACHING_REQUEST_OBJECT_ID = OBJECTS.coachingRequest.id;

export default defineObject({
  universalIdentifier: COACHING_REQUEST_OBJECT_ID,
  nameSingular: 'ndgCoachingRequest',
  namePlural: 'ndgCoachingRequests',
  labelSingular: 'Coaching Request',
  labelPlural: 'Coaching Requests',
  description: '1:1 coaching booking requests from clients',
  icon: 'IconMessageCircle',
  fields: [
    {
      universalIdentifier: OBJECTS.coachingRequest.fields.requestNotes,
      name: 'requestNotes',
      type: FieldType.RICH_TEXT,
      label: 'Notes',
      icon: 'IconNotes',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.coachingRequest.fields.requestStatus,
      name: 'requestStatus',
      type: FieldType.SELECT,
      label: 'Status',
      icon: 'IconProgress',
      defaultValue: `'${RequestStatus.PENDING}'`,
      options: [
        {
          value: RequestStatus.PENDING,
          label: 'Pending',
          position: 0,
          color: 'gray',
        },
        {
          value: RequestStatus.APPROVED,
          label: 'Approved',
          position: 1,
          color: 'blue',
        },
        {
          value: RequestStatus.SCHEDULED,
          label: 'Scheduled',
          position: 2,
          color: 'purple',
        },
        {
          value: RequestStatus.COMPLETED,
          label: 'Completed',
          position: 3,
          color: 'green',
        },
        {
          value: RequestStatus.CANCELLED,
          label: 'Cancelled',
          position: 4,
          color: 'red',
        },
      ],
    },
    {
      universalIdentifier: OBJECTS.coachingRequest.fields.roleGroup,
      name: 'roleGroup',
      type: FieldType.SELECT,
      label: 'Role Group',
      icon: 'IconUsers',
      isNullable: true,
      options: [
        { value: 'EMPLOYEE', label: 'Employee', position: 0, color: 'blue' },
        { value: 'MANAGER', label: 'Manager', position: 1, color: 'purple' },
        { value: 'LEADER', label: 'Leader', position: 2, color: 'orange' },
        { value: 'HR', label: 'HR', position: 3, color: 'green' },
      ],
    },
  ],
});
