import { useState } from "react";
import style from "./CheckGenre.module.css";

const CheckGenre = ({
  label,
  genreId,
  getGenre,
}: {
  label: string;
  genreId: string;
  getGenre: (a: string, b: boolean) => void;
}) => {
  const [checked, setChecked] = useState(false);
  return (
    <form
      className={
        checked
          ? `${style.form} ${style.checked}`
          : style.form
      }
      onClick={() => {
        setChecked(!checked);
        getGenre(genreId, checked);
      }}
    >
      <input
        className={style.checkbox}
        type='checkbox'
        checked={checked}
        readOnly
      />

      {label}
    </form>
  );
};
export default CheckGenre;
