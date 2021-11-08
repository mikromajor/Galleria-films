import "./CheckGenre.css";

const CheckGenre = ({
  label,
  genreId,
  handlerGenre,
}: {
  label: string;
  genreId: string;
  handlerGenre: (a: string, b: boolean) => void;
}) => {
  return (
    <div className='rowsMarg'>
      <input
        type='checkbox'
        id={label}
        name={label}
        value={genreId}
        onChange={(e) => {
          const { value, checked } = e.currentTarget;
          handlerGenre(value, checked);
        }}
      />
      <label htmlFor={label} className='elMargin'>
        {label}
      </label>
    </div>
  );
};
export default CheckGenre;
