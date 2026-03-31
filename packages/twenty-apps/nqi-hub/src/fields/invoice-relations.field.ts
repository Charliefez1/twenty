/**
 * Invoice relations:
 * - Invoice → Company (MANY_TO_ONE)
 * - Invoice → Project (MANY_TO_ONE)
 * - Invoice → InvoiceItems (ONE_TO_MANY)
 */
import {
  defineField,
  FieldType,
  RelationType,
  OnDeleteAction,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
} from 'twenty-sdk';
import { OBJECTS } from 'src/constants/universal-identifiers.constant';

// ─── Invoice → Company ───────────────────────────────────────────────────────
const COMPANY_INVOICES_FIELD_ID = 'a1b0c2d3-e4f5-6789-abcd-600200000001';

export const invoiceCompanyField = defineField({
  universalIdentifier: OBJECTS.invoice.fields.company,
  objectUniversalIdentifier: OBJECTS.invoice.id,
  type: FieldType.RELATION,
  name: 'company',
  label: 'Company',
  icon: 'IconBuildingSkyscraper',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.company.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier: COMPANY_INVOICES_FIELD_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'companyId',
  },
});

export const companyInvoicesField = defineField({
  universalIdentifier: COMPANY_INVOICES_FIELD_ID,
  objectUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.company.universalIdentifier,
  type: FieldType.RELATION,
  name: 'ndgInvoices',
  label: 'Invoices',
  icon: 'IconFileInvoice',
  relationTargetObjectMetadataUniversalIdentifier: OBJECTS.invoice.id,
  relationTargetFieldMetadataUniversalIdentifier: OBJECTS.invoice.fields.company,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

// ─── Invoice → Project ───────────────────────────────────────────────────────
export const invoiceProjectField = defineField({
  universalIdentifier: OBJECTS.invoice.fields.project,
  objectUniversalIdentifier: OBJECTS.invoice.id,
  type: FieldType.RELATION,
  name: 'project',
  label: 'Project',
  icon: 'IconFolder',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier: OBJECTS.project.id,
  relationTargetFieldMetadataUniversalIdentifier:
    OBJECTS.project.fields.invoices,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'projectId',
  },
});

export const projectInvoicesField = defineField({
  universalIdentifier: OBJECTS.project.fields.invoices,
  objectUniversalIdentifier: OBJECTS.project.id,
  type: FieldType.RELATION,
  name: 'invoices',
  label: 'Invoices',
  icon: 'IconFileInvoice',
  relationTargetObjectMetadataUniversalIdentifier: OBJECTS.invoice.id,
  relationTargetFieldMetadataUniversalIdentifier: OBJECTS.invoice.fields.project,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

// ─── InvoiceItem → Invoice ───────────────────────────────────────────────────
export const invoiceItemInvoiceField = defineField({
  universalIdentifier: OBJECTS.invoiceItem.fields.invoice,
  objectUniversalIdentifier: OBJECTS.invoiceItem.id,
  type: FieldType.RELATION,
  name: 'invoice',
  label: 'Invoice',
  icon: 'IconFileInvoice',
  relationTargetObjectMetadataUniversalIdentifier: OBJECTS.invoice.id,
  relationTargetFieldMetadataUniversalIdentifier: OBJECTS.invoice.fields.items,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.CASCADE,
    joinColumnName: 'invoiceId',
  },
});

export const invoiceItemsField = defineField({
  universalIdentifier: OBJECTS.invoice.fields.items,
  objectUniversalIdentifier: OBJECTS.invoice.id,
  type: FieldType.RELATION,
  name: 'items',
  label: 'Line Items',
  icon: 'IconListDetails',
  relationTargetObjectMetadataUniversalIdentifier: OBJECTS.invoiceItem.id,
  relationTargetFieldMetadataUniversalIdentifier:
    OBJECTS.invoiceItem.fields.invoice,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

// ─── InvoiceItem → Service ───────────────────────────────────────────────────
const SERVICE_INVOICE_ITEMS_FIELD_ID = 'a1b0c2d3-e4f5-6789-abcd-600200000002';

export const invoiceItemServiceField = defineField({
  universalIdentifier: OBJECTS.invoiceItem.fields.service,
  objectUniversalIdentifier: OBJECTS.invoiceItem.id,
  type: FieldType.RELATION,
  name: 'service',
  label: 'Service',
  icon: 'IconBriefcase',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier: OBJECTS.service.id,
  relationTargetFieldMetadataUniversalIdentifier: SERVICE_INVOICE_ITEMS_FIELD_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'serviceId',
  },
});

export const serviceInvoiceItemsField = defineField({
  universalIdentifier: SERVICE_INVOICE_ITEMS_FIELD_ID,
  objectUniversalIdentifier: OBJECTS.service.id,
  type: FieldType.RELATION,
  name: 'invoiceItems',
  label: 'Invoice Items',
  icon: 'IconListDetails',
  relationTargetObjectMetadataUniversalIdentifier: OBJECTS.invoiceItem.id,
  relationTargetFieldMetadataUniversalIdentifier:
    OBJECTS.invoiceItem.fields.service,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
