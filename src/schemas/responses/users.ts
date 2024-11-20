import { ApiReponse } from '@services/httpService';

export interface SimpleUserProfile {
  _id: string;
  name: string;
  email: string;
  description: string;
}

export interface Workspace {
  _id: string;
  name: string;
  created_at: string;
  updated_at: string;
  members: any[];
  owner: SimpleUserProfile;
}

export interface GetProfileResult extends SimpleUserProfile {
  workspaces: Workspace[];
}

export type GetProfileResponse = ApiReponse<GetProfileResult>;
