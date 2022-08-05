import styled from "styled-components";


export const Card = styled.div`
    text-align: center;
    width: 325px;
    height: 450px;
    border: 1px solid rgba(255,255,255, .5);
    box-shadow: 0px 0px 20px 1px rgba(255,255,255, .3), inset 0px 0px 55px 0px rgba(255,255,255, .20);
    border-radius: 20px;
    padding: 1.5rem;
    background-color: rgba(0,0,0, .2);
    transform: scale(0.95);
    transition: transform .2s linear;
    cursor: pointer;

    & img {
        width: 100%;
    }

    & h2 {
        margin-bottom: .65rem;
        font-weight: 500;
        letter-spacing: .2rem;
    }

    & div{
        border-radius: 20px;
        overflow: hidden;
    }

    & p {
        margin-top: .5rem;
        text-align: justify;
        font-weight: normal;
        text-shadow: 0px 1px #000;
        font-size: 17px;
        letter-spacing: .08rem;
    }

    &:hover {
        transform: scale(1);
    }
`;