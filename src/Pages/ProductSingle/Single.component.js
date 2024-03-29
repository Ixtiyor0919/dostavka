import styled from "styled-components";
import { Button, Fab } from "@mui/material";
import { matchMD, matchSM } from "../../Themes/Breakpoints";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

export const SinglePagesLinkBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    @media (max-width: ${matchSM}px) {
        display: none;
    }
`
export const SingleProduct = styled.div`
    padding: 40px 150px 50px 150px; 
    margin: 0 auto;
    @media (max-width: ${matchMD}px) {
        padding: 30px 80px 40px 80px; 
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
export const SigleDataBottom = styled.div`
    display: grid;
    gap: 25px;
    @media (max-width: ${matchMD}px) {
        display: grid;
        gap: 20px;
    }
    @media (max-width: ${matchSM}px) {
        display: grid;
        gap: 15px;
    }
`
export const SingleProductImg = styled.img`
    width: 50%;
    height: 100%;
    @media (max-width: ${matchSM}px) {
        width: 100%;
        height: 50%;
    }
`
export const SingleProductData = styled.div`
    width: 50%;
    padding: 50px 50px 20px 50px;
    position: relative;
    display: grid;
    align-content: space-between;
    background: linear-gradient(90deg, #494544 0%, #504B4A 100%);
    @media (max-width: ${matchMD}px) {
        padding: 40px 40px 15px 40px;
    }
    @media (max-width: ${matchSM}px) {
        width: 100%;
        height: 50%;
        padding: 20px;
        text-align: center;
    }
`
export const SingleProductTitle = styled.h3`
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    color: #FFFFFF;
    @media (max-width: ${matchMD}px) {
        font-size: 22px;
        line-height: 27px;
    }
    @media (max-width: ${matchSM}px) {
        font-size: 20px;
        line-height: 24px;
    }
`
export const SingleProductDescription = styled.p`
    width: 95%;
    font-family: 'Gilroy';
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #CFCFCF;
    @media (max-width: ${matchMD}px) {
        font-size: 13px;
        line-height: 15px;
    }
    @media (max-width: ${matchSM}px) {
        font-size: 12px;
        line-height: 14px;
    }
`
export const SingleProductWeightMain = styled.p`
    font-family: 'Gilroy';
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
`
export const SingleProductCartBox = styled.div`
    display: flex;
    align-items: center;
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
        text-align: start;
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
    bottom: 39px;
    @media (max-width: ${matchMD}px) {
        bottom: 41px;
    }
    @media (max-width: ${matchSM}px) {
        bottom: 39px;
    }
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
    top: 20px;
    left: 25px;
    color: #969696 !important;
    display: none !important;
    z-index: 10 !important;
    @media (max-width: ${matchSM}px) {
        display: flex !important;
        align-items: center;
    }
`
export const KeyboardLeftIcon = styled(KeyboardArrowLeftIcon) `
    font-size: 1.8rem;
    color: #6F9F76;
`