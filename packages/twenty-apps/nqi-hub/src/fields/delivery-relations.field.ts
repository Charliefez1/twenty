/**
 * Delivery relations:
 * - Delivery → Project (MANY_TO_ONE)
 * - Delivery → Company (MANY_TO_ONE)
 * - Delivery → Workshop (MANY_TO_ONE)
 */
import {
  defineField,
  FieldType,
  RelationType,
  OnDeleteAction,
  STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS,
} from 'twenty-sdk';
import { OBJECTS } from 'src/constants/universal-identifiers.constant';

// ─── Delivery → Project ──────────────────────────────────────────────────────
export const deliveryProjectField = defineField({
  universalIdentifier: OBJECTS.delivery.fields.project,
  objectUniversalIdentifier: OBJECTS.delivery.id,
  type: FieldType.RELATION,
  name: 'project',
  label: 'Project',
  icon: 'IconFolder',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier: OBJECTS.project.id,
  relationTargetFieldMetadataUniversalIdentifier:
    OBJECTS.project.fields.deliveries,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'projectId',
  },
});

export const projectDeliveriesField = defineField({
  universalIdentifier: OBJECTS.project.fields.deliveries,
  objectUniversalIdentifier: OBJECTS.project.id,
  type: FieldType.RELATION,
  name: 'deliveries',
  label: 'Deliveries',
  icon: 'IconTruck',
  relationTargetObjectMetadataUniversalIdentifier: OBJECTS.delivery.id,
  relationTargetFieldMetadataUniversalIdentifier:
    OBJECTS.delivery.fields.project,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

// ─── Delivery → Company ──────────────────────────────────────────────────────
const COMPANY_DELIVERIES_FIELD_ID = 'a1b0c2d3-e4f5-6789-abcd-600500000001';

export const deliveryCompanyField = defineField({
  universalIdentifier: OBJECTS.delivery.fields.company,
  objectUniversalIdentifier: OBJECTS.delivery.id,
  type: FieldType.RELATION,
  name: 'company',
  label: 'Company',
  icon: 'IconBuildingSkyscraper',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.company.universalIdentifier,
  relationTargetFieldMetadataUniversalIdentifier: COMPANY_DELIVERIES_FIELD_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'companyId',
  },
});

export const companyDeliveriesField = defineField({
  universalIdentifier: COMPANY_DELIVERIES_FIELD_ID,
  objectUniversalIdentifier:
    STANDARD_OBJECT_UNIVERSAL_IDENTIFIERS.company.universalIdentifier,
  type: FieldType.RELATION,
  name: 'ndgDeliveries',
  label: 'Deliveries',
  icon: 'IconTruck',
  relationTargetObjectMetadataUniversalIdentifier: OBJECTS.delivery.id,
  relationTargetFieldMetadataUniversalIdentifier:
    OBJECTS.delivery.fields.company,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});

// ─── Delivery → Workshop ─────────────────────────────────────────────────────
const WORKSHOP_DELIVERIES_FIELD_ID = 'a1b0c2d3-e4f5-6789-abcd-600500000002';

export const deliveryWorkshopField = defineField({
  universalIdentifier: OBJECTS.delivery.fields.workshop,
  objectUniversalIdentifier: OBJECTS.delivery.id,
  type: FieldType.RELATION,
  name: 'workshop',
  label: 'Workshop',
  icon: 'IconPresentation',
  isNullable: true,
  relationTargetObjectMetadataUniversalIdentifier: OBJECTS.workshop.id,
  relationTargetFieldMetadataUniversalIdentifier: WORKSHOP_DELIVERIES_FIELD_ID,
  universalSettings: {
    relationType: RelationType.MANY_TO_ONE,
    onDelete: OnDeleteAction.SET_NULL,
    joinColumnName: 'workshopId',
  },
});

export const workshopDeliveriesField = defineField({
  universalIdentifier: WORKSHOP_DELIVERIES_FIELD_ID,
  objectUniversalIdentifier: OBJECTS.workshop.id,
  type: FieldType.RELATION,
  name: 'deliveries',
  label: 'Deliveries',
  icon: 'IconTruck',
  relationTargetObjectMetadataUniversalIdentifier: OBJECTS.delivery.id,
  relationTargetFieldMetadataUniversalIdentifier:
    OBJECTS.delivery.fields.workshop,
  universalSettings: {
    relationType: RelationType.ONE_TO_MANY,
  },
});
