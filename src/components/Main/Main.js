//import "./Main.scss";
import React from 'react';
import { Main as MainWrapper } from "../Main/MainStyle";

const Main = (props) =>{
     return <MainWrapper>{props.children}</MainWrapper>
};

/* const Main = (props) => {
     return <main className="Main">{props.children}</main>
} */

export default Main;