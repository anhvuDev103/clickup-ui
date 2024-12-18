import { SelectOption } from '@uikit/components/Select/types';
import { DateDueIcon, ItemTypeIcon, PriorityIcon, StatusIcon, TagIcon, UserIcon } from '@uikit/icons';

export const GROUP_BY = [
  {
    value: 'status',
    label: 'Status',
    icon: StatusIcon,
    default: true,
  },
  {
    value: 'assignee',
    label: 'Assignee',
    icon: UserIcon,
  },
  {
    value: 'priority',
    label: 'Priority',
    icon: PriorityIcon,
  },
  {
    value: 'tags',
    label: 'Tags',
    icon: TagIcon,
  },
  {
    value: 'due_date',
    label: 'Due date',
    icon: DateDueIcon,
  },
  {
    value: 'task_type',
    label: 'Task type',
    icon: ItemTypeIcon,
  },
] as const satisfies SelectOption[];

export const ORDER_BY = [
  {
    value: 'ascending',
    label: 'Ascending',
  },
  {
    value: 'descending',
    label: 'Descending',
  },
] as const satisfies SelectOption[];

export const SHOW_SUBTASKS_TYPE = [
  {
    value: 'collapse',
    label: 'Collapse all',
    note: '(default)',
    default: true,
  },
  {
    value: 'expand',
    label: 'Expand all',
  },
  {
    value: 'separate',
    label: 'As separate tasks',
    describe: 'Use this to filter subtasks',
  },
] as SelectOption[];
