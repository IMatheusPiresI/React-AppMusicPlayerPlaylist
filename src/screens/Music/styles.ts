import styled from "styled-components";

export const Container = styled.section`
    position: relative;
    max-width: 750px;
    margin: 0 auto;
    text-align: center;
    padding: 2rem 1rem 3.5rem 1rem;
    height: 100%;
`;

export const BoxMusics = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 600px;
    overflow-x: auto;
    gap: 8px;
    margin-top: 2em;
    flex: 1;

    /* width */
    ::-webkit-scrollbar {
        width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        margin: 5px 0;
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

