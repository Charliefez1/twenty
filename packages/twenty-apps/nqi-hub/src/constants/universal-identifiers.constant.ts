/**
 * Master registry of all universal identifiers for the NQI Hub app.
 * NEVER mutate an existing identifier — they must remain stable across deployments.
 */

// ─── APPLICATION ─────────────────────────────────────────────────────────────
export const APP_ID = 'a1b0c2d3-e4f5-6789-abcd-100000000000';

// ─── OBJECTS ─────────────────────────────────────────────────────────────────
export const OBJECTS = {
  project: {
    id: 'a1b0c2d3-e4f5-6789-abcd-200000000001',
    fields: {
      name: 'a1b0c2d3-e4f5-6789-abcd-200100000001',
      status: 'a1b0c2d3-e4f5-6789-abcd-200100000002',
      stage: 'a1b0c2d3-e4f5-6789-abcd-200100000003',
      startDate: 'a1b0c2d3-e4f5-6789-abcd-200100000004',
      endDate: 'a1b0c2d3-e4f5-6789-abcd-200100000005',
      budget: 'a1b0c2d3-e4f5-6789-abcd-200100000006',
      tags: 'a1b0c2d3-e4f5-6789-abcd-200100000007',
      notes: 'a1b0c2d3-e4f5-6789-abcd-200100000008',
      // Relations
      company: 'a1b0c2d3-e4f5-6789-abcd-200100000010',
      owner: 'a1b0c2d3-e4f5-6789-abcd-200100000011',
      invoices: 'a1b0c2d3-e4f5-6789-abcd-200100000012',
      workshops: 'a1b0c2d3-e4f5-6789-abcd-200100000013',
      deliveries: 'a1b0c2d3-e4f5-6789-abcd-200100000014',
      contracts: 'a1b0c2d3-e4f5-6789-abcd-200100000015',
    },
  },
  invoice: {
    id: 'a1b0c2d3-e4f5-6789-abcd-200000000002',
    fields: {
      invoiceNumber: 'a1b0c2d3-e4f5-6789-abcd-200200000001',
      status: 'a1b0c2d3-e4f5-6789-abcd-200200000002',
      issueDate: 'a1b0c2d3-e4f5-6789-abcd-200200000003',
      dueDate: 'a1b0c2d3-e4f5-6789-abcd-200200000004',
      subtotal: 'a1b0c2d3-e4f5-6789-abcd-200200000005',
      vatAmount: 'a1b0c2d3-e4f5-6789-abcd-200200000006',
      total: 'a1b0c2d3-e4f5-6789-abcd-200200000007',
      paidDate: 'a1b0c2d3-e4f5-6789-abcd-200200000008',
      quickbooksId: 'a1b0c2d3-e4f5-6789-abcd-200200000009',
      invoiceNotes: 'a1b0c2d3-e4f5-6789-abcd-200200000010',
      // Relations
      company: 'a1b0c2d3-e4f5-6789-abcd-200200000011',
      project: 'a1b0c2d3-e4f5-6789-abcd-200200000012',
      items: 'a1b0c2d3-e4f5-6789-abcd-200200000013',
    },
  },
  invoiceItem: {
    id: 'a1b0c2d3-e4f5-6789-abcd-200000000003',
    fields: {
      description: 'a1b0c2d3-e4f5-6789-abcd-200300000001',
      quantity: 'a1b0c2d3-e4f5-6789-abcd-200300000002',
      unitPrice: 'a1b0c2d3-e4f5-6789-abcd-200300000003',
      vatRate: 'a1b0c2d3-e4f5-6789-abcd-200300000004',
      lineTotal: 'a1b0c2d3-e4f5-6789-abcd-200300000005',
      sortOrder: 'a1b0c2d3-e4f5-6789-abcd-200300000006',
      // Relations
      invoice: 'a1b0c2d3-e4f5-6789-abcd-200300000010',
      service: 'a1b0c2d3-e4f5-6789-abcd-200300000011',
    },
  },
  service: {
    id: 'a1b0c2d3-e4f5-6789-abcd-200000000004',
    fields: {
      name: 'a1b0c2d3-e4f5-6789-abcd-200400000001',
      category: 'a1b0c2d3-e4f5-6789-abcd-200400000002',
      price: 'a1b0c2d3-e4f5-6789-abcd-200400000003',
      duration: 'a1b0c2d3-e4f5-6789-abcd-200400000004',
      vatRate: 'a1b0c2d3-e4f5-6789-abcd-200400000005',
      isActive: 'a1b0c2d3-e4f5-6789-abcd-200400000006',
    },
  },
  contract: {
    id: 'a1b0c2d3-e4f5-6789-abcd-200000000005',
    fields: {
      title: 'a1b0c2d3-e4f5-6789-abcd-200500000001',
      status: 'a1b0c2d3-e4f5-6789-abcd-200500000002',
      contractType: 'a1b0c2d3-e4f5-6789-abcd-200500000003',
      startDate: 'a1b0c2d3-e4f5-6789-abcd-200500000004',
      endDate: 'a1b0c2d3-e4f5-6789-abcd-200500000005',
      value: 'a1b0c2d3-e4f5-6789-abcd-200500000006',
      autoRenew: 'a1b0c2d3-e4f5-6789-abcd-200500000007',
      renewalDate: 'a1b0c2d3-e4f5-6789-abcd-200500000008',
      documentUrl: 'a1b0c2d3-e4f5-6789-abcd-200500000009',
      terms: 'a1b0c2d3-e4f5-6789-abcd-200500000010',
      // Relations
      company: 'a1b0c2d3-e4f5-6789-abcd-200500000011',
      project: 'a1b0c2d3-e4f5-6789-abcd-200500000012',
      parentContract: 'a1b0c2d3-e4f5-6789-abcd-200500000013',
      childContracts: 'a1b0c2d3-e4f5-6789-abcd-200500000014',
    },
  },
  workshop: {
    id: 'a1b0c2d3-e4f5-6789-abcd-200000000006',
    fields: {
      title: 'a1b0c2d3-e4f5-6789-abcd-200600000001',
      description: 'a1b0c2d3-e4f5-6789-abcd-200600000002',
      workshopDate: 'a1b0c2d3-e4f5-6789-abcd-200600000003',
      status: 'a1b0c2d3-e4f5-6789-abcd-200600000004',
      location: 'a1b0c2d3-e4f5-6789-abcd-200600000005',
      maxParticipants: 'a1b0c2d3-e4f5-6789-abcd-200600000006',
      deckUrl: 'a1b0c2d3-e4f5-6789-abcd-200600000007',
      feedbackUrl: 'a1b0c2d3-e4f5-6789-abcd-200600000008',
      tags: 'a1b0c2d3-e4f5-6789-abcd-200600000009',
      // Relations
      project: 'a1b0c2d3-e4f5-6789-abcd-200600000010',
      facilitator: 'a1b0c2d3-e4f5-6789-abcd-200600000011',
      sessions: 'a1b0c2d3-e4f5-6789-abcd-200600000012',
    },
  },
  session: {
    id: 'a1b0c2d3-e4f5-6789-abcd-200000000007',
    fields: {
      sessionType: 'a1b0c2d3-e4f5-6789-abcd-200700000001',
      sessionDate: 'a1b0c2d3-e4f5-6789-abcd-200700000002',
      startTime: 'a1b0c2d3-e4f5-6789-abcd-200700000003',
      endTime: 'a1b0c2d3-e4f5-6789-abcd-200700000004',
      isOnline: 'a1b0c2d3-e4f5-6789-abcd-200700000005',
      capacity: 'a1b0c2d3-e4f5-6789-abcd-200700000006',
      teamsLink: 'a1b0c2d3-e4f5-6789-abcd-200700000007',
      delegateCount: 'a1b0c2d3-e4f5-6789-abcd-200700000008',
      cost: 'a1b0c2d3-e4f5-6789-abcd-200700000009',
      sessionStatus: 'a1b0c2d3-e4f5-6789-abcd-200700000010',
      // Relations
      workshop: 'a1b0c2d3-e4f5-6789-abcd-200700000011',
      facilitator: 'a1b0c2d3-e4f5-6789-abcd-200700000012',
      attendees: 'a1b0c2d3-e4f5-6789-abcd-200700000013',
    },
  },
  sessionAttendee: {
    id: 'a1b0c2d3-e4f5-6789-abcd-200000000008',
    fields: {
      attendeeName: 'a1b0c2d3-e4f5-6789-abcd-200800000001',
      attendeeEmail: 'a1b0c2d3-e4f5-6789-abcd-200800000002',
      bookingStatus: 'a1b0c2d3-e4f5-6789-abcd-200800000003',
      // Relations
      session: 'a1b0c2d3-e4f5-6789-abcd-200800000010',
    },
  },
  delivery: {
    id: 'a1b0c2d3-e4f5-6789-abcd-200000000009',
    fields: {
      deliveryDate: 'a1b0c2d3-e4f5-6789-abcd-200900000001',
      location: 'a1b0c2d3-e4f5-6789-abcd-200900000002',
      delegateCount: 'a1b0c2d3-e4f5-6789-abcd-200900000003',
      satisfactionScore: 'a1b0c2d3-e4f5-6789-abcd-200900000004',
      kirkpatrickLevel: 'a1b0c2d3-e4f5-6789-abcd-200900000005',
      deliveryNotes: 'a1b0c2d3-e4f5-6789-abcd-200900000006',
      // Relations
      project: 'a1b0c2d3-e4f5-6789-abcd-200900000010',
      company: 'a1b0c2d3-e4f5-6789-abcd-200900000011',
      workshop: 'a1b0c2d3-e4f5-6789-abcd-200900000012',
    },
  },
  partner: {
    id: 'a1b0c2d3-e4f5-6789-abcd-200000000010',
    fields: {
      name: 'a1b0c2d3-e4f5-6789-abcd-201000000001',
      companyName: 'a1b0c2d3-e4f5-6789-abcd-201000000002',
      email: 'a1b0c2d3-e4f5-6789-abcd-201000000003',
      phone: 'a1b0c2d3-e4f5-6789-abcd-201000000004',
      commissionRate: 'a1b0c2d3-e4f5-6789-abcd-201000000005',
      partnerStatus: 'a1b0c2d3-e4f5-6789-abcd-201000000006',
      partnerType: 'a1b0c2d3-e4f5-6789-abcd-201000000007',
    },
  },
  facilitator: {
    id: 'a1b0c2d3-e4f5-6789-abcd-200000000011',
    fields: {
      name: 'a1b0c2d3-e4f5-6789-abcd-201100000001',
      email: 'a1b0c2d3-e4f5-6789-abcd-201100000002',
      phone: 'a1b0c2d3-e4f5-6789-abcd-201100000003',
      travelOrigin: 'a1b0c2d3-e4f5-6789-abcd-201100000004',
      // Relations
      sessions: 'a1b0c2d3-e4f5-6789-abcd-201100000010',
      workshops: 'a1b0c2d3-e4f5-6789-abcd-201100000011',
    },
  },
  coachingRequest: {
    id: 'a1b0c2d3-e4f5-6789-abcd-200000000012',
    fields: {
      requestNotes: 'a1b0c2d3-e4f5-6789-abcd-201200000001',
      requestStatus: 'a1b0c2d3-e4f5-6789-abcd-201200000002',
      roleGroup: 'a1b0c2d3-e4f5-6789-abcd-201200000003',
      // Relations
      company: 'a1b0c2d3-e4f5-6789-abcd-201200000010',
      session: 'a1b0c2d3-e4f5-6789-abcd-201200000011',
    },
  },
  knowledgeArticle: {
    id: 'a1b0c2d3-e4f5-6789-abcd-200000000013',
    fields: {
      title: 'a1b0c2d3-e4f5-6789-abcd-201300000001',
      content: 'a1b0c2d3-e4f5-6789-abcd-201300000002',
      category: 'a1b0c2d3-e4f5-6789-abcd-201300000003',
      articleTags: 'a1b0c2d3-e4f5-6789-abcd-201300000004',
      isPublished: 'a1b0c2d3-e4f5-6789-abcd-201300000005',
    },
  },
} as const;

