import styled from "styled-components";
import {
    colors,
    breakpoints,
    fonts
} from '../../lib/style/theme';

export const Landing = styled.div`
    position: relative;
    height: 100vh;
`;

export const Figure = styled.figure`
    width: 100%;
    height: 100%;
`;

export const LandingImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const LandingOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

export const LandingOverlayPrimary = styled.div` 
    position: absolute;
    left: 0;
    width: 27%;
    height: 100%;
    background-color: ${colors.primary};
`;

export const LandingOverlaySecondary = styled.div`
    position: absolute;
    right: 0;
    width: 73%;
    height: 100%;
    background-color: #000000ad;
`;

export const LandingContent = styled.div`
    position: absolute;
    top: 0;
    left: calc((100% - 1260px) / 2);
    width: 1260px;
    height: 100%;
    display: flex;
    align-items: center;
    z-index: 1;
`;

export const LandingTitle = styled.h1`
    font-size: 56px;
    width: 550px;
    color: ${colors.bgPrimary};
    margin-bottom: 24px;
`;

export const LandingSubtitle = styled.p`
    font-size: 16px;
    line-height: 180%;
    color: ${colors.bgPrimary};
    width: 440px;
    margin-bottom: 48px;
`; 
