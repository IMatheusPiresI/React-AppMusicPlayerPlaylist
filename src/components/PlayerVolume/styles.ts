import styled from 'styled-components';

type currentVolume = {
    currentVolume: number;
}

export const ContainerVolume = styled.div`
display: flex;
align-items: center;

& svg {
    margin-right: .2rem;
}
`;

export const Volume = styled.input<currentVolume>`
 width: 100%;
-webkit-appearance: none;
height: 2px;
border-radius: 5px;
filter: drop-shadow(0 0 4px  #fff);
background-image: ${({currentVolume}) => currentVolume && 'linear-gradient(to right, #EED8AE 0%, #FFE7BA ' + currentVolume + '%, #E8E8E8 ' + currentVolume + '%, #E8E8E8 100%)'};
background-repeat: no-repeat;

&::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: #FFE7BA;
    cursor: ew-resize;
    box-shadow: 0 0 2px 0 #555;
    transition: background .3s ease-in-out;

}
`;