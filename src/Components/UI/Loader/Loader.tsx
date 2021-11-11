import cl from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={cl.loadText}>
      Loading...
      <div className={cl.loading}></div>
    </div>
  );
};
export default Loader;
