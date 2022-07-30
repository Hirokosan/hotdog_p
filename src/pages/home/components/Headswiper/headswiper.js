import React from "react";
import './headswiper.less';
import Swiper1 from '../../../../img/swiper1.png';
import Swiper2 from '../../../../img/swiper2.jpg';
import Swiper3 from '../../../../img/swiper3.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";
import 'swiper/less';
import 'swiper/less/pagination';

function Headswiper() {
    return (
        <>
            <Swiper className='mSwiper'
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}>
                <SwiperSlide><img src={Swiper1} /></SwiperSlide>
                <SwiperSlide><img src={Swiper2} /></SwiperSlide>
                <SwiperSlide><img src={Swiper3} /></SwiperSlide>
            </Swiper>
        </>
    );
}

export default Headswiper;