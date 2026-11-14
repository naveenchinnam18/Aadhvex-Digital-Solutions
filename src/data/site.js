// Central place for contact details, navigation and page content.
// Edit text here and every page updates.

export const SITE = {
  name: 'Aadhvex Digital Solutions',
  email: 'aadhvexdigitalsolutions@gmail.com',
  phone1: { label: '+91 78932 53699', href: 'tel:+917893253699' },
  phone2: { label: '+91 78158 21117', href: 'tel:+917815821117' },
  whatsapp:
    'https://wa.me/917893253699?text=Hello%20Aadhvex%20Digital%20Solutions%2C%20I%20would%20like%20to%20discuss%20a%20project.',
};

export const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'IT Services' },
  { to: '/offline-systems', label: 'Offline Systems' },
  { to: '/digital-marketing', label: 'Digital Marketing' },
  { to: '/#why-aadhvex', label: 'Why Aadhvex', hash: true },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export const OFFLINE_SYSTEMS = [
  ['Milk collection & billing', 'Record milk procurement, supplier or farmer details, daily quantity, fat and SNF readings, rates, payments and collection reports.'],
  ['Inventory & billing / POS', 'Manage products, purchases, sales, stock levels, barcode-ready billing, returns, receipts and point-of-sale reports.'],
  ['Laboratory management', 'Organise sample registration, test records, results, patient or client details, report generation and laboratory workflows.'],
  ['Hospital management', 'Coordinate patient registration, appointments, consultations, billing, admissions, pharmacy and operational records.'],
  ['Payroll management', 'Maintain employee profiles, attendance, leave, salary structures, deductions, payslips and monthly payroll summaries.'],
  ['Loan management', 'Track borrower profiles, loan accounts, repayment schedules, instalments, balances, receipts and overdue reports.'],
  ['School management', 'Manage student admissions, attendance, fees, examinations, marks, staff records and parent communication workflows.'],
  ['Pharmacy management', 'Handle medicine inventory, batch and expiry tracking, purchases, sales billing, supplier records and stock alerts.'],
  ['Procurement management', 'Record purchase requests, quotations, supplier details, approvals, purchase orders, goods receipt and expense summaries.'],
  ['Transport / LR system', 'Manage consignments, lorry receipts, parties, vehicle details, freight, delivery status, payments and transport reports.'],
  ['Jewellery Billing System', 'Maintain item catalogue, weight and purity details, making charges, wastage, customer accounts, invoices and sales records.'],
  ['Event management applications', 'Manage event enquiries, bookings, schedules, venues, packages, vendors, payments, guest lists and event coordination.'],
].map(([title, text], i) => ({ num: String(i + 1).padStart(2, '0'), title, text }));

export const OFFLINE_EXTRAS = [
  { label: '01 / Operations', title: 'Billing, accounts & inventory', text: 'Sales, purchases, invoices, receipts, stock movement and business records.' },
  { label: '02 / Teams', title: 'Employee & customer records', text: 'Role-based access, profiles, attendance and customer information.' },
  { label: '03 / Reporting', title: 'Reports, exports & printing', text: 'Custom summaries, printable formats, exports and operational dashboards.' },
  { label: '04 / Deployment', title: 'Single PC & local network', text: 'Desktop applications for one computer or multi-user office LAN environments.' },
  { label: '05 / Data', title: 'Backup & data migration', text: 'Planned backup routines and migration of existing records where feasible.' },
  { label: '06 / Custom', title: 'Purpose-built applications', text: 'Custom Windows software and workflow automation based on your requirements.' },
];

export const MARKETING_SERVICES = [
  ['Social media handling', 'Plan, create and manage social media content to keep your brand active and connected with its audience.'],
  ['Meta Ads', 'Campaigns across Facebook and Instagram, with audience targeting, creative planning and performance review.'],
  ['Google Ads', 'Search and display campaigns designed to connect your business with people actively looking for your services.'],
  ['SEO', 'On-page, technical and local search optimisation to improve how customers discover your website.'],
  ['Email marketing', 'Newsletters, customer updates and email campaigns that support customer relationships and follow-ups.'],
  ['Content writing', 'Website copy, social captions, campaign messages and useful content in a consistent brand voice.'],
  ['Bulk WhatsApp messaging', 'Customer updates, offers and announcements using opt-in contacts and approved WhatsApp Business messaging.'],
].map(([title, text], i) => ({ num: String(i + 1).padStart(2, '0'), title, text }));

export const WHATSAPP_STEPS = [
  ['Audience organisation', 'Segment opted-in customer lists for relevant communication.'],
  ['Message preparation', 'Prepare clear campaign copy and approved message templates.'],
  ['Campaign delivery', 'Schedule and send using the WhatsApp Business Platform or an authorised provider.'],
  ['Results & follow-up', 'Review available delivery and engagement information.'],
].map(([title, text], i) => ({ no: String(i + 1).padStart(2, '0'), title, text }));

export const SERVICE_ROWS = [
  { no: '01', title: 'Website design & development', text: 'Modern, responsive websites that present your business clearly and make it easy for customers to take action.', tags: ['Business websites', 'Corporate websites', 'E-commerce websites', 'Landing pages', 'Portals'] },
  { no: '02', title: 'Web applications', text: 'Custom browser-based applications for customer services, staff workflows and business operations.', tags: ['Admin panels', 'Customer portals', 'Dashboards', 'Database applications'] },
  { no: '03', title: 'Mobile applications', text: 'Mobile app experiences designed around the way your customers and team use your services.', tags: ['Android apps', 'Business apps', 'Customer apps', 'App deployment'] },
];

export const SERVICE_PROCESS = [
  { no: '01', title: 'Understand', text: 'Discuss your business, audience and requirements.' },
  { no: '02', title: 'Design & build', text: 'Create the structure, design and working product.' },
  { no: '03', title: 'Test & launch', text: 'Review on devices, fix issues and deploy.' },
];

export const HOME_PROCESS = [
  { no: '01', title: 'Understand your requirement', text: 'We listen to your goals, audience, budget and everyday challenges.' },
  { no: '02', title: 'Plan the right solution', text: 'We define the features, timeline and approach before development begins.' },
  { no: '03', title: 'Build, review and launch', text: 'We develop carefully, review the details and help you take it live.' },
];

export const CONTACT_SERVICES = [
  'Website development',
  'Web application',
  'Mobile application',
  'Offline desktop software',
  'Digital marketing',
  'Social media handling',
  'Meta Ads / Google Ads',
  'SEO',
  'Email marketing',
  'Content writing',
  'Bulk WhatsApp messaging',
];
