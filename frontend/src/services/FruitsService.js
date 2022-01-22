import { HttpClient } from './utils/HttpClient';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001';

class FruitsService {
  constructor() {
    this.axios = new HttpClient(BACKEND_URL);
  }

  async listAllFruits() {
    return this.axios.get('/api/fruit/all');
  }
}

export default new FruitsService();
