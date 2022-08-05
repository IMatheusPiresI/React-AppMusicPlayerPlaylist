import styled from "styled-components";
import Audiobar from '../../../public/images/audioBar.gif';

type isPlaying = {
    isPlaying: boolean;
}

export const Container = styled.section<isPlaying>`
   background-image:  ${({isPlaying}) => isPlaying && `url(${Audiobar})`};
    background-position: bottom;
`;

export const Music = styled.div`
    width: 100%;
    display: flex;
    padding: 0 1rem;
    align-items: center;
    height: 50px;
    background-image: linear-gradient(to bottom, rgba(255,255,255, .30), transparent);

    & svg {
        font-size: 30px;
        margin-right: 1rem;
        cursor: pointer;
    }

    & img {
        width: 35px;
        height: auto;
    }
`;

export const Autor = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 1rem;
    flex-direction: column;
    text-align: left;

    & p:first-child {
            font-size: 18px;
            color: #fff;
        }

        & p:last-child {
            font-size: 14px;
            color: #fff7;
        }

        @media (max-width: 765px) {
            & p:first-child {
            font-size: 14px;
        }
    }
`;

export const Time = styled.p`
    margin-left: auto;
    font-size: 15px;
    color: #fff9;
`;

