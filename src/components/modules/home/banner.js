import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import Divider from '@mui/material/Divider';

function Banner() {
  const sliderList = [
    'https://media.ouedkniss.com/medias/images/kRQjwN/jVW7ggXNL8MsEbPXysVS00EWD9A9YDL2VZBBAnj7.jpg',
    'https://media.ouedkniss.com/medias/images/kRQjwN/WYtjDGXq12F1QeQ2znkgfBBzZ7OCmMNjnjF7WrXN.jpg',
    'https://media.ouedkniss.com/medias/images/L961AA/01Jc2FWy6eFg3pk35r20FwvWftmuxzoT16S8q9I3.png',
    'https://media.ouedkniss.com/medias/images/kRQjwN/HCSD1hLVlqIPDTcMWPkiSfqZjeaq7mrMfaGsZ6dy.png',
    'https://media.ouedkniss.com/medias/images/k5/6Zl71fpxQNNBw67qBSFM78O6BjmP6GoREheq71qa.png'
  ]

  return (
    <div className="banner-container">
      <div className="container pt-8">
        <div className="banner-ads-container">
          <div className="banner-slider h-100 mr-16">
            <Swiper
              spaceBetween={30}
              effect={"fade"}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[EffectFade, Autoplay]}
              className="banner-swiper h-100 cursor-pointer"
            >
              {sliderList.map((slider) =>
                <SwiperSlide key={slider.toString()}>
                  <img src={slider.toString()} className="w-100 h-100" alt="slider img" />
                </SwiperSlide>
              )}
            </Swiper>
          </div>
          <div className="banner-static h-100 cursor-pointer"></div>
        </div>

        <Divider />
      </div>
    </div>
  )
}

export default Banner
