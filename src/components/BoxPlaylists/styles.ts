import styled from "styled-components";

type currentPlaylist = {
    currentPlaylist: boolean
}

export const BoxPlayList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    overflow-y: auto;
    max-width: 210px;
    padding: 10px;
    border-right: 1px solid rgba(255, 255, 255, .5);
    box-shadow: inset 0px 0px 10px 1px rgba(255,255,255, 1);

        /* width */
    ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        margin: 2px 0;
        background: rgba(0, 0, 0, .30);
        box-shadow: 0px 0px 5px 1px rgba(255,255,255, 1);
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, .7);
        border-radius: 10px;
    }

    @media (max-width: 765px) {
        max-width: 100%;
        flex-direction: row;
        overflow-y: auto;
        min-height: 220px;
    }
`;

export const CardPlaylist = styled.div<currentPlaylist>`
    min-width: 180px;
    min-height: 180px;
    border: 1px solid rgba(255, 255, 255, .5);
    box-shadow: 0px 0px 15px 1px rgba(255,255,255, .5);
    border-radius: 10px;
    overflow: hidden;
    transform: ${({currentPlaylist}) => currentPlaylist ? 'scale(1)' : 'scale(.9)'};
    transition: transform .3s linear;
    position: relative;
    cursor: pointer;

    & div {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        background-color: rgba(0, 0, 0, .7);
        padding: 6px;
        box-shadow: inset 0px 0px 20px 1px rgba(255,255,255, 1);

        & h2 {
            text-shadow: -1px -1px #000;
            font-size: 18px;
            font-weight: 500;
            font-style: italic;
        }
    }

    & img {
        width: 100%;
        height: auto;
    }

    &:hover {
        transform: scale(1);
    }

    @media (max-width: 765px) {
        min-width: 160px;
        min-height: 160px
    }
`;