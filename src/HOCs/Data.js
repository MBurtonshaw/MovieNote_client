import config from "../config";

export default class Data {
  async api(path, method = "GET", body = null) {
    const url = config.apiBaseUrl + path;

    const options = {
      method,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    };

    if (body !== null) {
      options.body = JSON.stringify(body);
    }

    try {
      const response = await fetch(url, options);

      if (response.ok) {
        if (response.status === 204) {
          return {}; // Handle no content response
        }
        const text = await response.text();
        return text ? JSON.parse(text) : {}; // Handle response body
      } else {
        const errorData = await response.json();
        throw new Error(
          `HTTP ${response.status}: ${errorData.message || "Unknown error"}`
        );
      }
    } catch (error) {
      console.error("Fetch error:", error.message);
      throw error; // Re-throw error for further handling
    }
  }

  async getNowPlaying() {
    const movieList = await this.api(`movies/now_playing`, "GET");
    return movieList;
  }

  async getComingSoon() {
    const movieList = await this.api(`movies/coming_soon`, 'GET');
    return movieList;
  }

  async getMoviesByGenre(genre) {
    const movieList = await this.api(`movies/genres/${genre}`, 'GET');
    return movieList;
  }

  async getTopRated() {
    const movieList = await this.api(`movies/top_rated`, 'GET');
    return movieList;
  }

  async getMovieById(id) {
    const movie = await this.api(`movies/${id}`, 'GET');
    return movie;
  }

  async search(query) {
    const movieList = await this.api(`movies/search/${query}`, 'GET');
    return movieList;
  }

  //register user
  async registerUser(user) {
    return await this.api('register', "POST", user);
  }

  //login user
  async loginUser(user) {
    return await this.api(`login`, "POST", user);
  }

}