import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: inherit;
    display: flex;
    gap: 30px;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;

    & svg {
        font-size: 325px;
        color: rgba(255, 255 ,255, .6);
        filter: drop-shadow(-10px 15px 2px rgba(255, 255, 255, 0.15)) blur(0.6px)
      brightness(0.95) contrast(0.9)
      drop-shadow(-15px 20px 3px rgba(255, 255, 255, 0.2));
    }

    & h2 {
        font-size: 20px;
        font-weight: 500;
        width: 400px;
        font-style: oblique;
        color: rgba(255, 255, 255, .85);
        
    }

    @media (max-width: 765px) {
        & svg {
            font-size: 225px;          
        }

        & h2 {
            font-size: 19px;
            width: 320px;
        }
    }
`;