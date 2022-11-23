import './Button.css'

const Button = (props) => {
    return <button className="button" onClick={props.func} style={{color: props.colorText}}>{props.children}</button>
};

export default Button;