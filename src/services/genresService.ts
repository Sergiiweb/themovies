import {apiService, IRes} from "./apiService";
import {urls} from "../constants";
import {IGenreList} from "../interfaces";

const genresService = {
    getAll: (): IRes<IGenreList> => apiService.get(urls.genres)
}

export {
    genresService
}
