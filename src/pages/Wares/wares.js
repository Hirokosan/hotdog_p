import React from "react";
import './wares.less';
import { Link, withRouter } from "react-router-dom";
import Headswiper from "../home/components/Headswiper/headswiper";
import Homeimg from "../../img/home.png";
import Colo from "../../img/colo.png";
import Sellout from "../../img/sell_out.png";
import Ku from '../../img/ku.png';

function Wares(props) {

    function handClick() {
        props.history.push('/')
    }

    return (
        <>
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