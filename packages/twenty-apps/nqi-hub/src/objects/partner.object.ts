import { defineObject, FieldType } from 'twenty-sdk';
import { OBJECTS } from 'src/constants/universal-identifiers.constant';

enum PartnerType {
  REFERRAL = 'REFERRAL',
  DELIVERY = 'DELIVERY',
  TECHNOLOGY = 'TECHNOLOGY',
  CONTENT = 'CONTENT',
  EDI = 'EDI',
  WELLBEING = 'WELLBEING',
  OTHER = 'OTHER',
}

enum PartnerStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  PROSPECT = 'PROSPECT',
}

export const PARTNER_OBJECT_ID = OBJECTS.partner.id;

export default defineObject({
  universalIdentifier: PARTNER_OBJECT_ID,
  nameSingular: 'ndgPartner',
  namePlural: 'ndgPartners',
  labelSingular: 'Partner',
  labelPlural: 'Partners',
  description: 'Referral, delivery, and technology partners',
  icon: 'IconHandshake',
  labelIdentifierFieldMetadataUniversalIdentifier: OBJECTS.partner.fields.name,
  fields: [
    {
      universalIdentifier: OBJECTS.partner.fields.companyName,
      name: 'partnerCompanyName',
      type: FieldType.TEXT,
      label: 'Company',
      icon: 'IconBuilding',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.partner.fields.email,
      name: 'partnerEmail',
      type: FieldType.EMAILS,
      label: 'Email',
      icon: 'IconMail',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.partner.fields.phone,
      name: 'partnerPhone',
      type: FieldType.PHONES,
      label: 'Phone',
      icon: 'IconPhone',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.partner.fields.commissionRate,
      name: 'commissionRate',
      type: FieldType.NUMBER,
      label: 'Commission Rate (%)',
      icon: 'IconPercentage',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.partner.fields.partnerStatus,
      name: 'partnerStatus',
      type: FieldType.SELECT,
      label: 'Status',
      icon: 'IconProgress',
      defaultValue: `'${PartnerStatus.PROSPECT}'`,
      options: [
        {
          value: PartnerStatus.ACTIVE,
          label: 'Active',
          position: 0,
          color: 'green',
        },
        {
          value: PartnerStatus.INACTIVE,
          label: 'Inactive',
          position: 1,
          color: 'gray',
        },
        {
          value: PartnerStatus.PROSPECT,
          label: 'Prospect',
          position: 2,
          color: 'blue',
        },
      ],
    },
    {
      universalIdentifier: OBJECTS.partner.fields.partnerType,
      name: 'partnerType',
      type: FieldType.SELECT,
      label: 'Type',
      icon: 'IconCategory',
      options: [
        {
          value: PartnerType.REFERRAL,
          label: 'Referral',
          position: 0,
          color: 'blue',
        },
        {
          value: PartnerType.DELIVERY,
          label: 'Delivery',
          position: 1,
          color: 'green',
        },
        {
          value: PartnerType.TECHNOLOGY,
          label: 'Technology',
          position: 2,
          color: 'purple',
        },
        {
          value: PartnerType.CONTENT,
          label: 'Content',
          position: 3,
          color: 'orange',
        },
        {
          value: PartnerType.EDI,
          label: 'EDI',
          position: 4,
          color: 'turquoise',
        },
        {
          value: PartnerType.WELLBEING,
          label: 'Wellbeing',
          position: 5,
          color: 'yellow',
        },
        {
          value: PartnerType.OTHER,
          label: 'Other',
          position: 6,
          color: 'gray',
        },
      ],
    },
  ],
});
