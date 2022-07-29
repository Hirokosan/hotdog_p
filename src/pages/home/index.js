import React, { useEffect } from 'react';
import './index.less';
import { Button } from 'antd';
import Bk2 from '../../img/bk2.png';
import Bk3 from '../../img/bk3.png';
import Sao from '../../img/sao.png';
import Swiper1 from '../../img/swiper1.png';
import Swiper2 from '../../img/swiper2.jpg';
import Swiper3 from '../../img/swiper3.jpg';
import Arrow from '../../img/arrow.png';
import Position from '../../img/dingwei.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";
import 'swiper/less';
import 'swiper/less/pagination';
import { Link } from 'react-router-dom';


function Home(props) {
    const imgstyle = { backgroundImage: `url(${Bk3})` }
    const swimgstyle = { backgroundImage: `url(${Bk2})` }




    useEffect(() => {
        // let mySwiper = new Swiper('.swiper', {
        //     pagination: {
        //         el: '.swiper-pagination',
        //         type: 'bullets',
        //     }
        // })
    }, [])

    return (
        <>
            <div className="title">立可得售货机</div>
            <div className="back"></div>
            <Swiper className='mySwiper'
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
            <div style={imgstyle} className='outsao'>
                <div className='sao'>
                    <div>
                        <img src={Sao} />
                        <div>扫一扫</div>
                    </div>
                </div>
            </div>
            <div className='nearby'>
                <Link to=''>附近售货机<img src={Arrow} /></Link>
            </div>
            <Swiper style={swimgstyle}>
                <SwiperSlide><div>
                    <div></div>
                    <div>
                        <img src={Position}/>
                        <div>去这里</div>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide>2</SwiperSlide>
                <SwiperSlide>3</SwiperSlide>
            </Swiper>
        </>
    );
}

export default Home;