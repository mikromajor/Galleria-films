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
  callback: (a: string) => void;
}) => {
  return (
    <select
      name={defaultName}
      id={"selectDropdownSort"}
      onChange={(e) => {
        return callback(e.currentTarget.value);
      }}
    >
      {/* беда с disabled - не раб */}
      <option>{defaultName}</option>
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
