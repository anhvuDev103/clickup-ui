import { ColumnField } from '@schemas/shared';
import {
  CommentAssignedIcon,
  CommentIcon,
  DateDueIcon,
  DateStartIcon,
  DependenciesIcon,
  DocsIcon,
  GitPullRequestIcon,
  IdIcon,
  ItemTypeIcon,
  ListIcon,
  PriorityIcon,
  SprintPointsIcon,
  SprintsIcon,
  TaskIcon,
  TextAaIcon,
  TimeEstimateIcon,
  TimeInStatusIcon,
  TimeTrackingIcon,
  UserIcon,
} from '@uikit/icons';

import { ColumnFieldsType } from './enums';

export const WORKSPACE_ID_HEADERS = 'X-Workspace-Id';

export const COLUMNS = [
  //Shown
  {
    label: 'Task Name',
    disabed: true,
    default: ColumnFieldsType.Shown,
    icon: TextAaIcon,
  },
  //Popular
  {
    label: 'Comments',
    default: ColumnFieldsType.Popular,
    icon: CommentIcon,
  },
  {
    label: 'Date created',
    default: ColumnFieldsType.Popular,
    icon: DateStartIcon,
  },
  {
    label: 'Pull Requests',
    default: ColumnFieldsType.Popular,
    icon: GitPullRequestIcon,
  },
  {
    label: 'Status',
    default: ColumnFieldsType.Popular,
    icon: ItemTypeIcon,
  },
  //Hidden
  {
    label: 'Assigned Comments',
    default: ColumnFieldsType.Hidden,
    icon: CommentAssignedIcon,
  },
  {
    label: 'Assigned',
    default: ColumnFieldsType.Hidden,
    icon: UserIcon,
  },
  {
    label: 'Created by',
    default: ColumnFieldsType.Hidden,
    icon: UserIcon,
  },
  {
    label: 'Custom Task ID',
    default: ColumnFieldsType.Hidden,
    icon: IdIcon,
  },
  {
    label: 'Date closed',
    default: ColumnFieldsType.Hidden,
    icon: DateDueIcon,
  },
  {
    label: 'Date done',
    default: ColumnFieldsType.Hidden,
    icon: DateDueIcon,
  },
  {
    label: 'Date updated',
    default: ColumnFieldsType.Hidden,
    icon: DateDueIcon,
  },
  {
    label: 'Dependencies',
    default: ColumnFieldsType.Hidden,
    icon: DependenciesIcon,
  },
  {
    label: 'Due date',
    default: ColumnFieldsType.Hidden,
    icon: DateDueIcon,
  },
  {
    label: 'Latest comment',
    default: ColumnFieldsType.Hidden,
    icon: CommentIcon,
  },
  {
    label: 'Linked Docs',
    default: ColumnFieldsType.Hidden,
    icon: DocsIcon,
  },
  {
    label: 'Linked tasks',
    default: ColumnFieldsType.Hidden,
    icon: TaskIcon,
  },
  {
    label: 'Lists',
    default: ColumnFieldsType.Hidden,
    icon: ListIcon,
  },
  {
    label: 'Priority',
    default: ColumnFieldsType.Hidden,
    icon: PriorityIcon,
  },
  {
    label: 'Sprint points',
    default: ColumnFieldsType.Hidden,
    icon: SprintPointsIcon,
  },
  {
    label: 'Sprints',
    default: ColumnFieldsType.Hidden,
    icon: SprintsIcon,
  },
  {
    label: 'Start date',
    default: ColumnFieldsType.Hidden,
    icon: DateStartIcon,
  },
  {
    label: 'Task ID',
    default: ColumnFieldsType.Hidden,
    icon: IdIcon,
  },
  {
    label: 'Time estimate',
    default: ColumnFieldsType.Hidden,
    icon: TimeEstimateIcon,
  },
  {
    label: 'TIme tracked',
    default: ColumnFieldsType.Hidden,
    icon: TimeTrackingIcon,
  },
  {
    label: 'Total time in Status',
    default: ColumnFieldsType.Hidden,
    icon: TimeInStatusIcon,
  },
] as const satisfies ColumnField[];
