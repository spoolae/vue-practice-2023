import axios from "axios";

const url = " https://api.novaposhta.ua/v2.0/json/ ";

const API_KEY = "32fb418217e0a1ff9aac155b6aea6525";

class Api {
  constructor(url) {
    this.baseUrl = url;
    this.customApi = this.createApi();
  }

  createApi() {
    const api = axios.create({
      baseURL: this.baseUrl,
    });
    return api;
  }

  getRequest(modelName, calledMethod, methodProperties = {}) {
    return myApi.customApi({
      method: "post",
      data: {
        apiKey: API_KEY,
        modelName,
        calledMethod,
        methodProperties,
      },
    });
  }
}

const myApi = new Api(url);

export { myApi };
