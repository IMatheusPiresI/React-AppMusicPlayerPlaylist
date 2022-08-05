import styled from "styled-components";
import background from '../../assets/images/thereal.jpg'

export const Container = styled.main`
    position: relative;
    width: 100%;
    min-height: calc(100vh - 60px);
    padding: 2rem;
    background-image: url(${background});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;

    @media (max-width: 485px) {
        padding: 2rem .5rem;
        }
`;

export const ShadowImage = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0, .6);
`;



