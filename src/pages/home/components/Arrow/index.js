import React from "react";
import Arrow1 from '../../../../img/dingwei1.png';
import Position from '../../../../img/dingwei.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import Bk2 from '../../../../img/map.png';
import './style.less';

function Arrow() {
    const swimgstyle = { backgroundImage: `url(${Bk2})` }

    return (
        <div>
            <Swiper style={swimgstyle}>
                <SwiperSlide>
                    <div className='location'>
                        <div className='locationleft'>
                            <div className="lleft">
                                <div>传智播客办公区</div>
                                <div className="lleft2">|</div>
                                <img src={Arrow1} />
                                <div className="lleft3">2.3km</div>
                            </div>
                            <div className="lleft1">
                                <div>建材城西路金燕龙写字楼四层</div>
                                <div>设备编号：ZX20190403003</div>
                            </div>
                        </div>
                        <div className='locationright'>
                            <img src={Position} />
                            <div>去这里</div>
                        </div>
                    </div></SwiperSlide>
                <SwiperSlide>
                    <div className='location'>
                        <div className='locationleft'>
                            <div className="lleft">
                                <div>传智播客办公区</div>
                                <div className="lleft2">|</div>
                                <img src={Arrow1} />
                                <div className="lleft3">2.3km</div>
                            </div>
                            <div className="lleft1">
                                <div>建材城西路金燕龙写字楼四层</div>
                                <div>设备编号：ZX20190403003</div>
                            </div>
                        </div>
                        <div className='locationright'>
                            <img src={Position} />
                            <div>去这里</div>
                        </div>
                    </div></SwiperSlide>
                <SwiperSlide>
                    <div className='location'>
                        <div className='locationleft'>
                            <div className="lleft">
                                <div>传智播客办公区</div>
                                <div className="lleft2">|</div>
                                <img src={Arrow1} />
                                <div className="lleft3">2.3km</div>
                            </div>
                            <div className="lleft1">
                                <div>建材城西路金燕龙写字楼四层</div>
                                <div>设备编号：ZX20190403003</div>
                            </div>
                        </div>
                        <div className='locationright'>
                            <img src={Position} />
                            <div>去这里</div>
                        </div>
                    </div></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Arrow;