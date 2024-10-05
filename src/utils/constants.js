export const SIDEBARMENUITEMS = [
  { id: 1, to: '/', label: 'Home', icon: '🏠' },
  { id: 2, to: '/dashboard', label: 'Dashboard', icon: '📊' },
  { id: 3, to: '/inbox', label: 'Inbox', icon: '✉️' },
  { id: 4, to: '/products', label: 'Products', icon: '📦' },
  { id: 5, to: '/invoices', label: 'Invoices', icon: '🧾' },
  { id: 6, to: '/customers', label: 'Customers', icon: '👥' },
  { id: 7, to: '/chatroom', label: 'Chat Room', icon: '💬' },
  { id: 8, to: '/calendar', label: 'Calendar', icon: '📅' },
  { id: 9, to: '/help', label: 'Help Center', icon: '❓' },
  { id: 10, to: '/settings', label: 'Settings', icon: '⚙️' },
];

export const MOCK_EVENTS = [
  { id: '1', title: 'Event 1', start: '2024-10-05T12:00:00', end: '2024-10-05T13:00:00', description: 'Event 1 description', color: '#3788d8' },
  { id: '2', title: 'Event 2', start: '2024-10-09T20:00:00', end: '2024-10-09T21:00:00', description: 'Event 2 description', color: '#977CDC' },
  { id: '3', title: 'Event 2', start: '2024-11-01T20:00:00', end: '2024-11-01T21:00:00', description: 'Event 3 description', color: '#977CDC' },
];

export const CALENDAR_BUTTONS = {
  today: 'Today',
  month: 'Month',
  week: 'Week',
  day: 'Day',
  list: 'Agenda',
};

export const BLUE_COLOR = '#3788d8';
export const WINDOW_HEIGHT = window.innerHeight;
export const CALENDAR_ELEMENT_WIDTH = 200;
export const LOCAL_STORAGE_EVENTS = localStorage.getItem('events');
export const IMPEKABLE = 'IMPEKABLE';

export const EMPTY_NAME_ERROR = 'The name should not be empty.';
export const MAX_SIZE_ERROR = 'The name and notes should be 30 characters or less.';