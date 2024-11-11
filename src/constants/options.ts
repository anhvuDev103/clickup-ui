import { SelectItem } from '@uikit/components/Select/types';
import { DateDueIcon, ItemTypeIcon, PriorityIcon, StatusIcon, TagIcon, UserIcon } from '@uikit/icons';

export const GROUP_BY = [
  {
    value: 'status',
    label: 'Status',
    icon: StatusIcon,
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
] as const satisfies SelectItem[];

export const ORDER_BY = [
  {
    value: 'ascending',
    label: 'Ascending',
  },
  {
    value: 'descending',
    label: 'Descending',
  },
] as const satisfies SelectItem[];
