import { OPT } from "../../../constants";

const DropdownSort = ({
  options,
  defaultName,
  value,
  setKeyWordSort,
}: {
  options: OPT[];
  defaultName: string;
  value: string;
  setKeyWordSort: React.Dispatch<
    React.SetStateAction<string>
  >;
}) => {
  return (
    <select
      name={defaultName}
      id={"selectDropdownSort"}
      onChange={(e) => {
        return setKeyWordSort(e.currentTarget.value);
      }}
      defaultValue='0'
    >
      <option value='0' disabled>
        {defaultName}
      </option>
      {options.map((obj) => {
        return (
          <option key={obj.val} value={obj.val}>
            {obj.name}
          </option>
        );
      })}
    </select>
  );
};
export default DropdownSort;
