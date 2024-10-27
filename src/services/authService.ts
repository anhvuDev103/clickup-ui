import { LocalStorageKey } from '@constants/localStorage';
import { SignInRequest } from '@schemas/requests/auth';
import { SignInResponse } from '@schemas/responses/auth';

import http from './httpService';

class AuthService {
  async signIn(payload: SignInRequest) {
    const { result } = await http.post<never, SignInResponse, SignInRequest>('/auth/sign-in', payload);

    localStorage.setItem(LocalStorageKey.AccessToken, result.access_token);
    localStorage.setItem(LocalStorageKey.RefreshToken, result.refresh_token);
  }
}

export default AuthService;
