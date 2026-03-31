/**
 * Contract relations:
 * - Contract → Company (MANY_TO_ONE)
 * - Contract → Project (MANY_TO_ONE)
 * - Contract → Parent Contract (self-referential MANY_TO_ONE)
 */
import {
  defineField,
  FieldType,
  RelationType,
  OnDeleteAction,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
} from 'twenty-sdk';
import { OBJECTS } from 'src/constants/universal-identifiers.constant';

// ─── Contract → Company ──────────────────────────────────────────────────────
const COMPANY_CONTRACTS_FIELD_ID = 'a1b0c2d3-e4f5-6789-abcd-600300000001';

export const contractCompanyField = defineField({
  universalIdentifier: OBJECTS.contract.fields.company,
  objectUniversalIdentifier: OBJECTS.contract.id,
  type: FieldType.RELATION,
  name: 'company',
  label: 'Company',
  icon: 'IconBuildingSkyscraper',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.company.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier: COMPANY_CONTRACTS_FIELD_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'companyId',
  },
});

export const companyContractsField = defineField({
  universalIdentifier: COMPANY_CONTRACTS_FIELD_ID,
  objectUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.company.universalIdentifier,
  type: FieldType.RELATION,
  name: 'ndgContracts',
  label: 'Contracts',
  icon: 'IconFileText',
  relationTargetObjectMetadataUniversalIdentifier: OBJECTS.contract.id,
  relationTargetFieldMetadataUniversalIdentifier:
    OBJECTS.contract.fields.company,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

// ─── Contract → Project ──────────────────────────────────────────────────────
export const contractProjectField = defineField({
  universalIdentifier: OBJECTS.contract.fields.project,
  objectUniversalIdentifier: OBJECTS.contract.id,
  type: FieldType.RELATION,
  name: 'project',
  label: 'Project',
  icon: 'IconFolder',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier: OBJECTS.project.id,
  relationTargetFieldMetadataUniversalIdentifier:
    OBJECTS.project.fields.contracts,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'projectId',
  },
});

export const projectContractsField = defineField({
  universalIdentifier: OBJECTS.project.fields.contracts,
  objectUniversalIdentifier: OBJECTS.project.id,
  type: FieldType.RELATION,
  name: 'contracts',
  label: 'Contracts',
  icon: 'IconFileText',
  relationTargetObjectMetadataUniversalIdentifier: OBJECTS.contract.id,
  relationTargetFieldMetadataUniversalIdentifier:
    OBJECTS.contract.fields.project,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

// ─── Contract → Parent Contract (self-referential) ───────────────────────────
export const contractParentField = defineField({
  universalIdentifier: OBJECTS.contract.fields.parentContract,
  objectUniversalIdentifier: OBJECTS.contract.id,
  type: FieldType.RELATION,
  name: 'parentContract',
  label: 'Parent Contract',
  icon: 'IconFileText',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier: OBJECTS.contract.id,
  relationTargetFieldMetadataUniversalIdentifier:
    OBJECTS.contract.fields.childContracts,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'parentContractId',
  },
});

export const contractChildrenField = defineField({
  universalIdentifier: OBJECTS.contract.fields.childContracts,
  objectUniversalIdentifier: OBJECTS.contract.id,
  type: FieldType.RELATION,
  name: 'childContracts',
  label: 'Amendments',
  icon: 'IconFileText',
  relationTargetObjectMetadataUniversalIdentifier: OBJECTS.contract.id,
  relationTargetFieldMetadataUniversalIdentifier:
    OBJECTS.contract.fields.parentContract,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
