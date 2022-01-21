import { HttpClient } from './utils/HttpClient';

class FruitsService {
  constructor() {
    this.axios = new HttpClient('http://localhost:3001');
  }

  async listAllFruits() {
    return this.axios.get('/api/fruit/all');
  }
}

export default new FruitsService();
