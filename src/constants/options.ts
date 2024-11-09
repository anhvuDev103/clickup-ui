import { DateDueIcon, ItemTypeIcon, PriorityIcon, StatusIcon, TagIcon, UserIcon } from '@uikit/icons';
import { SelectItem } from '@uikit/types';

export const GROUP_BY = [
  {
    label: 'Status',
    icon: StatusIcon,
  },
  {
    label: 'Assignee',
    icon: UserIcon,
  },
  {
    label: 'Priority',
    icon: PriorityIcon,
  },
  {
    label: 'Tags',
    icon: TagIcon,
  },
  {
    label: 'Due date',
    icon: DateDueIcon,
  },
  {
    label: 'Task type',
    icon: ItemTypeIcon,
  },
] as const satisfies SelectItem[];

export const ORDER_BY = [
  {
    label: 'Ascending',
  },
  {
    label: 'Descending',
  },
] as const satisfies SelectItem[];
