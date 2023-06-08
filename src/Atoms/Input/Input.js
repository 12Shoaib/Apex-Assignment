import input from "./input.module.css";

const Input = ({ id, name, type, placeholder, value, onChange }) => {
  return (
    <div className={input.container}>
      <input
        placeholder={placeholder}
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={input.input_field}
      />
    </div>
  );
};

export default Input;
