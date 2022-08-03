import React from "react";
import './history.less';
import Leftarrow from '../../img/leftarrow.png';
import { withRouter } from "react-router";
import Order from "../home/components/Order/order";
import Calendar from '../../img/calendar.png';
import Arrow from '../../img/arrow.png';

function History(props) {
    
    function handClick() {
        props.history.push('/')
    }
    return (
        <div className="history">
            <div className="returnlogo"
                onClick={() => {
                    handClick()
                }}>
                <img src={Leftarrow} />
            </div>
            <div className="title1">订单管理</div>
            <div className="date">
                <img src={Calendar} />
                <div>2020.06.09~2020.07.09</div>
                <img src={Arrow} />
            </div>
            <Order></Order>
        </div>
    );
}

export default withRouter(History);