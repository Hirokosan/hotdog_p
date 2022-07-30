import React, { useEffect } from 'react';
import './index.less';
import { Button } from 'antd';
import Bk3 from '../../img/bk3.png';
import Sao from '../../img/sao.png';
import Swiper1 from '../../img/swiper1.png';
import Swiper2 from '../../img/swiper2.jpg';
import Swiper3 from '../../img/swiper3.jpg';
import Arrow2 from '../../img/arrow.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";
import 'swiper/less';
import 'swiper/less/pagination';
import { Link } from 'react-router-dom';
import Arrow from './components/Arrow';
import Order from './components/Order/order';
import Wares from '../Wares/wares';
import Headswiper from './components/Headswiper/headswiper';


function Home(props) {
    const imgstyle = { backgroundImage: `url(${Bk3})`, display: '' }

    useEffect(() => {
    }, [])

    function handClick(){
        props.history.push('/wares')
    }

    return (
        <div>
            <div className="title">立可得售货机</div>
            <div className="back"></div>
            <Headswiper></Headswiper>
            <div style={imgstyle} className='outsao'>
                <div className='sao'
                    onClick={() => {
                        handClick()
                    }}>
                    <div>
                        <img src={Sao} />
                        <div>扫一扫</div>
                    </div>
                </div>
            </div>
            <div className='nearby'>
                <Link to=''>附近售货机<img src={Arrow2} /></Link>
            </div>
            <Arrow></Arrow>
            <div className='row1'>
                <div style={{ float: 'left' }}>最近订单</div>
                <Link to='' style={{ float: 'right' }}>查看历史</Link>
            </div>
            <Order></Order>
        </div>
    );
}

export default Home;