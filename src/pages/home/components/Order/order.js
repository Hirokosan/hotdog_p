import React from "react";
import './order.less';
import Noorder from '../../../../img/noorder.png';
import { Link } from "react-router-dom";

function Order() {
    return (
        <>
            <div className="order">
                <div className="orow1">
                    <div style={{ float: 'left' }}>金燕龙办公楼4层4001</div>
                    <div style={{ float: 'right', color: 'red' }}>待支付</div>
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
                        <div style={{ fontWeight: 'bold' }}>¥4.00</div>
                    </div>
                </div>
                <div className="orow3">
                    <div style={{ float: 'left' }}>请尽快完成支付</div>
                    <div style={{ float: 'left', paddingLeft: '5px' }}>0:59</div>
                    <Link to='' className="pay">支付</Link>
                </div>
            </div>
            <div className="noorder">
                <div>
                    <img src={Noorder} />
                </div>
                <div>现在没有订单，赶紧去下单哦~</div>
            </div>
        </>
    );
}

export default Order;