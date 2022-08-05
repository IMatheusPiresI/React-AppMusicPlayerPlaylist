import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const Logo = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 100%;
`;

export const TextLogo = styled.p`
    font-size: 23px;
    margin-left: 10px;
    font-weight: 500;
    font-family: 'Abril Fatface';
    font-style: italic;

    @media (max-width: 750px) {
        display: none;
    }
`;