import styled from "styled-components";
import { colors, breakpoints } from "../../lib/style/theme";

export const SingleCourse = styled.singlecourse`
    @media (${breakpoints.tablet}) {
    display: flex;
    justify-content: space-between;
    }
`;

export const Figure = styled.figure`
        width: 100%;
        height: auto;
        border-radius: 16px;
        overflow: hidden;
        margin-bottom: 32px;

        @media (${breakpoints.tablet}) {
            flex-shrink: 0;
            width: 350px;
            height: 350px;
            margin-bottom: 0;
        }

        @media (${breakpoints.desktopLarge}) {
            width: 450px;
            height: 450px;
        }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Text = styled.h2`
        font-size: 16px;
        line-height: 180%;
        color: ${colors.TextPrimary};

        @media (${breakpoints.tablet}) {
            padding-left: 48px;
        }

        @media (${breakpoints.desktopLarge}) {
            padding-left: 64px;
        }

`;
