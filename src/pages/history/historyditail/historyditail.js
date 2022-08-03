import React, { useState } from "react";
import './historyditail.less';
import Leftarrow from '../../../img/leftarrow.png';
import { withRouter } from "react-router";
import Weixin from '../../../img/wechat_pay.png';
import Tel from '../../../img/tel.png';

function Historydetail(props) {
    const [paystatus, setPaystatus] = useState(1)

    function goBackPage() {
        window.history.back(-1)
    }
    return (
        <div className="history">
            <div className="returnlogo"
                onClick={() => {
                    goBackPage()
                }}>
                <img src={Leftarrow} />
            </div>
            <div className="title1">订单管理</div>
            <div className="order">
                <div className="orow1">
                    <div style={{ float: 'left' }}>金燕龙办公楼4层4001</div>
                    <div style={{ float: 'right', color: paystatus === 1 ? '#4e82ff' : (paystatus === 2 ? '#9a9999' : 'red') }}>已完成</div>
                </div>
                <div className="orow2">
                    <div className="orow21">
                        <div>订单号</div>
                        <div>订单商品</div>
                        <div>订单金额</div>
                    </div>
                    <div>
                        <div>20190924001234</div>
                        <div>可口可乐500ml</div>
                        <div style={{ fontWeight: 'bold', color: '#ff6c01' }}>¥ 4.00</div>
                    </div>
                </div>
                <div className="orow3" style={{ display: paystatus === 3 ? '' : 'none' }}>
                    <div style={{ float: 'left' }}>请尽快完成支付</div>
                    <div style={{ float: 'left', paddingLeft: '5px' }}>0:59</div>
                </div>
            </div>
            <div className="hrow1">订单信息</div>
            <div className="information">
                <div className="inrow1">
                    <div>设备号</div>
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
                <div className={paystatus === 3 ? "inrow2" : "inrow1"}>
                    <div>订单时间</div>
                    <div>2019-09-08 21:07:45</div>
                </div>
            </div>
            <div className="information">
                <div className="inrow1" style={{ display: paystatus === 1 ? '' : 'none' }}>
                    <div>交易单号</div>
                    <div>1231410230128301802</div>
                </div>
            </div>
            <div className="information">
                <div className="inrow2" style={{ display: paystatus === 1 ? '' : 'none' }}>
                    <div>支付方式</div>
                    <div><img src={Weixin} />微信支付</div>
                </div>
            </div>
            <div className="information" style={{ display: paystatus === 2 ? '' : 'none' }}>
                <div className="inrow2">
                    <div>取消原因</div>
                    <div>支付超时</div>
                </div>
            </div>
            <div className="paybutton" style={{ display: paystatus === 3 ? '' : 'none' }}>
                <div>立即支付</div>
            </div>
            <div className="refund">
                <div className="refrow1">
                    <div>申请退款,请拨打客服电话</div>
                    <div><img src={Tel} />400-1234556</div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Historydetail);