import "./Main.scss";
//import { Main as MainWrapper } from "../../lib/style/generalStyles";

/* const Main = (props) =>{
     return <MainWrapper>{props.children}</MainWrapper>
}; */

const Main = (props) => {
     return <main className="Main">{props.children}</main>
}

export default Main;
