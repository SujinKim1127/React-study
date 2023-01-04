import React, { useEffect } from "react";
import { markerdata } from "./data/markerData";

const { kakao } = window;

export default function Map() {
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.5436, 127.053),
      level: 3,
    };

    //map
    const map = new kakao.maps.Map(container, options);
    markerdata.forEach((el) => {
      // 마커를 생성합니다
      const marker = new kakao.maps.Marker({
        //마커가 표시 될 지도
        map: map,
        //마커가 표시 될 위치
        position: new kakao.maps.LatLng(el.lat, el.lng),
      });
      // 마커에 표시할 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
        content: el.title, // 인포윈도우에 표시할 내용
      });

      infowindow.open(map, marker);

    });
  };

  return <div id="map" style={{ width: "100vw", height: "100vh" }}></div>;
}
