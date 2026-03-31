import { defineNavigationMenuItem } from 'twenty-sdk';
import { NavigationMenuItemType } from 'twenty-shared/types';
import { NAV, VIEWS } from 'src/constants/universal-identifiers.constant';

export const projectsNav = defineNavigationMenuItem({
  universalIdentifier: NAV.projects,
  name: 'Projects',
  icon: 'IconFolder',
  position: 1,
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier: VIEWS.projectTable,
});

export const invoicesNav = defineNavigationMenuItem({
  universalIdentifier: NAV.invoices,
  name: 'Invoices',
  icon: 'IconFileInvoice',
  position: 2,
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier: VIEWS.invoiceTable,
});

export const workshopsNav = defineNavigationMenuItem({
  universalIdentifier: NAV.workshops,
  name: 'Workshops',
  icon: 'IconPresentation',
  position: 3,
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier: VIEWS.workshopTable,
});

export const sessionsNav = defineNavigationMenuItem({
  universalIdentifier: NAV.sessions,
  name: 'Sessions',
  icon: 'IconSchool',
  position: 4,
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier: VIEWS.sessionCalendar,
});

export const deliveriesNav = defineNavigationMenuItem({
  universalIdentifier: NAV.deliveries,
  name: 'Deliveries',
  icon: 'IconTruck',
  position: 5,
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier: VIEWS.deliveryTable,
});

export const contractsNav = defineNavigationMenuItem({
  universalIdentifier: NAV.contracts,
  name: 'Contracts',
  icon: 'IconFileText',
  position: 6,
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier: VIEWS.contractTable,
});

export const partnersNav = defineNavigationMenuItem({
  universalIdentifier: NAV.partners,
  name: 'Partners',
  icon: 'IconHandshake',
  position: 7,
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier: VIEWS.partnerTable,
});

export const facilitatorsNav = defineNavigationMenuItem({
  universalIdentifier: NAV.facilitators,
  name: 'Facilitators',
  icon: 'IconUserStar',
  position: 8,
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier: VIEWS.facilitatorTable,
});

export const servicesNav = defineNavigationMenuItem({
  universalIdentifier: NAV.services,
  name: 'Services',
  icon: 'IconBriefcase',
  position: 9,
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier: VIEWS.serviceTable,
});

export const coachingRequestsNav = defineNavigationMenuItem({
  universalIdentifier: NAV.coachingRequests,
  name: 'Coaching Requests',
  icon: 'IconMessageCircle',
  position: 10,
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier: VIEWS.coachingRequestTable,
});

export const knowledgeBaseNav = defineNavigationMenuItem({
  universalIdentifier: NAV.knowledgeBase,
  name: 'Knowledge Base',
  icon: 'IconBook',
  position: 11,
  type: NavigationMenuItemType.VIEW,
  viewUniversalIdentifier: VIEWS.knowledgeArticleTable,
});
