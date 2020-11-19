import axios, { AxiosInstance } from 'axios';
import { MovieDetail } from './types';

class MovieService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: process.env.VUE_APP_MOVIE_DB_URL,
    });
  }

  public async getMovieList(page = 1) {
    const result = await this.axiosInstance.get('/', {
      params: {
        s: 'Batman',
        page,
        apikey: process.env.VUE_APP_API_TOKEN,
      },
    });

    return {
      result: result.data.Search,
      numberOfResult: result.data.totalResults,
    };
  }

  public async getSpecificMovie(id: string): Promise<MovieDetail> {
    const result = await this.axiosInstance.get('/', {
      params: {
        i: id,
        apikey: process.env.VUE_APP_API_TOKEN,
      },
    });

    return result.data;
  }
}

const movieService = new MovieService();

export default {
  movieService,
};
