import styled from "styled-components";

export const ContactWrapper = styled.div`
    height: 75vh;
    display: flex;
    align-items: bottom;
    position: relative;
`
export const MapBox = styled.div`
    width: 100%;
    height: 100%;
`
export const ContactBox = styled.div`
    width: 30%;
    padding: 24px 42px 24px 52px;
    position: absolute;
    left: 100px;
    bottom: 40px;
    background: #2E2B2C;
    box-shadow: 0px 0px 70px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
`
export const ContactBoxTitle = styled.h2`
    margin-bottom: 26px;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
    text-align: start;
`
export const ContactBoxLine = styled.hr`
    width: 100% !important;
    border: 1px solid;
    margin-bottom: 10px;
    // border-image-source: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.15) 48.33%, rgba(255, 255, 255, 0) 100.87%);
`
export const ContactBoxCard = styled.div`
    display: flex;
    align-items: top;
    margin: 20px 0 20px 0;
`
export const ContactBoxCardInner = styled.div`
    margin-left: 15px;
`
export const ContactBoxCardInnerSubtitle = styled.p`
    margin-bottom: 5px;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #CFCFCF;
`
export const ContactBoxCardInnerText = styled.p`
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #fff6f6;
`
export const ContactBoxBtn = styled.button`
    padding: 22px 30px;
    font-family: 'Proxima Nova';
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;
    cursor: pointer;
    border: none;
    outline: none;
    color: #FFFFFF;
    background: linear-gradient(114.93deg, #618967 5.11%, #72A479 94%);
    border-radius: 10px;
`
export const ContactNumberBox = styled.div`
    display: flex;
    align-items: baseline;
    margin-bottom: 30px;
    margin-top: 20px;
`
export const ContactNumberBoxInner = styled.div`
    margin-left: 24px;
`
export const ContactNumber = styled.span`
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 28px;
    color: #FFFFFF;
`
export const ContactNumberText =styled.p`
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    text-align: right;
    color: #CFCFCF;
`
export const Sogials = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const SogialsTitle = styled.h5`
    margin-right: 26px;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
`
export const SogialsInner = styled.div`
    display: flex;
    align-items: center;
    gap: 11px;
`