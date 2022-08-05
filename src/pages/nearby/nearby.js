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
    const [bdisplay, setBdisplay] = useState(1)      //底部显示
    const [dis, setDis] = useState()                 //距离
    const [markers, setMarkers] = useState([])
    const [longitude1, setLongitude1] = useState()    //目的地 经
    const [latitude1, setLatitude1] = useState()      //目的地 纬
    const renderMarkerLayout = (extData) => {      //自定义地标图案
        return (
            <img src={Maricon} />
        )
    }

    const markersEvents = {                      //图标的点击事件
        click(e, marker) {
            const extData = marker.getExtData();    //获取被点击的图标信息
            const distance = extData.dis;
            console.log(extData)
            console.log(distance)
            setBdisplay(1)
            setDis(distance)
            setLongitude1(extData.position.longitude)
            setLatitude1(extData.position.latitude)
        }
    }

    const markList = [                            //测试模拟
        { position: { longitude: 116, latitude: 39, }, },
        { position: { longitude: 116, latitude: 38, }, },
        { position: { longitude: 117, latitude: 39, }, },
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
            if (markers.length == 1 || markers.length == 0) {
                setBdisplay(1)
            } else (
                setBdisplay(2)
            )
            for (let i = 0; i < markers.length; i++) {
                if (window.AMap && window.AMap.GeometryUtil) {
                    markers[i].p2 = [markers[i].position.longitude, markers[i].position.latitude]
                    markers[i].dis = window.AMap.GeometryUtil.distance(p1, markers[i].p2)
                    markers[i].dis = markers[i].dis / 1000
                    markers[i].dis = markers[i].dis.toFixed(1)
                    console.log(markers)
                }
            }
            setMarkers(markers)
        })

    }, [longitude, latitude, window.AMap])

    function handClick() {   //返回首页
        props.history.push('/')
    }

    function handGoMap() {     //跳转高德,默认不唤起app
        window.location.href = `https://uri.amap.com/navigation?from=${longitude},${latitude},&to=${longitude1},${latitude1},midwaypoint&mode=walk&policy=1&src=mypage&coordinate=gaode&callnative=0`
    }

    function handGoMap1(e){
        window.location.href = `https://uri.amap.com/navigation?from=${longitude},${latitude},&to=${e.longitude},${e.latitude},midwaypoint&mode=walk&policy=1&src=mypage&coordinate=gaode&callnative=0`
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
                        events={markersEvents}
                    />
                </Map>
            </div>
            <div className="bottomgo" style={{ height: bdisplay == 1 ? '88px' : '' }}>
                <div style={{ display: bdisplay == 1 ? 'none' : '' }}>
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
                                <div className='bogorow4' onClick={()=>{
                                    handGoMap1(item.position)
                                }}>
                                    <img src={Mapgo} />
                                    <div>去这里</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="bogorow1" style={{ display: bdisplay == 1 ? '' : 'none' }}>
                    <div className="bogorow2">
                        <div className="bogorow3">
                            <div className="bogorow5">传智播客办公区</div>
                            <img src={Ding} />
                            <div style={{ fontSize: '12px' }}>{dis}km</div>
                        </div>
                        <div className="bogorow6">建材城西路金燕龙写字楼四层</div>
                    </div>
                    <div className='bogorow4' onClick={() => {
                        handGoMap()
                    }}>
                        <img src={Mapgo} />
                        <div>去这里</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default withRouter(Nearby);