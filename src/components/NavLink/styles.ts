import styled from 'styled-components'

type LinkNavProps = {
    active: boolean;
}

export const LinkNav = styled.li<LinkNavProps>`
    display: flex;
    align-items: center;
    height: 100%;
    position: relative;

    ${({active}) => active && `&::after{
        content: '';
        position: absolute;
        height: 4px;
        bottom: 0;
        left: 0;
        background: #FFF5;
        width: 100%;
        border-radius: 15px 15px 0px 0px;
    }`}

    


    a{
        color: #FFF;
        width: 100%;
        padding: 0 1rem;
        display: flex;
        align-items: center;
        height: 100%;
        margin: auto 0;
        font-size: 19px;

        &:hover {
            background: rgba(0,0,0, .20);
        }

        @media (max-width: 750px) {
            font-size: 15px;
            padding: 0 .5rem;
        }
    }
`;