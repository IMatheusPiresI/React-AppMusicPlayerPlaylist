import styled from "styled-components";

export const Presentation = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: inherit;
  max-width: 950px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

export const Title = styled.h1 `
    font-family: "Abril Fatface", "Poppins", Arial, Helvetica, sans-serif;
    font-weight: 500;
    font-size: 4rem;
    font-style: italic;
    filter: drop-shadow(-10px 15px 2px rgba(255, 255, 255, 0.15)) blur(0.6px)
      brightness(0.95) contrast(0.9)
      drop-shadow(-15px 20px 3px rgba(255, 255, 255, 0.2));

    @media (max-width: 605px) {
      font-size: 3rem;
    }

    @media (max-width: 485px) {
      font-size: 2.2rem;
    }
`;

export const ContainerCard = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
  justify-content: center;
  margin-top: 3rem;
`;
