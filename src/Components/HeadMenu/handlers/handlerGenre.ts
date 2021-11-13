const handlerGenre = (
  genres: string[] | [],
  setGenres: React.Dispatch<React.SetStateAction<string[]>>,
  valGenre: string,
  checked: boolean
) => {
  if (checked) {
    if (!genres.length) setGenres([valGenre]);
    if (!genres.some((genre) => genre === valGenre)) {
      setGenres([...genres, valGenre]);
    }
  } else if (!checked) {
    setGenres(genres.filter((genre) => genre !== valGenre));
  }
};
export default handlerGenre;
