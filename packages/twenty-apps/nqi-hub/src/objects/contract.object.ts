import { defineObject, FieldType } from 'twenty-sdk';
import { OBJECTS } from 'src/constants/universal-identifiers.constant';

enum ContractStatus {
  DRAFT = 'DRAFT',
  ACTIVE = 'ACTIVE',
  EXPIRED = 'EXPIRED',
  TERMINATED = 'TERMINATED',
}

enum ContractType {
  MASTER = 'MASTER',
  PROJECT = 'PROJECT',
  SOW = 'SOW',
  AMENDMENT = 'AMENDMENT',
}

export const CONTRACT_OBJECT_ID = OBJECTS.contract.id;

export default defineObject({
  universalIdentifier: CONTRACT_OBJECT_ID,
  nameSingular: 'ndgContract',
  namePlural: 'ndgContracts',
  labelSingular: 'Contract',
  labelPlural: 'Contracts',
  description: 'Client contracts — master agreements, SOWs, and amendments',
  icon: 'IconFileText',
  labelIdentifierFieldMetadataUniversalIdentifier:
    OBJECTS.contract.fields.title,
  fields: [
    {
      universalIdentifier: OBJECTS.contract.fields.status,
      name: 'contractStatus',
      type: FieldType.SELECT,
      label: 'Status',
      icon: 'IconProgress',
      defaultValue: `'${ContractStatus.DRAFT}'`,
      options: [
        {
          value: ContractStatus.DRAFT,
          label: 'Draft',
          position: 0,
          color: 'gray',
        },
        {
          value: ContractStatus.ACTIVE,
          label: 'Active',
          position: 1,
          color: 'green',
        },
        {
          value: ContractStatus.EXPIRED,
          label: 'Expired',
          position: 2,
          color: 'orange',
        },
        {
          value: ContractStatus.TERMINATED,
          label: 'Terminated',
          position: 3,
          color: 'red',
        },
      ],
    },
    {
      universalIdentifier: OBJECTS.contract.fields.contractType,
      name: 'contractType',
      type: FieldType.SELECT,
      label: 'Type',
      icon: 'IconCategory',
      options: [
        {
          value: ContractType.MASTER,
          label: 'Master',
          position: 0,
          color: 'blue',
        },
        {
          value: ContractType.PROJECT,
          label: 'Project',
          position: 1,
          color: 'purple',
        },
        { value: ContractType.SOW, label: 'SOW', position: 2, color: 'green' },
        {
          value: ContractType.AMENDMENT,
          label: 'Amendment',
          position: 3,
          color: 'orange',
        },
      ],
    },
    {
      universalIdentifier: OBJECTS.contract.fields.startDate,
      name: 'startDate',
      type: FieldType.DATE,
      label: 'Start Date',
      icon: 'IconCalendar',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.contract.fields.endDate,
      name: 'endDate',
      type: FieldType.DATE,
      label: 'End Date',
      icon: 'IconCalendarDue',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.contract.fields.value,
      name: 'contractValue',
      type: FieldType.CURRENCY,
      label: 'Value',
      icon: 'IconCurrencyPound',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.contract.fields.autoRenew,
      name: 'autoRenew',
      type: FieldType.BOOLEAN,
      label: 'Auto Renew',
      icon: 'IconRefresh',
      defaultValue: false,
    },
    {
      universalIdentifier: OBJECTS.contract.fields.renewalDate,
      name: 'renewalDate',
      type: FieldType.DATE,
      label: 'Renewal Date',
      icon: 'IconCalendarRepeat',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.contract.fields.documentUrl,
      name: 'documentUrl',
      type: FieldType.LINKS,
      label: 'Document',
      icon: 'IconFile',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.contract.fields.terms,
      name: 'terms',
      type: FieldType.RICH_TEXT,
      label: 'Terms',
      icon: 'IconNotes',
      isNullable: true,
    },
  ],
});
