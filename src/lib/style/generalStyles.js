import styled from 'styled-components';
import { breakpoints, colors, fonts } from '../../lib/style/theme';
import {Form as FormFormik, Field as FieldFormik, ErrorMessage as ErrorMessageFormik} from "formik";
import { css } from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 48px;

    @media (${breakpoints.tabletSmall}){
        grid-template-columns: repeat(2, 1fr);
        column-gap: 32px;
    }

    @media (${breakpoints.desktop}){
        grid-template-columns: repeat(3, 1fr);
        column-gap: 48px;
    }
    
    @media (${breakpoints.desktopLarge}){
        grid-template-columns: repeat(4, 1fr);
    }
`;

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
        background: ${colors.Primary};
        color: ${colors.Secondary};
    `}
    ${(props) =>
    props.isOutlined &&
    `
        width: 200px;
        border: 1px solid ${colors.Primary};
        transition: 0.3s ease-in-out;
        &:hover {
            background-color: ${colors.Primary};
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
    `;

export const Form = styled(FormFormik)`
        @media (${breakpoints.tabletSmall}){
        width: 400px;

        ${props => props.isCentered !== false && `
            margin: 0 auto;
        `}
    }
`;

export const FormRow = styled.div`
    margin-bottom: 32px;

    &:last-child {
        margin-bottom: 0;
    }
`;

const FieldStyle = css`
    border: 1px solid ${colors.textSecondary};
    border-radius: 6px;
    width: 100%;
    line-height: 50px;
    height: 50px;
    padding: 0 12px;
    outline: none;
    font-size: 14px;
    font-family: ${fonts.primary};

    &:focus {
        border-color: ${colors.textPrimary};
    }

    @media (${breakpoints.desktop}){
        font-size: 16px;
    }
`;

export const Field = styled (FieldFormik)`
    ${FieldStyle}
`;

export const Select = styled.select`
    ${FieldStyle}
`;

export const Option = styled.option``;

export const ErrorMessage = styled(ErrorMessageFormik)`
    font-size: 14px;
    color: ${colors.primary};
    padding-top: 8px;
`;

