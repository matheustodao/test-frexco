export class HttpClient {
  constructor(baseURL, options) {
    this.baseURL = baseURL;
    this.options = options;
  }

  async get(path) {
    const response = await fetch(`${this.baseURL}${path}`);

    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    return response.json();
  }
}
