import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import {
  CheckoutTopLink,
  CheckoutTopLinkBox,
  CheckoutWrapper,
  CheckoutWrapperItem,
  CheckoutWrapperItemForm,
  CheckoutWrapperItemInput,
  CheckoutWrapperItemTitle,
  CheckoutWrapperItemTop,
  CheckoutWrapperItemTopInner,
  CheckoutWrapperItemRadioInput,
  CheckoutWrapperItemTopInnerLabel,
  CheckoutWrapperTop,
  CheckoutWrapperText,
  CheckoutWrapperItemInner,
  CheckoutWrapperItemTopInnerRight,
  CheckoutWrapperItemInnerTitle,
  CheckoutWrapperItemPersonCountWrapper,
  CheckoutWrapperItemPersonCountWrapperText,
  CheckoutWrapperItemPersonCountWrapperValue,
  CheckoutWrapperItemBottom,
  CheckoutWrapperItemBottomCheckbox,
} from "./Checkout.component";
import { useNavigate } from "react-router-dom";
import NavLinkList from "../../Components/Navbar/NavLinkList";
import { useState } from "react";
import {
  MainCartBottom,
  MainCartBottomBtn,
  MainCartBottomLeftInnerText,
  MainCartBottomLeftInnerValue,
  PagesContainerInnerTop,
  PagesContainerInnerTopLine,
  PagesContainerInnerTopTitle,
} from "../MainCartDelivery/MainCart.component";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Radio from "@mui/material/Radio";
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import DoneIcon from '@mui/icons-material/Done';
export function Checkout() {
  const navigate = useNavigate()
  let [count, setCount] = useState(0)
  localStorage.setItem("PersonCount", count)
  const [valu, setValu] = useState('female');
  const [check, setCheck] = useState(false);

  const handleChange = (event) => {
    setValu(event.target.value);
  };

  return (
    <>
      <Header />
      <NavLinkList />
      <CheckoutWrapper>
        <CheckoutWrapperTop>
          <CheckoutTopLinkBox onClick={() => navigate(-1)}>
            <i
              class="bx bx-chevron-left"
              style={{
                width: "26px",
                height: "26px",
                color: "#fff",
                fontSize: "30px",
              }}
            ></i>
            <CheckoutTopLink>?? ??????????????</CheckoutTopLink>
          </CheckoutTopLinkBox>
          <PagesContainerInnerTop>
            <PagesContainerInnerTopLine />
            <PagesContainerInnerTopTitle>
              ???????????????????? ????????????
            </PagesContainerInnerTopTitle>
          </PagesContainerInnerTop>
        </CheckoutWrapperTop>
        <CheckoutWrapperItem>
          <CheckoutWrapperItemTitle>
            1. ???????????????????? ????????????????????
          </CheckoutWrapperItemTitle>
          <CheckoutWrapperItemForm
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <CheckoutWrapperItemInput
              style={{ width: "44%" }}
              type="text"
              placeholder="??????*"
            />
            <CheckoutWrapperItemInput
              style={{ width: "44%" }}
              type="text"
              placeholder="??????????????*"
            />
          </CheckoutWrapperItemForm>
        </CheckoutWrapperItem>
        <CheckoutWrapperItem>
          <CheckoutWrapperItemTitle>2. ????????????????</CheckoutWrapperItemTitle>
          <CheckoutWrapperItemForm style={{ display: "grid", gap: "20px" }}>
            <CheckoutWrapperItemTop style={{ gap: "20px" }}>
              <CheckoutWrapperItemTopInner style={{ width: "50%" }}>
                <CheckoutWrapperItemRadioInput
                  type="radio"
                  name="inputradio"
                  id="radio1"
                  value="value1"
                />
                <CheckoutWrapperItemTopInnerLabel
                  style={{ padding: "20px 48px", width: "50%" }}
                  for="radio1"
                >
                  ????????????????
                </CheckoutWrapperItemTopInnerLabel>
                <hr
                  style={{
                    width: "0.7px",
                    height: "63px",
                    border: "none",
                    backgroundColor: "#72a479",
                  }}
                />
                <CheckoutWrapperItemRadioInput
                  type="radio"
                  name="inputradio"
                  id="radio2"
                  value="value2"
                />
                <CheckoutWrapperItemTopInnerLabel
                  style={{ padding: "20px 48px", width: "50%" }}
                  for="radio2"
                >
                  ??????????????????
                </CheckoutWrapperItemTopInnerLabel>
              </CheckoutWrapperItemTopInner>
              <CheckoutWrapperItemTopInnerRight>
                <AccessTimeIcon
                  sx={{
                    width: "16px",
                    height: "16px",
                    color: "white",
                    marginRight: "10px",
                  }}
                />
                <CheckoutWrapperText style={{ fontWeight: "500" }}>
                  ???????????????? ?????????? 1 ?????? 30 ??????????
                </CheckoutWrapperText>
              </CheckoutWrapperItemTopInnerRight>
            </CheckoutWrapperItemTop>
            <CheckoutWrapperItemInnerTitle style={{ margin: "10px 0" }}>
              ?????????? ????????????????
            </CheckoutWrapperItemInnerTitle>
            <CheckoutWrapperItemInner>
              <CheckoutWrapperItemInput
                type="text"
                placeholder="?????????????? ??????????*"
                style={{ width: "49%" }}
              />
              <CheckoutWrapperItemInput
                type="text"
                placeholder="?????????? ????????*"
                style={{ width: "19%" }}
              />
              <CheckoutWrapperItemInput
                type="text"
                placeholder="??? ????????????????/??????????"
                style={{ width: "23.6%" }}
              />
              <CheckoutWrapperItemInput
                type="text"
                placeholder="??????????????"
                style={{ width: "19%" }}
              />
              <CheckoutWrapperItemInput
                type="text"
                placeholder="????????"
                style={{ width: "19%" }}
              />
              <CheckoutWrapperItemInput
                style={{ width: "74.4%" }}
                type="text"
                placeholder="??????????????????????"
              />
            </CheckoutWrapperItemInner>
          </CheckoutWrapperItemForm>
        </CheckoutWrapperItem>
        <CheckoutWrapperItem>
          <CheckoutWrapperItemTitle>3. ????????????????</CheckoutWrapperItemTitle>
          <CheckoutWrapperItemForm
            style={{ display: "inline-grid", gap: "15px", width: "74%" }}
          >
            <CheckoutWrapperItemTopInner>
              <CheckoutWrapperItemRadioInput
                type="radio"
                name="inputradio"
                id="radio3"
                value="value3"
              />
              <CheckoutWrapperItemTopInnerLabel
                style={{ padding: "20px 32px", height: "21px", width: "23%" }}
                for="radio3"
              >
                ???????????? ????????????
              </CheckoutWrapperItemTopInnerLabel>
              <hr
                style={{
                  width: "0.7px",
                  height: "63px",
                  border: "none",
                  backgroundColor: "#72a479",
                }}
              />
              <CheckoutWrapperItemRadioInput
                type="radio"
                name="inputradio"
                id="radio4"
                value="value4"
              />
              <CheckoutWrapperItemTopInnerLabel
                style={{ padding: "20px 32px", height: "21px", width: "23%" }}
                for="radio4"
              >
                ?????????????? ????????????
              </CheckoutWrapperItemTopInnerLabel>
              <hr
                style={{
                  width: "0.7px",
                  height: "63px",
                  border: "none",
                  backgroundColor: "#72a479",
                }}
              />
              <CheckoutWrapperItemRadioInput
                type="radio"
                name="inputradio"
                id="radio5"
                value="value5"
              />
              <CheckoutWrapperItemTopInnerLabel
                style={{ padding: "20px 32px", height: "21px", width: "20%" }}
                for="radio5"
              >
                ??????????????????
              </CheckoutWrapperItemTopInnerLabel>
            </CheckoutWrapperItemTopInner>
            <CheckoutWrapperItemInput
              style={{ width: "19%" }}
              type="text"
              placeholder="?????????? ??"
            />
          </CheckoutWrapperItemForm>
        </CheckoutWrapperItem>
        <CheckoutWrapperItem>
          <CheckoutWrapperItemTitle>
            4. ?????????? ??????????????????
          </CheckoutWrapperItemTitle>
          <CheckoutWrapperItemForm
            style={{ width: "78%", display: "inline-grid", gap: "20px" }}
          >
            <CheckoutWrapperItemTop style={{ gap: "15px" }}>
              <CheckoutWrapperItemTopInner style={{ width: "73%" }}>
                <CheckoutWrapperItemRadioInput
                  type="radio"
                  name="inputradio"
                  id="radio6"
                  value="value6"
                />
                <CheckoutWrapperItemTopInnerLabel
                  style={{ padding: "20px 17px", width: "43%" }}
                  for="radio6"
                >
                  ?? ?????????????????? ??????????
                </CheckoutWrapperItemTopInnerLabel>
                <hr
                  style={{
                    width: "0.7px",
                    height: "63px",
                    border: "none",
                    backgroundColor: "#72a479",
                  }}
                />
                <CheckoutWrapperItemRadioInput
                  type="radio"
                  name="inputradio"
                  id="radio7"
                  value="value7"
                />
                <CheckoutWrapperItemTopInnerLabel
                  style={{ padding: "20px 44px", width: "30%" }}
                  for="radio7"
                >
                  ???? ??????????????y
                </CheckoutWrapperItemTopInnerLabel>
              </CheckoutWrapperItemTopInner>
              <CheckoutWrapperItemInput
                type="text"
                placeholder="?????????????? ??????????"
                style={{ width: "27%" }}
              />
            </CheckoutWrapperItemTop>
            <CheckoutWrapperItemPersonCountWrapper style={{ width: "36%" }}>
              <CheckoutWrapperItemPersonCountWrapperText
                style={{ marginRight: "auto" }}
              >
                ??????-???? ????????????
              </CheckoutWrapperItemPersonCountWrapperText>
              <i
                class="bx bx-minus"
                onClick={() => setCount((count -= 1))}
                style={{ color: "white", fontSize: "20px", cursor: " pointer" }}
              ></i>
              <CheckoutWrapperItemPersonCountWrapperValue
                style={{ margin: "0 12px" }}
              >
                {count}
              </CheckoutWrapperItemPersonCountWrapperValue>
              <i
                class="bx bx-plus"
                onClick={() => setCount((count += 1))}
                style={{ color: "white", fontSize: "20px", cursor: "pointer" }}
              ></i>
            </CheckoutWrapperItemPersonCountWrapper>
            <CheckoutWrapperItemBottom className="checkout_item_bottom">
              <FormControl className="form_control">
                <FormLabel id="demo-controlled-radio-buttons-group" className="form_radio_label">
                ???????????? ???? ?????????????????
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={valu}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="doNotCallBack"
                    control={<Radio color='success' className="radio_color"/>}
                    label="???? ??????????????????????????"
                    className="radio_label"
                  />
                  <FormControlLabel
                    value="operatorCall"
                    control={<Radio color='success' className="radio_color"/>}
                    className="radio_label"
                    label="?????????????????????? ???????????? ??????????????????"
                    style={{fontSize: '10px'}}
                  />
                </RadioGroup>
              </FormControl>
            </CheckoutWrapperItemBottom>
          </CheckoutWrapperItemForm>
        </CheckoutWrapperItem>
        <MainCartBottom style={{ padding: "17px 20px 17px 30px" }}>
          <CheckoutWrapperItemBottomCheckbox className="checkout_item_checkbox" onClick={() => setCheck(!check)} >
            {check ? (
               <DoneIcon style={{color: '#72A479', height: '22px'}} />
            ): ''
          }
          </CheckoutWrapperItemBottomCheckbox>
          <MainCartBottomLeftInnerText
            style={{ fontSize: "13px", lineHeight: "15px" }}
          >
            ?? ???????????????? ???? ?????????????????? ???????? ????????. ???????????? ?? ???????????????????????? ??
          </MainCartBottomLeftInnerText>
          <MainCartBottomLeftInnerValue>??????????????????</MainCartBottomLeftInnerValue>
          <MainCartBottomBtn>
            ???????????????? ??????????
          </MainCartBottomBtn>
        </MainCartBottom>
      </CheckoutWrapper>
      <Footer />
    </>
  )
}
