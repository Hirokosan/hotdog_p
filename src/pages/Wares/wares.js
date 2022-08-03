import React, { useState } from "react";
import './wares.less';
import { Link, withRouter } from "react-router-dom";
import Headswiper from "../home/components/Headswiper/headswiper";
import Homeimg from "../../img/home.png";
import Colo from "../../img/colo.png";
import Sellout from "../../img/sell_out.png";
import Ku from '../../img/ku.png';
import { useEffect } from "react";

function Wares(props) {

    const [maskdisplay, setMaskdisplay] = useState(false)

    useEffect(() => {

        if (!window.localStorage.getItem('storge')) {
            setMaskdisplay(true)
        }
    }, [])

    function handClick() {
        props.history.push('/')
    }

    function handClickdetail() {
        props.history.push('/detail')
    }

    function handtrue() {
        setMaskdisplay(false)
        window.localStorage.setItem('storge', 'true')
    }

    function handfalse() {
        props.history.push('/')
    }

    return (
        <>
            <div className="mask" style={{ display: maskdisplay ? '' : 'none' }}></div>
            <div className="masktop" style={{ display: maskdisplay ? '' : 'none' }}>
                <div className="maskrout">
                    <div className="maskrow1">
                        <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '5px' }}>获取权限</div>
                        <div style={{ color: '#a1a1a1' }}>首次进入需要获取您的基础信息</div>
                    </div>
                    <div className="maskrow2">
                        <div onClick={() => {
                            handtrue()
                        }}>确定</div>
                        <div onClick={() => {
                            handfalse()
                        }}>取消</div>
                    </div>
                </div>
            </div>
            <div className="homelogo"
                onClick={() => {
                    handClick()
                }}>
                <img src={Homeimg} />
            </div>
            <div className="title">商品</div>
            <div className="back"></div>
            <Headswiper></Headswiper>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <div className="outgoods"
                    onClick={() => {
                        handClickdetail()
                    }}>
                    <div className="goods">
                        <div>
                            <img src={Colo} />
                        </div>
                        <div>可口可乐500ml</div>
                        <div style={{ color: '#fd883b' }}>¥5.00</div>
                    </div>
                </div>
                <div className="outgoods">
                    <div className="goods">
                        <div>
                            <img src={Colo} />
                        </div>
                        <div>可口可乐500ml</div>
                        <div style={{ color: '#fd883b' }}>¥5.00</div>
                    </div>
                </div>
                <div className="outgoods">
                    <div className="goods">
                        <div>
                            <img src={Colo} />
                        </div>
                        <div>可口可乐500ml</div>
                        <div style={{ color: '#fd883b' }}>¥5.00</div>
                    </div>
                </div>
                <div className="outgoods">
                    <div className="goods">
                        <div>
                            <img src={Colo} />
                        </div>
                        <div>可口可乐500ml</div>
                        <div style={{ color: '#fd883b' }}>¥5.00</div>
                    </div>
                </div>
                <div className="outgoods">
                    <div className="goods">
                        <div>
                            <img src={Colo} />
                        </div>
                        <div>可口可乐500ml</div>
                        <div style={{ color: '#fd883b' }}>¥5.00</div>
                    </div>
                </div>
                <div className="outgoods">
                    <div className="goods" style={{ backgroundColor: '#e1e1e1' }}>
                        <div style={{ position: 'relative' }}>
                            <img src={Colo} />
                            <div className="nogoods">
                                <img src={Sellout} />
                            </div>
                        </div>
                        <div>可口可乐500ml</div>
                        <div style={{ color: '#fd883b' }}>¥5.00</div>
                    </div>
                </div>
            </div>
            <div className="baseline">
                <img src={Ku} />
                我是有底线的哦~
            </div>
        </>
    );
}

export default withRouter(Wares);