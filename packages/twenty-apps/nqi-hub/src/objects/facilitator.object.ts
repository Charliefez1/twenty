import { defineObject, FieldType } from 'twenty-sdk';
import { OBJECTS } from 'src/constants/universal-identifiers.constant';

export const FACILITATOR_OBJECT_ID = OBJECTS.facilitator.id;

export default defineObject({
  universalIdentifier: FACILITATOR_OBJECT_ID,
  nameSingular: 'ndgFacilitator',
  namePlural: 'ndgFacilitators',
  labelSingular: 'Facilitator',
  labelPlural: 'Facilitators',
  description: 'Staff who deliver training sessions and workshops',
  icon: 'IconUserStar',
  labelIdentifierFieldMetadataUniversalIdentifier:
    OBJECTS.facilitator.fields.name,
  fields: [
    {
      universalIdentifier: OBJECTS.facilitator.fields.email,
      name: 'facilitatorEmail',
      type: FieldType.EMAILS,
      label: 'Email',
      icon: 'IconMail',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.facilitator.fields.phone,
      name: 'facilitatorPhone',
      type: FieldType.PHONES,
      label: 'Phone',
      icon: 'IconPhone',
      isNullable: true,
    },
    {
      universalIdentifier: OBJECTS.facilitator.fields.travelOrigin,
      name: 'travelOrigin',
      type: FieldType.ADDRESS,
      label: 'Travel Origin',
      description: 'Home base for travel cost calculations',
      icon: 'IconMapPin',
      isNullable: true,
    },
  ],
});
