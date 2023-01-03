import "./Button.css";

const Button = (props) => {
  return (
    <button type={props.type} className={`${props.color} ${props.size} btn`}>
      I am a {props.color} button in {props.size}
    </button>
  );
};

export default Button;
