import { Children } from "react";
//import "./Button.scss";
import { Button as ButtonWrapper } from "../../lib/style/generalStyles";


/* const Button = ({modifiers, children })=>{
     const modifierClasses = {
          secondary: 'Button_secondary',
          nav: 'Button_nav',
          landing: 'Button_landing',
          heading: 'Button_heading',
          outline: 'Button_outline'
     };

     let buttonClass = "Button";

     modifiers.map(modifier => (buttonClass += " " + modifierClasses[modifier]));

     return <button className={buttonClass}>{children}</button>
};
 */
const Button = ({ children, ...otherProps}) => {
     return <ButtonWrapper {...otherProps}>{Children}</ButtonWrapper>;
};

export default Button;
