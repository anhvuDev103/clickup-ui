import { ApiReponse } from '@services/httpService';

export type SignInResponse = ApiReponse<{
  access_token: string;
  refresh_token: string;
}>;

export type RefreshTokenResponse = ApiReponse<{
  access_token: string;
  refresh_token: string;
}>;
