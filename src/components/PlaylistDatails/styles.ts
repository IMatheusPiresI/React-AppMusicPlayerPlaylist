import styled from "styled-components";


export const BoxPlaylistSelected = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 10px;
    overflow-y: auto;

    /* width */
    ::-webkit-scrollbar {
        width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        margin: 10px 0;
        background: rgba(0, 0, 0, .30);
        box-shadow: 0px 0px 5px 1px rgba(255,255,255, 1);
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, .7);
        box-shadow: 0px 0px 5px 1px rgba(255,255,255, 1);
        border-radius: 10px;
    }
`;

export const InfoPlayList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 250px;

    & img {
        width: 180px;
        height: 180px;
        margin: 0 auto;
        border-radius: 10px;
        box-shadow: 0px 0px 10px 1px rgba(255, 255, 255, .5);
    }

    & h3 {
        margin-top: 1rem;
        font-size: 20px;
        font-weight: 500;
        font-style: italic;
    }

    & p {
        font-size: 15px;
        margin-top: 8px;;
    }

    @media (max-width: 765px) {

        & h3 {
            font-size: 19px;
        }

        & img {
            width: 140px;
            height: 140px;
        }
    }
`;
