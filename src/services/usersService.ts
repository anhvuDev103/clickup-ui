import { GetProfileResponse, GetProfileResult } from '@schemas/responses/users';

import http from './httpService';

class UsersService {
  async getProfile(): Promise<GetProfileResult> {
    const { result } = await http.get<never, GetProfileResponse>('/users/profile');

    return result;
  }
}

export default UsersService;
