import { SimpleUserProfile } from './users';

interface SimpleCategory {
  _id?: string;
  name: string;
  is_private?: boolean;
  is_hidden?: boolean;
  subcategories?: SimpleCategory[];
}

export interface GetHierarchyResult {
  _id: string;
  name: string;
  description: string;
  is_private: boolean;

  members: SimpleUserProfile[];
  categories: SimpleCategory[];
}
