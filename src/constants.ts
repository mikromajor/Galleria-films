export const API_URL = "https://api.themoviedb.org/3";
export const BASE_IMG_URL =
  "https://image.tmdb.org/t/p/w500";
export const API_KEY = "29b19dec74f080a60c50986cda85b141";
export const PATH_3 =
  "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1";

export type FILM = {
  id: number;
  [key: string]: string | number;
};
export type ARR = FILM[];

export const SORT_INIT = {
  original_title: false,
  release_date: false,
  vote_average: false,
  vote_count: false,
};
export type OPT = {
  [key: string]: string;
};
export const OPTIONS: OPT[] = [
  { val: "original_title", name: "Original title" },
  { val: "release_date", name: "Release date" },
  { val: "vote_average", name: "Vote average" },
  { val: "vote_count", name: "Vote count" },
];
