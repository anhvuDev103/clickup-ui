import { SimpleUserProfile } from '@schemas/responses/users';

export interface FormattedSimpleCategory {
  id?: string;
  name: string;
  is_private?: boolean;
  is_hidden?: boolean;
  children?: FormattedSimpleCategory[];
}

export interface FormattedHierarchy {
  id: string;
  name: string;
  description: string;
  is_private: boolean;

  members: SimpleUserProfile[];
  children: FormattedSimpleCategory[];
}

export type SpaceNodeData = FormattedHierarchy | FormattedSimpleCategory;

export type SpaceTreeData = FormattedHierarchy[];
