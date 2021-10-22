import getFetch from "./getFetch";

const getPopularMovies = getFetch("/movie/popular");

export default getPopularMovies;
