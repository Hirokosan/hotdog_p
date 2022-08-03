import React from "react";
import './nearby.less';
import Leftarrow from '../../img/leftarrow.png';

function Nearby(props) {

    function handClick() {
        props.history.push('/')
    }
    return (
        <>
            <div className="returnlogo"
                onClick={() => {
                    handClick()
                }}>
                <img src={Leftarrow} />
            </div>
            <div className="title1">搜附近</div>
        </>
    );
}

export default Nearby;

