import "./Button.scss";
const Button = (props) => {
  return (
    <button className={props.className} onClick={props.click} type={props.type}>
      {props.children}
    </button>
  );
};
export default Button;
