import "./Button.scss";
const Button = (props) => {
  return (
    <button className={props.classes} onClick={props.click} type={props.type}>
      {props.children}
    </button>
  );
};
export default Button;
