import axios from "axios";

const API_KEY = "7914d5a440960cfd5df3bd0388a7ad0f";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

class api {
  constructor(url) {
    this.baseUrl = url;
    this.customApi = this.createApi();
  }

  getWeatherInfo(currentCity) {
    return Api.customApi("/weather", {
      method: "GET",
      params: {
        q: currentCity,
        appid: API_KEY,
        units: "metric",
      },
    });
  }

  getWeatherInfoByCoords(lat, lon) {
    return Api.customApi("/weather", {
      method: "GET",
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: "metric",
      },
    });
  }

  createApi() {
    const api = axios.create({
      baseURL: this.baseUrl,
    });

    return api;
  }
}

const Api = new api(BASE_URL);

export { Api };
