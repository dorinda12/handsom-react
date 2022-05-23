import React from "react";
import LogoImg from "../../assets/images/logo.svg";
import Button from "../Button/Button";
//import { Link, NavLink } from "react-router-dom";
import {
  Header as HeaderWrapper,
  HeaderInner,
  LogoLink,
  LogoImg as LogoElement,
  Hamburger,
  Nav,
  HeaderNavLink,
  ButtonLink
} from "./HeaderStayle";

const Header = ({ isSecondary }) =>{

    return (
      <HeaderWrapper isSecondary ={isSecondary}>
        <HeaderInner>
          <LogoLink to= {"/"}>
            <LogoElement src={LogoImg} alt="Academy Logo"/>
          </LogoLink>
          <Hamburger/>
          <Nav>
            <HeaderNavLink to ={"/courses"}>Courses</HeaderNavLink>
            <ButtonLink to={"/sign-in"}>
                <Button modifiers={["nav"]}>Sign in</Button>
            </ButtonLink>
            <ButtonLink to = {"/register"}>
                <Button modifiers={["nav","secondary"]}>Register</Button> 
            </ButtonLink>
          </Nav>
        </HeaderInner>
      </HeaderWrapper>
    );
};
export default Header;
