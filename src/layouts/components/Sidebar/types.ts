interface SimpleUserProfile {
  _id: string;
  name: string;
  email: string;
  description: string;
}

interface SimpleCategory {
  _id?: string;
  name: string;
  is_private?: boolean;
  is_hidden?: boolean;
  subcategories?: SimpleCategory[];
}

export interface GetHierarchyResponse {
  _id: string;
  name: string;
  description: string;
  is_private: boolean;

  members: SimpleUserProfile[];
  categories: SimpleCategory[];
}

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
