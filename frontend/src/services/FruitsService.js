import { HttpClient } from './utils/HttpClient';

class FruitsService {
  constructor() {
    this.axios = new HttpClient(process.env.REACT_APP_BACKEND_URL);
  }

  async listAllFruits() {
    return this.axios.get('/api/fruit/all');
  }
}

export default new FruitsService();
