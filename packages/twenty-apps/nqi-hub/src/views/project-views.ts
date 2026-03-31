import { defineView } from 'twenty-sdk';
import { ViewType } from 'twenty-shared/types';
import {
  OBJECTS,
  VIEWS,
  VIEW_FIELDS,
} from 'src/constants/universal-identifiers.constant';

export const projectTableView = defineView({
  universalIdentifier: VIEWS.projectTable,
  name: 'All Projects',
  objectUniversalIdentifier: OBJECTS.project.id,
  type: ViewType.TABLE,
  icon: 'IconList',
  position: 0,
  fields: [
    {
      universalIdentifier: VIEW_FIELDS.projectTable.name,
      fieldMetadataUniversalIdentifier: OBJECTS.project.fields.name,
      position: 0,
      isVisible: true,
      size: 200,
    },
    {
      universalIdentifier: VIEW_FIELDS.projectTable.status,
      fieldMetadataUniversalIdentifier: OBJECTS.project.fields.status,
      position: 1,
      isVisible: true,
      size: 150,
    },
    {
      universalIdentifier: VIEW_FIELDS.projectTable.company,
      fieldMetadataUniversalIdentifier: OBJECTS.project.fields.company,
      position: 2,
      isVisible: true,
      size: 180,
    },
    {
      universalIdentifier: VIEW_FIELDS.projectTable.startDate,
      fieldMetadataUniversalIdentifier: OBJECTS.project.fields.startDate,
      position: 3,
      isVisible: true,
      size: 120,
    },
    {
      universalIdentifier: VIEW_FIELDS.projectTable.endDate,
      fieldMetadataUniversalIdentifier: OBJECTS.project.fields.endDate,
      position: 4,
      isVisible: true,
      size: 120,
    },
    {
      universalIdentifier: VIEW_FIELDS.projectTable.budget,
      fieldMetadataUniversalIdentifier: OBJECTS.project.fields.budget,
      position: 5,
      isVisible: true,
      size: 120,
    },
  ],
});

export const projectKanbanView = defineView({
  universalIdentifier: VIEWS.projectKanban,
  name: 'Project Pipeline',
  objectUniversalIdentifier: OBJECTS.project.id,
  type: ViewType.KANBAN,
  icon: 'IconLayoutKanban',
  position: 1,
  fields: [
    {
      universalIdentifier: 'a1b0c2d3-e4f5-6789-abcd-310110000001',
      fieldMetadataUniversalIdentifier: OBJECTS.project.fields.name,
      position: 0,
      isVisible: true,
      size: 200,
    },
    {
      universalIdentifier: 'a1b0c2d3-e4f5-6789-abcd-310110000002',
      fieldMetadataUniversalIdentifier: OBJECTS.project.fields.company,
      position: 1,
      isVisible: true,
      size: 150,
    },
    {
      universalIdentifier: 'a1b0c2d3-e4f5-6789-abcd-310110000003',
      fieldMetadataUniversalIdentifier: OBJECTS.project.fields.budget,
      position: 2,
      isVisible: true,
      size: 120,
    },
  ],
});
