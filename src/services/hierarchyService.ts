import http from './httpService';

class HierarchyService {
  async createSpace(): Promise<any> {
    const { result } = await http.get<never, any>('/hierarchy/');

    return result;
  }
}

export default HierarchyService;