// ─── VIEWS ───────────────────────────────────────────────────────────────────
export const VIEWS = {
  projectTable: 'a1b0c2d3-e4f5-6789-abcd-300000000001',
  projectKanban: 'a1b0c2d3-e4f5-6789-abcd-300000000002',
  invoiceTable: 'a1b0c2d3-e4f5-6789-abcd-300000000003',
  invoiceKanban: 'a1b0c2d3-e4f5-6789-abcd-300000000004',
  workshopTable: 'a1b0c2d3-e4f5-6789-abcd-300000000005',
  workshopKanban: 'a1b0c2d3-e4f5-6789-abcd-300000000006',
  workshopCalendar: 'a1b0c2d3-e4f5-6789-abcd-300000000007',
  sessionCalendar: 'a1b0c2d3-e4f5-6789-abcd-300000000008',
  sessionKanban: 'a1b0c2d3-e4f5-6789-abcd-300000000009',
  deliveryTable: 'a1b0c2d3-e4f5-6789-abcd-300000000010',
  contractTable: 'a1b0c2d3-e4f5-6789-abcd-300000000011',
  contractKanban: 'a1b0c2d3-e4f5-6789-abcd-300000000012',
  partnerTable: 'a1b0c2d3-e4f5-6789-abcd-300000000013',
  facilitatorTable: 'a1b0c2d3-e4f5-6789-abcd-300000000014',
  serviceTable: 'a1b0c2d3-e4f5-6789-abcd-300000000015',
  coachingRequestTable: 'a1b0c2d3-e4f5-6789-abcd-300000000016',
  knowledgeArticleTable: 'a1b0c2d3-e4f5-6789-abcd-300000000017',
} as const;

