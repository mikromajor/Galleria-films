import { OPT } from "../../../../constants";

const DropdownSort = ({
  options,
  defaultName,
  value,
  callback,
}: {
  options: OPT[];
  defaultName: string;
  value: string;
  callback: React.Dispatch<React.SetStateAction<string>>;
}) => {
  console.log(options);
  return (
    <select
      value={value}
      onChange={(e) => callback(e.currentTarget.value)}
    >
      <option value={"0"}>{defaultName}</option>
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
