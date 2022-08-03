import React, { useEffect } from "react";
import './paysuccess.less';
import Leftarrow from '../../img/leftarrow.png';
import { withRouter } from "react-router";
import PayS from '../../img/pay_success.png';

function Paysuccess(props) {
    useEffect(() => {
        setTimeout(()=>{
            props.history.push('/wares')
        },3000)
    }, [])
    function handClick() {
        props.history.push('/wares')
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
            <div className="pays">
                <img src={PayS} />
                <div className="paysrow1">支付成功，请取货！</div>
                <div className="paysrow2">3s后自动返回商品列表页</div>
            </div>
        </div>
    );
}

export default withRouter(Paysuccess);