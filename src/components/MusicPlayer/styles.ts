import styled from "styled-components";
import Audiobar from '../../../public/images/audiobar.gif'

type IsPlaying = {
    isPlaying: boolean;
}

export const Container = styled.div`
    position: fixed;
    width: 100%;
    background-image: linear-gradient(to top, rgba(255, 255, 255, 1), transparent);
    bottom: 0;
    left: 0;
    height: 65px;
`;

export const ContainerPlayer = styled.div<IsPlaying>`
    height: 65px;
    background-image: ${({isPlaying}) => isPlaying && `url(${Audiobar})`};
    background-position: bottom;
`;

export const Player = styled.div`
    display: flex;
    align-items: center;
    max-width: 750px;
    height: 100%;
    margin: 0 auto;
    padding: 0 .8rem;

    & svg {
        font-size: 40px;
        margin-right: 1.5rem;
        cursor: pointer;

        @media (max-width: 520px) {
            margin-right: .5rem;
        }
    }

    & img {
        width: 40px;
        height: 40px;
        margin-right: 1.5rem;

        @media (max-width: 520px) {
            margin-right: .5rem;
        }
    }
`;

export const Autor = styled.div`
    display: flex;
    width: 250px;
    justify-content: center;
    margin-left: .5rem;
    flex-direction: column;
    text-align: left;

    & p:first-child {
        font-size: 18px;
        color: #fff;
        text-shadow: -1px 1px #000;
    }

    & p:last-child {
        font-size: 14px;
        color: rgba(255,255,255 .8);
        text-shadow: -1px 1px #000;
    }

    @media (max-width: 520px) {
        & p:first-child {
            font-size: 15px;
        }

        & p:last-child {
            font-size: 12px;
            color: rgba(255,255,255 .8);
            text-shadow: -1px 1px #000;
        }
    }
`;

