import { defineView } from 'twenty-sdk';
import { ViewType } from 'twenty-shared/types';
import {
  OBJECTS,
  VIEWS,
  VIEW_FIELDS,
} from 'src/constants/universal-identifiers.constant';

export const workshopTableView = defineView({
  universalIdentifier: VIEWS.workshopTable,
  name: 'All Workshops',
  objectUniversalIdentifier: OBJECTS.workshop.id,
  type: ViewType.TABLE,
  icon: 'IconList',
  position: 0,
  fields: [
    {
      universalIdentifier: VIEW_FIELDS.workshopTable.title,
      fieldMetadataUniversalIdentifier: OBJECTS.workshop.fields.title,
      position: 0,
      isVisible: true,
      size: 200,
    },
    {
      universalIdentifier: VIEW_FIELDS.workshopTable.status,
      fieldMetadataUniversalIdentifier: OBJECTS.workshop.fields.status,
      position: 1,
      isVisible: true,
      size: 140,
    },
    {
      universalIdentifier: VIEW_FIELDS.workshopTable.workshopDate,
      fieldMetadataUniversalIdentifier: OBJECTS.workshop.fields.workshopDate,
      position: 2,
      isVisible: true,
      size: 140,
    },
    {
      universalIdentifier: VIEW_FIELDS.workshopTable.location,
      fieldMetadataUniversalIdentifier: OBJECTS.workshop.fields.location,
      position: 3,
      isVisible: true,
      size: 180,
    },
    {
      universalIdentifier: VIEW_FIELDS.workshopTable.facilitator,
      fieldMetadataUniversalIdentifier: OBJECTS.workshop.fields.facilitator,
      position: 4,
      isVisible: true,
      size: 150,
    },
  ],
});

export const workshopKanbanView = defineView({
  universalIdentifier: VIEWS.workshopKanban,
  name: 'Workshop Pipeline',
  objectUniversalIdentifier: OBJECTS.workshop.id,
  type: ViewType.KANBAN,
  icon: 'IconLayoutKanban',
  position: 1,
});

export const workshopCalendarView = defineView({
  universalIdentifier: VIEWS.workshopCalendar,
  name: 'Workshop Calendar',
  objectUniversalIdentifier: OBJECTS.workshop.id,
  type: ViewType.CALENDAR,
  icon: 'IconCalendar',
  position: 2,
});

export const sessionCalendarView = defineView({
  universalIdentifier: VIEWS.sessionCalendar,
  name: 'Session Calendar',
  objectUniversalIdentifier: OBJECTS.session.id,
  type: ViewType.CALENDAR,
  icon: 'IconCalendar',
  position: 0,
});

export const sessionKanbanView = defineView({
  universalIdentifier: VIEWS.sessionKanban,
  name: 'Session Status',
  objectUniversalIdentifier: OBJECTS.session.id,
  type: ViewType.KANBAN,
  icon: 'IconLayoutKanban',
  position: 1,
});
