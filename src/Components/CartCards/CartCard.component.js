import { Dialog } from "@mui/material";
import styled from "styled-components";
import { matchMD, matchSM } from "../../Themes/Breakpoints";

export const CartCardWrapperInner = styled.div `
    padding: 20px 40px 20px 20px;
    gap: 40px;
    display: flex; 
    background: linear-gradient(90deg, #494544 100%, #504B4A 0%);
    align-items: center;
    justify-content: space-between;   
    user-select: none;
    @media (max-width: ${matchSM}px) {
        padding: 20px;
        gap: 20px;
        justify-content: unset;
    }
`
export const CartCardWrapperInnerImg = styled.img `
    width: 120px;
    height: 90px;
    border-radius: 5px;
    @media (max-width: ${matchSM}px) {
        width: 110px;
        height: 80px;
        border-radius: 10px;
    }
`
export const CartCardDescriptionBox = styled.div `
    width: 30%;
    @media (max-width: ${matchMD}px) {
        width: 40%;
    }
    @media (max-width: ${matchSM}px) {
        width: unset;
    }
`
export const CartCardDescriptionBoxTitle = styled.h3 `
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
    @media (max-width: ${matchMD}px) {
        font-size: 17px;
        line-height: 21px;
    }
    @media (max-width: ${matchSM}px) {
        font-size: 16px;
        line-height: 19px;
    }
`
export const CartCardDescriptionBoxText = styled.div `
    font-family: 'Gilroy';
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #A6A7AB;
`
export const CartCardValueBox = styled.div `
    display: flex; 
    align-items: center;
    gap: 20px;
    @media (max-width: ${matchSM}px) {
        gap: 10px;
    }
`
export const CartCardValue = styled.span `
    font-family: 'Greenwich';
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    color: #FFFFFF;
    @media (max-width: ${matchSM}px) {
        font-size: 12px;
        line-height: 15px;
    }
`
export const CartButtonsBox = styled.div `
    width: 50%;
    display: flex; 
    align-items: center;
    justify-content: space-between;
    @media (max-width: ${matchMD}px) {
        gap: 20px;
    }
    @media (max-width: ${matchSM}px) {
        width: unset;
        align-items: end;
        gap: 10px;
    }
`
export const CartCarCostBox = styled.div `
    width: 50%;
    display: flex; 
    align-items: center;
    justify-content: space-between;
    @media (max-width: ${matchSM}px) {
        width: unset;
        gap: 10px;
    }
`
export const BoxData = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    @media (max-width: ${matchSM}px) {
        gap: 10px;
        flex-direction: column;
        align-self: stretch;
    }
`
