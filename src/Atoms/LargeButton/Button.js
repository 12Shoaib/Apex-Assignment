import button from "./button.module.css";

const Button = ({ children, color , onClick }) => {
  return (
    <div className={button.container}>
      <button onClick={onClick} className={button[color]}> {children}</button>
    </div>
  );
};

export default Button;
