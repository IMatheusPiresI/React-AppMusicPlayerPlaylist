import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 60px;
    background-color: rgba(255, 255, 255, .05);
    display: flex;
    align-items: center;
    padding: 0 5.5rem;

    @media (max-width: 750px) {
        padding: 0 2.5rem;
    }
`;

export const NavLinks = styled.nav`
    width: auto;
    display: flex;
    margin-left: auto;
    height: 100%;
    ul {
        display: flex;
        gap: 45px;

        @media (max-width: 750px) {
            gap: 25px;
        }
    }

`;