declare var kakao: any;
declare var window: any;

import React, { Component } from 'react';
import styled from "styled-components";

class Map extends Component {

    componentDidMount() {
        const script = document.createElement("script");
        script.async = true;
        script.src =
          "https://dapi.kakao.com/v2/maps/sdk.js?appkey=7ff05a710dd0c87927ab04e55b9fdeb6&autoload=false";
        document.head.appendChild(script);

        script.onload = () => {
            kakao.maps.load(() => {
              let container = document.getElementById("map");
              let options = {
                center: new kakao.maps.LatLng(37.506502, 127.053617),
                level: 7
              };
      
              const map = new window.kakao.maps.Map(container, options);
           
            });
          };
      
      }

    render() {
        return (
            <div>
                <MapContainer id="map"></MapContainer>
            </div>
        );
    }
}

const MapContainer = styled.div`
  width: 800px;
  height: 600px;
`;

export default Map;