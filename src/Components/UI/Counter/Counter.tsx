import { ARR } from "../../../constants";
import cl from "./Counter.module.css";

const Counter = ({
  favoriteList,
}: {
  favoriteList: [] | ARR;
}) => {
  return (
    <div className={cl.counter}>{favoriteList.length}</div>
  );
};
export default Counter;
