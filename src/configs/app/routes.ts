import Clips from '@pages/Clips';
import Dashboards from '@pages/Dashboards';
import Docs from '@pages/Docs';
import Home from '@pages/Home';
import Inbox from '@pages/Inbox';
import More from '@pages/More';
import Timesheets from '@pages/Timesheets';
import {
  CameraIcon,
  ChartSquareIcon,
  DocsIcon,
  HomeIcon,
  InboxIcon,
  MoreCircleIcon,
  TimesheetIcon,
} from '@uikit/icons';

export const ROUTES = [
  { component: Home, path: '/home', label: 'Home', icon: HomeIcon },
  { component: Inbox, path: '/inbox', label: 'Inbox', icon: InboxIcon },
  { component: Docs, path: '/docs', label: 'Docs', icon: DocsIcon },
  { component: Dashboards, path: '/dashboards', label: 'Dashboards', icon: ChartSquareIcon },
  { component: Clips, path: '/clips', label: 'Clips', icon: CameraIcon },
  { component: Timesheets, path: '/timesheets', label: 'Timesheets', icon: TimesheetIcon },
  { component: More, path: '/more', label: 'More', icon: MoreCircleIcon },
] as const;
