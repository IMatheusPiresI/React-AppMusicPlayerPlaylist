import styled from "styled-components";

export const BoxTime = styled.div`
        position: absolute;
        top: -12px;
        left: 0;
        border-radius: 100%;
        display: flex;
        justify-content: space-between;
        margin-left: auto;
        width: 100%;
        padding: 0 1rem;

        & p {
            width: 60px;
            text-align: center;
            text-shadow: -1px -1px #000;
        }


        & div {
            width: 100%;
            margin: 0 .5rem;
            position: relative;
            bottom: 5px;
            & input[type="range"] {
                width: 100%;
                -webkit-appearance: none;
                height: 2px;
                border-radius: 5px;
                filter: drop-shadow(0 0 4px  #fff);
                background-repeat: no-repeat;
            }


            & input::-webkit-slider-thumb {
                -webkit-appearance: none;
                height: 15px;
                width: 15px;
                border-radius: 50%;
                background: #FFE7BA;
                cursor: ew-resize;
                box-shadow: 0 0 2px 0 #555;
                transition: background .3s ease-in-out;

            }

            & input::-moz-range-thumb {
                height: 20px;
                width: 20px;
                border-radius: 50%;
                background: #000;
                cursor: ew-resize;
                box-shadow: 0 0 2px 0 #555;
                transition: background .3s ease-in-out;
            }
        }
`;
