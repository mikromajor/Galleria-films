export const API_URL = "https://api.themoviedb.org/3";
export const BASE_IMG_URL =
  "https://image.tmdb.org/t/p/w500";
export const API_KEY = "29b19dec74f080a60c50986cda85b141";
export const PATH_3 =
  "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1";
export const initVal = {
  28: false,
  16: false,
  35: false,
  14: false,
  878: false,
};
const initValue = [];
initValue.push();

export type objGenres = {
  [key: string]: boolean;
  // 28: boolean;
  // 16: boolean;
  // 35: boolean;
  // 14: boolean;
  // 878: boolean;
};
export type valG = "28" | "16" | "35" | "14" | "878";

export type film = {
  adult: boolean;
  backdrop_path: null | string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
export type arr = film[];
export type result = { results: arr };

export const sortInit = {
  alphabetical_original_title: false,
  popularity: false,
  release_date: false,
  vote_average: false,
  vote_count: false
};
export type sortInitType = {
  alphabetical_original_title: boolean;
  popularity: boolean;
  release_date: boolean;
  vote_average: boolean;
  vote_count: boolean;
};

