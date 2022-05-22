import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
    colors,
    breakpoints
} from '../../lib/style/theme';

export const Button = styled(Link)`
    border: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    font-size: 16px;
    width: 220px;
    background-color: $colorBgPrimary;
    color: $colorPrimary;
    border-radius: 30px;
    font-weight: 500;
    text-transform: uppercase;

    &:hover{
        transition: all 0.3s ease-in-out;
        filter: drop-shadow(0 3px 3px $colorTextPrimary);
    }
`; 
