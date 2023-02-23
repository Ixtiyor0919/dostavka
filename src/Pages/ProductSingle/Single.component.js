import { Button, Fab } from "@mui/material";
import styled from "styled-components";
import { matchMD, matchSM } from "../../Themes/Breakpoints";

export const SinglePagesLinkBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    @media (max-width: ${matchSM}px) {
        display: none;
    }
`
export const SinglePagesLink = styled.p`
    margin-left: 10px;
    font-family: 'Gilroy';
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
`
export const SingleProduct = styled.div`
    width: 100%;
    padding: 40px 100px 50px 100px; 
    margin: 0 auto;
    @media (max-width: ${matchMD}px) {
        padding: 25px 50px 25px 50px; 
    }
    @media (max-width: ${matchSM}px) {
        padding: 0 0 50px 0;
    }
`
export const SingleProductMain = styled.div`
    display: flex;
    height: 400px;
    border-radius: 15px;
    overflow: hidden;
    position: relative;
    @media (max-width: ${matchSM}px) {
        flex-direction: column;
        height: 560px;
        border-radius: unset;
    }
`
export const SingleProductImg = styled.img`
    width: 50%;
    height: 416px;
    @media (max-width: ${matchSM}px) {
        width: 100%;
        height: 50%;
    }
`
export const SingleProductData = styled.div`
    padding: 40px 0 25px 50px;
    position: relative;
    background: linear-gradient(90deg, #494544 0%, #504B4A 100%);
    @media (max-width: ${matchMD}px) {
        padding: 20px 25px; 
    }
    @media (max-width: ${matchSM}px) {
        height: 50%;
        padding: 20px;
        text-align: center;
        display: grid;
    }
`
export const SingleProductTitle = styled.h3`
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    color: #FFFFFF;
`
export const SingleProductDescription = styled.p`
    width: 95%;
    font-family: 'Gilroy';
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #CFCFCF;
`
export const SingleProductWeightMain = styled.p`
    font-family: 'Gilroy';
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    margin-top: 16%;
    margin-bottom: 22px;
    @media (max-width: ${matchSM}px) {
        margin-top: 3%;
    }
`
export const SingleProductCartBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    @media (max-width: ${matchSM}px) {
        justify-content: center;
    }
`
export const SingleProductCartBtn = styled(Button)`
    font-family: 'Gilroy' !important;
    font-weight: 600 !important;
    font-size: 14px !important;
    line-height: 17px !important;
    color: #FFFFFF !important;
    padding: 16px 16px 16px 20px !important;
    margin-right: 25px !important;
    display: inline-flex !important;
    align-items: center !important;
    cursor: pointer !important;
    background: linear-gradient(114.93deg, #618967 5.11%, #72A479 94%);
    border-radius: 10px !important;
`
export const SingleProductCartLine = styled.hr`
    width: 32px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    transform: rotate(90deg);
`
export const SingleProductCount = styled.p`
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    color: #FFFFFF;
    display: inline-block;
`
export const SingleProductInnerNamesBox = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    margin-top: auto;
    @media (max-width: ${matchMD}px) {
        gap: 30px;
    }
    @media (max-width: ${matchSM}px) {
        justify-content: center;
    }
`
export const SingleProductContentNames = styled.p`
    font-family: 'Gilroy';
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
    margin-bottom: 10px;
`
export const SingleProductInnerLine = styled.hr`
    border: 1px solid rgba(255, 255, 255, 0.1);
    position: absolute;
    right: 0;
    left: 0;
    bottom: 13.5%;
`
export const SingleProductInnerValuesBox = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`
export const SingleProductContentValues = styled.p`
    font-family: 'Gilroy';
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
`
export const SingleFab = styled(Fab)`
    position: absolute !important;
    top: 10px;
    left: 25px;
    color: #6F9F76 !important;
    display: none;
    @media (max-width: ${matchSM}px) {
        display: block;
    }
`