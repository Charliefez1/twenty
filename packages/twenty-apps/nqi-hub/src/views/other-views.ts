import { defineView } from 'twenty-sdk';
import { ViewType } from 'twenty-shared/types';
import { OBJECTS, VIEWS } from 'src/constants/universal-identifiers.constant';

export const deliveryTableView = defineView({
  universalIdentifier: VIEWS.deliveryTable,
  name: 'All Deliveries',
  objectUniversalIdentifier: OBJECTS.delivery.id,
  type: ViewType.TABLE,
  icon: 'IconList',
  position: 0,
});

export const contractTableView = defineView({
  universalIdentifier: VIEWS.contractTable,
  name: 'All Contracts',
  objectUniversalIdentifier: OBJECTS.contract.id,
  type: ViewType.TABLE,
  icon: 'IconList',
  position: 0,
});

export const contractKanbanView = defineView({
  universalIdentifier: VIEWS.contractKanban,
  name: 'Contract Status',
  objectUniversalIdentifier: OBJECTS.contract.id,
  type: ViewType.KANBAN,
  icon: 'IconLayoutKanban',
  position: 1,
});

export const partnerTableView = defineView({
  universalIdentifier: VIEWS.partnerTable,
  name: 'All Partners',
  objectUniversalIdentifier: OBJECTS.partner.id,
  type: ViewType.TABLE,
  icon: 'IconList',
  position: 0,
});

export const facilitatorTableView = defineView({
  universalIdentifier: VIEWS.facilitatorTable,
  name: 'All Facilitators',
  objectUniversalIdentifier: OBJECTS.facilitator.id,
  type: ViewType.TABLE,
  icon: 'IconList',
  position: 0,
});

export const serviceTableView = defineView({
  universalIdentifier: VIEWS.serviceTable,
  name: 'Service Catalogue',
  objectUniversalIdentifier: OBJECTS.service.id,
  type: ViewType.TABLE,
  icon: 'IconList',
  position: 0,
});

export const coachingRequestTableView = defineView({
  universalIdentifier: VIEWS.coachingRequestTable,
  name: 'All Coaching Requests',
  objectUniversalIdentifier: OBJECTS.coachingRequest.id,
  type: ViewType.TABLE,
  icon: 'IconList',
  position: 0,
});

export const knowledgeArticleTableView = defineView({
  universalIdentifier: VIEWS.knowledgeArticleTable,
  name: 'Knowledge Base',
  objectUniversalIdentifier: OBJECTS.knowledgeArticle.id,
  type: ViewType.TABLE,
  icon: 'IconList',
  position: 0,
});
