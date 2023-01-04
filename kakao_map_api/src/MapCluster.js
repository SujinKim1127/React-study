import React, { useEffect } from "react";
import $ from "jquery";
import { clusterdata } from "./data/clusterdata";

const { kakao } = window;

export default function MapCluster() {
  useEffect(() => {
    mapscript();

  }, []);

  const mapscript = () => {
    var map = new kakao.maps.Map(document.getElementById("map"), {
      // 지도를 표시할 div
      center: new kakao.maps.LatLng(36.2683, 127.6358), // 지도의 중심좌표
      level: 14, // 지도의 확대 레벨
    });

    // 마커 클러스터러를 생성합니다
    var clusterer = new kakao.maps.MarkerClusterer({
      map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
      averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
      minLevel: 10, // 클러스터 할 최소 지도 레벨
    });

    var markers = clusterdata.map((el) => {
      return new kakao.maps.Marker({
        position: new kakao.maps.LatLng(el.lat, el.lng),
      });
    });


    clusterer.addMarkers(markers);

    return <div id="map" style={{ width: "100vw", height: "100vh" }}></div>;
  };
}
