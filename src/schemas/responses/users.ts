import { ApiReponse } from '@services/httpService';

interface Workspace {
  _id: string;
  name: string;
  created_at: string;
  updated_at: string;
  members: any[];
  owner: {
    _id: string;
    name: string;
    email: string;
    description: string;
  };
}

export interface GetProfileResult {
  _id: string;
  name: string;
  email: string;
  description: string;
  workspaces: Workspace[];
}

export type GetProfileResponse = ApiReponse<GetProfileResult>;
