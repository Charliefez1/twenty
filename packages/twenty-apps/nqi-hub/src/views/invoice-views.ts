import { defineView } from 'twenty-sdk';
import { ViewType } from 'twenty-shared/types';
import {
  OBJECTS,
  VIEWS,
  VIEW_FIELDS,
} from 'src/constants/universal-identifiers.constant';

export const invoiceTableView = defineView({
  universalIdentifier: VIEWS.invoiceTable,
  name: 'All Invoices',
  objectUniversalIdentifier: OBJECTS.invoice.id,
  type: ViewType.TABLE,
  icon: 'IconList',
  position: 0,
  fields: [
    {
      universalIdentifier: VIEW_FIELDS.invoiceTable.invoiceNumber,
      fieldMetadataUniversalIdentifier: OBJECTS.invoice.fields.invoiceNumber,
      position: 0,
      isVisible: true,
      size: 140,
    },
    {
      universalIdentifier: VIEW_FIELDS.invoiceTable.status,
      fieldMetadataUniversalIdentifier: OBJECTS.invoice.fields.status,
      position: 1,
      isVisible: true,
      size: 120,
    },
    {
      universalIdentifier: VIEW_FIELDS.invoiceTable.company,
      fieldMetadataUniversalIdentifier: OBJECTS.invoice.fields.company,
      position: 2,
      isVisible: true,
      size: 180,
    },
    {
      universalIdentifier: VIEW_FIELDS.invoiceTable.total,
      fieldMetadataUniversalIdentifier: OBJECTS.invoice.fields.total,
      position: 3,
      isVisible: true,
      size: 120,
    },
    {
      universalIdentifier: VIEW_FIELDS.invoiceTable.dueDate,
      fieldMetadataUniversalIdentifier: OBJECTS.invoice.fields.dueDate,
      position: 4,
      isVisible: true,
      size: 120,
    },
    {
      universalIdentifier: VIEW_FIELDS.invoiceTable.paidDate,
      fieldMetadataUniversalIdentifier: OBJECTS.invoice.fields.paidDate,
      position: 5,
      isVisible: true,
      size: 120,
    },
  ],
});

export const invoiceKanbanView = defineView({
  universalIdentifier: VIEWS.invoiceKanban,
  name: 'Invoice Pipeline',
  objectUniversalIdentifier: OBJECTS.invoice.id,
  type: ViewType.KANBAN,
  icon: 'IconLayoutKanban',
  position: 1,
  fields: [
    {
      universalIdentifier: 'a1b0c2d3-e4f5-6789-abcd-310210000001',
      fieldMetadataUniversalIdentifier: OBJECTS.invoice.fields.invoiceNumber,
      position: 0,
      isVisible: true,
      size: 140,
    },
    {
      universalIdentifier: 'a1b0c2d3-e4f5-6789-abcd-310210000002',
      fieldMetadataUniversalIdentifier: OBJECTS.invoice.fields.company,
      position: 1,
      isVisible: true,
      size: 150,
    },
    {
      universalIdentifier: 'a1b0c2d3-e4f5-6789-abcd-310210000003',
      fieldMetadataUniversalIdentifier: OBJECTS.invoice.fields.total,
      position: 2,
      isVisible: true,
      size: 120,
    },
  ],
});
