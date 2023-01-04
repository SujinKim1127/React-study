import React, { useEffect } from "react";

const { kakao } = window;

const MapContainer = () => {
  useEffect(() => {
    const container = document.getElementById("myMap");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);

    var markerPosition_1 = new kakao.maps.LatLng(33.450701, 126.570667);
    // 마커를 생성합니다
    var marker_1 = new kakao.maps.Marker({
      position: markerPosition_1,
    });
    marker_1.setMap(map);

    var markerPosition_2 = new kakao.maps.LatLng(34.450701, 130.570667);
    // 마커를 생성합니다
    var marker_2 = new kakao.maps.Marker({
      position: markerPosition_2,
    });
    marker_2.setMap(map);

    kakao.maps.event.addListener(map, "click", function (mouseEvent) {
      // 클릭한 위치에 마커를 표시합니다
      addMarker(mouseEvent.latLng);
    });

    var markers = [];

    // 마커 하나를 지도위에 표시합니다
    addMarker(new kakao.maps.LatLng(33.450701, 126.570667));

    function addMarker(position) {
      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        position: position,
      });

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map);

      // 생성된 마커를 배열에 추가합니다
      markers.push(marker);
    }

    // 배열에 추가된 마커들을 지도에 표시하거나 삭제하는 함수입니다
    function setMarkers(map) {
      for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
      }
    }

    // "마커 보이기" 버튼을 클릭하면 호출되어 배열에 추가된 마커를 지도에 표시하는 함수입니다
    function showMarkers() {
      setMarkers(map);
    }

    // "마커 감추기" 버튼을 클릭하면 호출되어 배열에 추가된 마커를 지도에서 삭제하는 함수입니다
    function hideMarkers() {
      setMarkers(null);
    }
  }, []);

  return (
    <div
      id="myMap"
      style={{
        width: "500px",
        height: "500px",
      }}
    ></div>
  );
};

export default MapContainer;
