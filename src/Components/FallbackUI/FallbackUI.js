import fallbackui from "./fallbackui.module.css";

const FallbackUI = () => {
  return (
    <div className={fallbackui.container}>
      <h1>Woops , Something went wrong..!</h1>
    </div>
  );
};

export default FallbackUI;
