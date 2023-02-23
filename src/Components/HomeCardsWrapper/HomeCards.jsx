import { HomeDefaultCard } from "../DefaultCard/DefaultCard"
import {
  HomeCardsInnerSlider,
  HomeCardsInnerTop,
  HomeCardsInnerTopLine,
  HomeCardsInnerTopTitle,
  HomeCardsWrapper,
  HomeLine,
} from "./HomeCards.component"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "./Slider.css"
import "swiper/css/free-mode";
import { FreeMode } from "swiper";
export function HomeCards(props) {
  const homeData = [
    {
      id: 1,
      title: "Ягненок",
      weight: "Вес: 225 г",
      body: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
      cost: "620 ₽",
    },
    {
      id: 2,
      title: "Ягненок",
      weight: "Вес: 225 г",
      body: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
      cost: "620 ₽",
    },
    {
      id: 3,
      title: "Ягненок",
      weight: "Вес: 225 г",
      body: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
      cost: "620 ₽",
    },
    {
      id: 4,
      title: "Ягненок",
      weight: "Вес: 225 г",
      body: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
      cost: "620 ₽",
    },
    {
      id: 5,
      title: "Ягненок",
      weight: "Вес: 225 г",
      body: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
      cost: "620 ₽",
    },
    {
      id: 6,
      title: "Ягненок",
      weight: "Вес: 225 г",
      body: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
      cost: "620 ₽",
    },

    {
      id: 7,
      title: "Ягненок",
      weight: "Вес: 225 г",
      body: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
      cost: "620 ₽",
    },
    {
      id: 8,
      title: "Ягненок",
      weight: "Вес: 225 г",
      body: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
      cost: "620 ₽",
    },
    {
      id: 9,
      title: "Ягненок",
      weight: "Вес: 225 г",
      body: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
      cost: "620 ₽",
    },
    {
      id: 10,
      title: "Ягненок",
      weight: "Вес: 225 г",
      body: "Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком",
      cost: "620 ₽",
    },
  ]

  return (
    <>
      <HomeLine />
      <HomeCardsWrapper>
        <HomeCardsInnerTop>
          <HomeCardsInnerTopLine />
          <HomeCardsInnerTopTitle>{props.data}</HomeCardsInnerTopTitle>
        </HomeCardsInnerTop>
        <HomeCardsInnerSlider>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            centeredSlides={true}
            className="mySwiper"
            modules={FreeMode}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
          >
            {homeData.map((item) => (
              <SwiperSlide>
                <HomeDefaultCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  wieght={item.weight}
                  body={item.body}
                  cost={item.cost}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </HomeCardsInnerSlider>
      </HomeCardsWrapper>
      {/* <HomeLine></HomeLine> */}
    </>
  )
}
