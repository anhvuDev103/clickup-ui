import AuthLayout from '@layouts/AuthLayout';
import Clips from '@pages/Clips';
import Dashboards from '@pages/Dashboards';
import Docs from '@pages/Docs';
import Everything from '@pages/Everything';
import Home from '@pages/Home';
import Inbox from '@pages/Inbox';
import Login from '@pages/Login';
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
import { SvgProps } from '@uikit/types';

interface Route {
  component: React.FC;
  path: `/${string}`;
  label?: string;
  icon?: React.FC<SvgProps>;
  navigation?: boolean;
  layout?: React.FC;
}

export const ROUTES = [
  { component: Home, path: '/home', label: 'Home', icon: HomeIcon, navigation: true },
  { component: Inbox, path: '/inbox', label: 'Inbox', icon: InboxIcon, navigation: true },
  { component: Docs, path: '/docs', label: 'Docs', icon: DocsIcon, navigation: true },
  { component: Dashboards, path: '/dashboards', label: 'Dashboards', icon: ChartSquareIcon, navigation: true },
  { component: Clips, path: '/clips', label: 'Clips', icon: CameraIcon, navigation: true },
  { component: Timesheets, path: '/timesheets', label: 'Timesheets', icon: TimesheetIcon, navigation: true },
  { component: More, path: '/more', label: 'More', icon: MoreCircleIcon, navigation: true },
  { component: Login, path: '/login', layout: AuthLayout },
  { component: Everything, path: '/everything' },
] as Route[];
