declare var kakao: any;
declare var window: any;

import React from 'react';
import styled from "styled-components";

interface itemProps {
    
    locatonID: string
}

interface itemState {

    locationID: string
}



class Map03 extends React.Component<itemProps, itemState> {


    constructor(props: itemProps){
        super(props);


        this.state ={
            locationID : props.locatonID,
        }
    }

    componentDidMount() {
        const script = document.createElement("script");
        script.async = true;
        script.src =
          "https://dapi.kakao.com/v2/maps/sdk.js?appkey=7ff05a710dd0c87927ab04e55b9fdeb6&autoload=false";
        document.head.appendChild(script);

        script.onload = () => {
            kakao.maps.load(() => {
                let container = document.getElementById(this.state.locationID);
                let options = {
                    center: new kakao.maps.LatLng(33.387141837922634, 126.56413842811448),
                    level: 11
                };

                let map = new window.kakao.maps.Map(container, options);

                //마커 등록
                // 마커가 표시될 위치입니다 
                var markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);

                // 마커를 생성합니다
                var marker = new kakao.maps.Marker({
                    position: markerPosition
                });

                // 마커가 지도 위에 표시되도록 설정합니다
                marker.setMap(map);

            });
        };
      
      }

    render() {

        return (
            <Item id={this.state.locationID}/>
        );
    }
}

const Item = styled.div`
    margin: 10px;
    padding: 20px;
    text-align: center;
    border-radius: 5px;
    width: 300px;
    height: 200px;
`;

export default Map03;