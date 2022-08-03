import React, { useEffect, useState } from "react";
import './nearby.less';
import Leftarrow from '../../img/leftarrow.png';
import { withRouter } from "react-router";
import { Map, Marker } from "react-amap";
import Maricon from '../../img/marker_icon.png';

function Nearby(props) {
    const [longitude, setLongitude] = useState(116.38)
    const [latitude, setLatitude] = useState(39.90)

    useEffect(() => {
        if (navigator.geolocation) {
            var n = navigator.geolocation.getCurrentPosition(function (res) {
                console.log(res); // 需要的坐标地址就在res中
                setLongitude(res.coords.longitude)
                setLatitude(res.coords.latitude)
            });
        }
    }, [longitude, latitude])

    function handClick() {
        props.history.push('/')
    }
    return (
        <>
            <div className="returnlogo"
                onClick={() => {
                    handClick()
                }} style={{ zIndex: '99' }}>
                <img src={Leftarrow} />
            </div>
            <div className="title1" style={{ zIndex: '99' }}>搜附近</div>
            <div className="nearbymap">
                <Map amapkey='bc6463fefaceaf0a12c7cd6d71e84fff' zoom={15}
                    center={{ longitude: longitude, latitude: latitude }}
                >
                    <Marker position={{ longitude: longitude, latitude: latitude }} />
                    <Marker position={{ longitude: 118.82, latitude: 31.93 }}
                        icon={Maricon} />
                    <Marker position={{ longitude: 118.828, latitude: 31.935 }}
                        icon={Maricon} />
                    <Marker position={{ longitude: 118.819, latitude: 31.94 }}
                        icon={Maricon} />
                </Map>
            </div>
        </>
    );
}

export default withRouter(Nearby);