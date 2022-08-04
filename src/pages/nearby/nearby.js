import React, { useEffect, useState } from "react";
import './nearby.less';
import Leftarrow from '../../img/leftarrow.png';
import { withRouter } from "react-router";
import { Map, Marker, Markers } from "react-amap";
import Maricon from '../../img/marker_icon.png';
import '../../api/api';
import axios from "axios";
import Ding from '../../img/dingwei1.png';
import Mapgo from '../../img/map_go.png';

function Nearby(props) {
    const [longitude, setLongitude] = useState(116.3975)
    const [latitude, setLatitude] = useState(39.9088)
    const [markers, setMarkers] = useState([])
    const renderMarkerLayout = (extData) => {      //自定义地标图案
        return (
            <img src={Maricon} />
        )
    }
    const markList = [
        { position: { longitude: 116, latitude: 39, }, },
        { position: { longitude: 116, latitude: 38, }, },
        { position: { longitude: 117, latitude: 39, }, }
    ]

    useEffect(() => {
        if (navigator.geolocation) {
            var n = navigator.geolocation.getCurrentPosition(function (res) {
                console.log(res); // 需要的坐标地址就在res中
                setLongitude(res.coords.longitude)
                setLatitude(res.coords.latitude)
            });
        }

        axios({
            method: 'get',
            url: '/api/api'
        }).then((res) => {
            console.log(res.data.data)
            let markers = res.data.data
            let p1 = [longitude, latitude]
            for (let i = 0; i < markers.length; i++) {
                markers[i].p2 = [markers[i].position.longitude, markers[i].position.latitude]
                markers[i].dis = window.AMap.GeometryUtil.distance(p1, markers[i].p2)
                markers[i].dis = markers[i].dis / 1000
                markers[i].dis = markers[i].dis.toFixed(1)
                console.log(markers)
            }
            setMarkers(markers)
        })

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
                <Map amapkey='bc6463fefaceaf0a12c7cd6d71e84fff' zoom={16}
                    center={{ longitude: longitude, latitude: latitude }}
                >
                    <Marker position={{ longitude: longitude, latitude: latitude }} />
                    <Markers
                        markers={markers}
                        render={renderMarkerLayout}
                    />
                </Map>
            </div>
            <div className="bottomgo">
                {markers.map((item, index) => {
                    return (
                        <div className="bogorow1" key={index}>
                            <div className="bogorow2">
                                <div className="bogorow3">
                                    <div className="bogorow5">传智播客办公区</div>
                                    <img src={Ding} />
                                    <div style={{ fontSize: '12px' }}>{item.dis}km</div>
                                </div>
                                <div className="bogorow6">建材城西路金燕龙写字楼四层</div>
                            </div>
                            <div className='bogorow4'>
                                <img src={Mapgo} />
                                <di>去这里</di>
                            </div>
                        </div>
                    )
                })}

            </div>
        </>
    );
}

export default withRouter(Nearby);