import styled from "styled-components";
import { NavLink, Link } from 'react-router-dom'
import { colors,breakpoints} from "../../lib/style/theme";
import { ReactComponent as HamburgerIcon} from "../../assets/images/icon-hamburger.svg";

export const Header = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
    padding: 24px;
    

    ${props => props.isSecondary && `
        background-color: ${colors.TextPrimary};
        position: initial;
    
    `} 

    @media (${breakpoints.desktop}) {
        padding: 32px 0;
    }
`;

export const HeaderInner = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (${breakpoints.desktop}) {
            width: 960px;
            margin: 0 auto;
        }

        @media (${breakpoints.desktopLarge}) {
            width: 1260px;
        }
`;

export const LogoLink = styled(Link)``;

export const LogoImg = styled.img`
    width: 140px;`;

export const Hamburger = styled(HamburgerIcon)`
        width: 30px;
        height: auto;

        @media (${breakpoints.desktop}) {
              display: none;
            
        }

        path{
            fill: ${colors.secondary};
        }
`;

export const Nav = styled.nav`
        display: none;

        @media (${breakpoints.desktop}) { 
        display: block;
        align-items: center;
        }
`;

export const HeaderNavLink = styled(NavLink)`
        color: ${colors.secondary};
        letter-spacing: 1px;
        margin-right: 48px;
        position:relative;
        cursor: pointer;
        transition: text-shadow 0.3s ease-out;

            &::after {
                opacity: 0;
                position: absolute;
                background-color: ${colors.secondary};
                height: 2px;
                width: 100%;
                left: 0;
                bottom: -6px;
                border-radius: 8px;
                content: '';
                transition: 0.3s ease-in-out;
            }

            &:hover:after {
                &::after {
                    opacity: 1;
                }
            }
`;

export const ButtonLink = styled(Link)`
        margin-right: 24px;
        display:inline-block;

        &:last-child{
            margin-right: 0px;
        }
`;
