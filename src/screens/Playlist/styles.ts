import styled from "styled-components";

export const Container = styled.section`
    position: relative;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    padding: 2rem 0rem 3.5rem 0rem;
`;

export const ContainerContent =  styled.section`
    display: flex;
    width: 100%;
    height: 600px;
    max-width: 950px;
    max-height: 800px;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, .5);
    border: 1px solid rgba(255, 255, 255, .5);
    border-radius: 10px;
    margin-top: 30px;
    box-shadow: inset 0px 0px 15px 1px rgba(255,255,255, 1);

    @media (max-width: 765px) {
        flex-direction: column;
    }
`;