// ─── NAVIGATION MENU ITEMS ──────────────────────────────────────────────────
export const NAV = {
  projects: 'a1b0c2d3-e4f5-6789-abcd-400000000001',
  invoices: 'a1b0c2d3-e4f5-6789-abcd-400000000002',
  workshops: 'a1b0c2d3-e4f5-6789-abcd-400000000003',
  sessions: 'a1b0c2d3-e4f5-6789-abcd-400000000004',
  deliveries: 'a1b0c2d3-e4f5-6789-abcd-400000000005',
  contracts: 'a1b0c2d3-e4f5-6789-abcd-400000000006',
  partners: 'a1b0c2d3-e4f5-6789-abcd-400000000007',
  facilitators: 'a1b0c2d3-e4f5-6789-abcd-400000000008',
  services: 'a1b0c2d3-e4f5-6789-abcd-400000000009',
  coachingRequests: 'a1b0c2d3-e4f5-6789-abcd-400000000010',
  knowledgeBase: 'a1b0c2d3-e4f5-6789-abcd-400000000011',
} as const;

// ─── ROLES ───────────────────────────────────────────────────────────────────
export const ROLES = {
  defaultFunction: 'a1b0c2d3-e4f5-6789-abcd-500000000001',
} as const;

// ─── VIEW FIELD IDs (for view column definitions) ────────────────────────────
// Each view field entry needs its own UUID
export const VIEW_FIELDS = {
  // Project table view fields
  projectTable: {
    name: 'a1b0c2d3-e4f5-6789-abcd-310100000001',
    status: 'a1b0c2d3-e4f5-6789-abcd-310100000002',
    company: 'a1b0c2d3-e4f5-6789-abcd-310100000003',
    startDate: 'a1b0c2d3-e4f5-6789-abcd-310100000004',
    endDate: 'a1b0c2d3-e4f5-6789-abcd-310100000005',
    budget: 'a1b0c2d3-e4f5-6789-abcd-310100000006',
  },
  // Invoice table view fields
  invoiceTable: {
    invoiceNumber: 'a1b0c2d3-e4f5-6789-abcd-310200000001',
    status: 'a1b0c2d3-e4f5-6789-abcd-310200000002',
    company: 'a1b0c2d3-e4f5-6789-abcd-310200000003',
    total: 'a1b0c2d3-e4f5-6789-abcd-310200000004',
    dueDate: 'a1b0c2d3-e4f5-6789-abcd-310200000005',
    paidDate: 'a1b0c2d3-e4f5-6789-abcd-310200000006',
  },
  // Workshop table view fields
  workshopTable: {
    title: 'a1b0c2d3-e4f5-6789-abcd-310300000001',
    status: 'a1b0c2d3-e4f5-6789-abcd-310300000002',
    workshopDate: 'a1b0c2d3-e4f5-6789-abcd-310300000003',
    location: 'a1b0c2d3-e4f5-6789-abcd-310300000004',
    facilitator: 'a1b0c2d3-e4f5-6789-abcd-310300000005',
  },
} as const;
