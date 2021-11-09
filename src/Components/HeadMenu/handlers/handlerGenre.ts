const handlerGenre = (
  genres: string[],
  setGenres: React.Dispatch<React.SetStateAction<string[]>>,
  valGenre: string,
  checked: boolean
) => {
  if (checked) {
    if (!genres.some((item) => item === valGenre)) {
      const updatedValues = [...genres, valGenre];
      setGenres(updatedValues);
    }
  } else {
    const updatedValues = genres.filter(
      (el) => el !== valGenre
    );
    setGenres(updatedValues);
  }
};
export default handlerGenre;
