import React from "react";
import './detail.less';
import Leftarrow from '../../img/leftarrow.png';
import Colo from '../../img/colo.png';
import Wechat from '../../img/wechat_pay.png';
import Selected from "../../img/selected.png";

function Detail(props) {

    function handClick() {
        props.history.push('/wares')
    }
    function handGopay() {
        props.history.push('/paysuccess')
    }

    return (
        <div className="detail">
            
            <div className="returnlogo"
                onClick={() => {
                    handClick()
                }}>
                <img src={Leftarrow} />
            </div>
            <div className="title1">商品详情</div>
            <div className="detail1">
                <img src={Colo} />
                <div style={{ marginLeft: '15px', width: '100%' }}>
                    <div className="detailrow1">
                        <div>可口可乐</div>
                        <div style={{ marginLeft: '20px' }}>500ml</div>
                    </div>
                    <div className="detailrow2">
                        <div className="price">¥5.00</div>
                        <div className="number">数量:1</div>
                    </div>
                </div>
            </div>
            <div className="information">
                <div className="inrow1">
                    <div>设备编号</div>
                    <div>ZX20190403003</div>
                </div>
            </div>
            <div className="information">
                <div className="inrow1">
                    <div>设备地址</div>
                    <div>金燕龙办公楼4楼</div>
                </div>
            </div>
            <div className="information">
                <div className="inrow2">
                    <div>
                        <img src={Wechat} style={{ marginRight: "10px" }} />微信支付
                    </div>
                    <div>
                        <img src={Selected} />
                    </div>
                </div>
            </div>
            <div className="gopay">
                <div className="payrow1">
                    <div>实付余额:</div>
                    <div style={{ marginLeft: '15px', fontSize: '25px', color: '#fd883b' }}>¥5.00</div>
                </div>
                <div className="payrow2"
                    onClick={() => {
                        handGopay()
                    }}>去支付</div>
            </div>
        </div>
    );
}

export default Detail;