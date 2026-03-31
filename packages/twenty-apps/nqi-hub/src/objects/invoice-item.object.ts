import { defineObject, FieldType } from 'twenty-sdk';
import { OBJECTS } from 'src/constants/universal-identifiers.constant';

export const INVOICE_ITEM_OBJECT_ID = OBJECTS.invoiceItem.id;

export default defineObject({
  universalIdentifier: INVOICE_ITEM_OBJECT_ID,
  nameSingular: 'ndgInvoiceItem',
  namePlural: 'ndgInvoiceItems',
  labelSingular: 'Invoice Item',
  labelPlural: 'Invoice Items',
  description: 'Line items on an invoice',
  icon: 'IconListDetails',
  labelIdentifierFieldMetadataUniversalIdentifier:
    OBJECTS.invoiceItem.fields.description,
  fields: [
    {
      universalIdentifier: OBJECTS.invoiceItem.fields.description,
      name: 'itemDescription',
      type: FieldType.TEXT,
      label: 'Description',
      icon: 'IconAbc',
    },
    {
      universalIdentifier: OBJECTS.invoiceItem.fields.quantity,
      name: 'quantity',
      type: FieldType.NUMBER,
      label: 'Quantity',
      icon: 'IconStack2',
      defaultValue: 1,
    },
    {
      universalIdentifier: OBJECTS.invoiceItem.fields.unitPrice,
      name: 'unitPrice',
      type: FieldType.CURRENCY,
      label: 'Unit Price',
      icon: 'IconCurrencyPound',
    },
    {
      universalIdentifier: OBJECTS.invoiceItem.fields.vatRate,
      name: 'vatRate',
      type: FieldType.NUMBER,
      label: 'VAT Rate (%)',
      description: 'VAT percentage (default 20)',
      icon: 'IconPercentage',
      defaultValue: 20,
    },
    {
      universalIdentifier: OBJECTS.invoiceItem.fields.lineTotal,
      name: 'lineTotal',
      type: FieldType.CURRENCY,
      label: 'Line Total',
      icon: 'IconSum',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.invoiceItem.fields.sortOrder,
      name: 'sortOrder',
      type: FieldType.NUMBER,
      label: 'Sort Order',
      icon: 'IconArrowsSort',
      defaultValue: 0,
    },
  ],
});
