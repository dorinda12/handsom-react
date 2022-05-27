/* import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
    colors,
    fonts
} from '../../lib/style/theme';

export const Button = styled.button`
    border: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    font-size: 16px;
    width: 220px;
    background-color: ${colors.Secondary};
    color: ${colors.Primary};
    border-radius: 30px;
    font-weight: 500;
    text-transform: uppercase;
    border: 0;
    font-family: ${fonts.primary};

    ${(props) =>
    props.isNav &&
    `
        width: 150px;
    `}

    ${(props) =>
    props.isSecondary && 
    `
        background: $(colors.Primary);
        color: ${colors.Secondary};
    `}

    ${(props) =>
    props.isOutlined &&
    `
        width: 200px;
        border: 1px solid ${colors.Primary};
        transition: 0.3s ease-in-out;

        &:hover {
            background-color: $(colors.Primary);
            color: ${colors.Secondary};
        }
    `}

    ${(props) =>
    props.isHeading &&
    `
        width: 200px;
        `}
    
    ${(props)=>
        props.isLanding &&
        `
            width: 220px;
            `}
    `; */