import { defineObject, FieldType } from 'twenty-sdk';
import { OBJECTS } from 'src/constants/universal-identifiers.constant';

enum InvoiceStatus {
  DRAFT = 'DRAFT',
  SENT = 'SENT',
  PAID = 'PAID',
  OVERDUE = 'OVERDUE',
  CANCELLED = 'CANCELLED',
}

export const INVOICE_OBJECT_ID = OBJECTS.invoice.id;

export default defineObject({
  universalIdentifier: INVOICE_OBJECT_ID,
  nameSingular: 'ndgInvoice',
  namePlural: 'ndgInvoices',
  labelSingular: 'Invoice',
  labelPlural: 'Invoices',
  description: 'Client invoices with line items, VAT, and payment tracking',
  icon: 'IconFileInvoice',
  labelIdentifierFieldMetadataUniversalIdentifier:
    OBJECTS.invoice.fields.invoiceNumber,
  fields: [
    {
      universalIdentifier: OBJECTS.invoice.fields.invoiceNumber,
      name: 'invoiceNumber',
      type: FieldType.TEXT,
      label: 'Invoice Number',
      icon: 'IconHash',
    },
    {
      universalIdentifier: OBJECTS.invoice.fields.status,
      name: 'invoiceStatus',
      type: FieldType.SELECT,
      label: 'Status',
      icon: 'IconProgress',
      defaultValue: `'${InvoiceStatus.DRAFT}'`,
      options: [
        {
          value: InvoiceStatus.DRAFT,
          label: 'Draft',
          position: 0,
          color: 'gray',
        },
        {
          value: InvoiceStatus.SENT,
          label: 'Sent',
          position: 1,
          color: 'blue',
        },
        {
          value: InvoiceStatus.PAID,
          label: 'Paid',
          position: 2,
          color: 'green',
        },
        {
          value: InvoiceStatus.OVERDUE,
          label: 'Overdue',
          position: 3,
          color: 'red',
        },
        {
          value: InvoiceStatus.CANCELLED,
          label: 'Cancelled',
          position: 4,
          color: 'gray',
        },
      ],
    },
    {
      universalIdentifier: OBJECTS.invoice.fields.issueDate,
      name: 'issueDate',
      type: FieldType.DATE,
      label: 'Issue Date',
      icon: 'IconCalendar',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.invoice.fields.dueDate,
      name: 'dueDate',
      type: FieldType.DATE,
      label: 'Due Date',
      icon: 'IconCalendarDue',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.invoice.fields.subtotal,
      name: 'subtotal',
      type: FieldType.CURRENCY,
      label: 'Subtotal',
      icon: 'IconCurrencyPound',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.invoice.fields.vatAmount,
      name: 'vatAmount',
      type: FieldType.CURRENCY,
      label: 'VAT Amount',
      description: 'VAT at 20%',
      icon: 'IconReceipt',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.invoice.fields.total,
      name: 'total',
      type: FieldType.CURRENCY,
      label: 'Total',
      icon: 'IconCurrencyPound',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.invoice.fields.paidDate,
      name: 'paidDate',
      type: FieldType.DATE,
      label: 'Paid Date',
      icon: 'IconCheck',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.invoice.fields.quickbooksId,
      name: 'quickbooksId',
      type: FieldType.TEXT,
      label: 'QuickBooks ID',
      icon: 'IconLink',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.invoice.fields.invoiceNotes,
      name: 'invoiceNotes',
      type: FieldType.RICH_TEXT,
      label: 'Notes',
      icon: 'IconNotes',
      isNullable: true,
    },
  ],
});
