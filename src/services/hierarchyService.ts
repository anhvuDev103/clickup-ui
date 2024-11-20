import { CreateProjectRequest } from '@schemas/requests/hierarchy';
import { GetHierarchyResult } from '@schemas/responses/hierarchy';

import http, { ApiReponse } from './httpService';

class HierarchyService {
  async getHierarchy(): Promise<ApiReponse<GetHierarchyResult[]>> {
    const response = await http.get<never, ApiReponse<GetHierarchyResult[]>>('/hierarchy');

    return response;
  }

  async createSpace(payload: CreateProjectRequest): Promise<ApiReponse> {
    const response = await http.post<never, ApiReponse, CreateProjectRequest>('/hierarchy/projects', {
      ...payload,
      member_emails: [],
    });

    return response;
  }
}

export default HierarchyService;
