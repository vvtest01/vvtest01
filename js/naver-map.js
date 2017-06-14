var HOME_PATH = window.HOME_PATH || '.';

    map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(37.564311, 126.975134), //지도의 초기 중심 좌표
        zoom: 6, //지도의 초기 줌 레벨
        minZoom: 1, //지도의 최소 줌 레벨
        zoomControl: true, //줌 컨트롤의 표시 여부
        zoomControlOptions: { //줌 컨트롤의 옵션
            position: naver.maps.Position.TOP_RIGHT,
            style: naver.maps.ZoomControlStyle.SMALL
        }
    });

// 강남구
var gangnam = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.517744, 127.047369),
    map: map
});

// 강남대로
var gangnamdaero = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.482103, 127.036503),
    map: map
});

// 강동구
var gangdong = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.545172, 127.136777),
    map: map
});

// 강변북로
var gangbyeonbok = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.539085, 127.041594),
    map: map
});

// 강북구
var gangbok = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.638132, 127.028808),
    map: map
});

// 강서구
var gangseo = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.544884, 126.835211),
    map: map
});

// 공항대로
var gonghangdaero = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.559971, 126.824807),
    map: map
});

// 관악구
var gwanak = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.488344, 126.926973),
    map: map
});

// 광진구
var gwangjin = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.545342, 127.09324),
    map: map
});

// 구로구
var guro = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.498494, 126.890162),
    map: map
});

// 금천구
var geumcheon = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.452651, 126.908178),
    map: map
});

// 노원구
var nowon = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.659687, 127.068793),
    map: map
});

// 도봉구
var dobong = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.654425, 127.029001),
    map: map
});

// 도산대로
var dosandae = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.51613, 127.020031),
    map: map
});

// 동대문구
var dongdaemun = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.575749, 127.029031),
    map: map
});

// 동작구
var dongjak = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.481172, 126.971622),
    map: map
});

// 동작대로 중앙차로
var dongjagdaero = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.485724, 126.982094),
    map: map
});

// 마포구
var mapo = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.549971, 126.945522),
    map: map
});

// 서대문구
var seodaemun = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.576913, 126.937845),
    map: map
});

// 서초구
var seocho = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.504551, 126.994508),
    map: map
});

// 성동구
var seongdong = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.543065, 127.041096),
    map: map
});

// 성북구
var seongbok = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.60667, 127.027297),
    map: map
});

// 송파구
var songpa = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.521138, 127.121436),
    map: map
});

// 신촌로
var sinchon = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.554958, 126.936276),
    map: map
});

// 양천구
var yangcheon = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.523364, 126.858704),
    map: map
});

// 영등포구
var yeongdungpo = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.524955, 126.897329),
    map: map
});

// 영등포로
var yeongdungporo = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.519336, 126.904656),
    map: map
});

// 용산구
var yongsan = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.54005, 127.004839),
    map: map
});

// 은평구
var eunpyeong = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.60984, 126.934837),
    map: map
});

// 정릉로
var jeongnung = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.606726, 127.004857),
    map: map
});

// 종로
var jongro = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.571427, 126.995675),
    map: map
});

// 종로구
var jongrogu = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.572003, 127.005007),
    map: map
});

// 중구
var junggu = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.564311, 126.975134),
    map: map
});

// 중랑구
var jungnang = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.584892, 127.093979),
    map: map
});

// 천호대로
var cheonhodae = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.534424, 127.139375),
    map: map
});

// 청계천로
var cheongyechan = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.568618, 126.998059),
    map: map
});

// 한강대로
var hangangdae = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.549047, 126.970455),
    map: map
});

// 홍릉로
var hongneung = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.580416, 127.044754),
    map: map
});

// 화랑로
var hwarangro = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.617288, 127.075255),
    map: map
});

map.setMapTypeId(naver.maps.MapTypeId.HYBRID);

var gangnamContent = [
        '<div class="iw_inner">',
        '   <div style="background: #BDA284; margin: 0 0 15px 0; border-radius: 5px 5px 0 0;" class="row">',
        '       <h5 style="margin: 20px 0; color: #fff;">강남구 측정소</h5>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>강남구 학동로 426 강남구청 별관 1동</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">측정항목</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>PM10 PM2.5</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">위성사진</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <img style="margin-top: 5px; margin-bottom: 13px;" src="./img/gangnam.png">',
        '       </div>',
        '   </div>'
    ].join('');


var infowindow = new naver.maps.InfoWindow({
    content: gangnamContent,
    minWidth: 450,
    maxHeight: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    disableAnchor: true,
});

naver.maps.Event.addListener(gangnam, "click", function(e) {
    if (infowindow.getMap()) {
        infowindow.close();
    } else {
        infowindow.open(map, gangnam);
    }
});

var gangnamdaeroContent = [
        '<div class="iw_inner">',
        '   <div style="background: #BDA284; margin: 0 0 15px 0; border-radius: 5px 5px 0 0;" class="row">',
        '       <h5 style="margin: 20px 0; color: #fff;">강남대로 측정소</h5>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>서초구 강남대로 201 서초구민회관 앞 중앙차로</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">측정항목</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>PM10</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">위성사진</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <img style="margin-top: 5px; margin-bottom: 13px;" src="./img/gangnamdaero.png">',
        '       </div>',
        '   </div>'
    ].join('');

var infowindow2 = new naver.maps.InfoWindow({
    content: gangnamdaeroContent,
    minWidth: 450,
    maxHeight: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    disableAnchor: true,
});

naver.maps.Event.addListener(gangnamdaero, "click", function(e) {
    if (infowindow2.getMap()) {
        infowindow2.close();
    } else {
        infowindow2.open(map, gangnamdaero);
    }
});

var gangdongContent = [
        '<div class="iw_inner">',
        '   <div style="background: #BDA284; margin: 0 0 15px 0; border-radius: 5px 5px 0 0;" class="row">',
        '       <h5 style="margin: 20px 0; color: #fff;">강동구 측정소</h5>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>강동구 구천면로 42길 59 천호1동 주민센터</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">측정항목</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>PM10 PM2.5</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">위성사진</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <img style="margin-top: 5px; margin-bottom: 13px;" src="./img/gangdong.png">',
        '       </div>',
        '   </div>'
    ].join('');

var infowindow3 = new naver.maps.InfoWindow({
    content: gangdongContent,
    minWidth: 450,
    maxHeight: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    disableAnchor: true,
});

naver.maps.Event.addListener(gangdong, "click", function(e) {
    if (infowindow3.getMap()) {
        infowindow3.close();
    } else {
        infowindow3.open(map, gangdong);
    }
});

var gangbyeonbokContent = [
        '<div class="iw_inner">',
        '   <div style="background: #BDA284; margin: 0 0 15px 0; border-radius: 5px 5px 0 0;" class="row">',
        '       <h5 style="margin: 20px 0; color: #fff;">강변북로 측정소</h5>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>성동구 강변북로 257 한강사업본부 옆</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">측정항목</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>PM10</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">위성사진</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <img style="margin-top: 5px; margin-bottom: 13px;" src="./img/gangbyeonbok.png">',
        '       </div>',
        '   </div>'
    ].join('');

var infowindow4 = new naver.maps.InfoWindow({
    content: gangbyeonbokContent,
    minWidth: 450,
    maxHeight: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    disableAnchor: true,
});

naver.maps.Event.addListener(gangbyeonbok, "click", function(e) {
    if (infowindow4.getMap()) {
        infowindow4.close();
    } else {
        infowindow4.open(map, gangbyeonbok);
    }
});

var gangbokContent = [
        '<div class="iw_inner">',
        '   <div style="background: #BDA284; margin: 0 0 15px 0; border-radius: 5px 5px 0 0;" class="row">',
        '       <h5 style="margin: 20px 0; color: #fff;">강북구 측정소</h5>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>강북구 덕릉로41길 74 번1동 주민센터</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">측정항목</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>PM10 PM2.5</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">위성사진</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <img style="margin-top: 5px; margin-bottom: 13px;" src="./img/gangbok.png">',
        '       </div>',
        '   </div>'
    ].join('');

var infowindow5 = new naver.maps.InfoWindow({
    content: gangbokContent,
    minWidth: 450,
    maxHeight: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    disableAnchor: true,
});

naver.maps.Event.addListener(gangbok, "click", function(e) {
    if (infowindow5.getMap()) {
        infowindow5.close();
    } else {
        infowindow5.open(map, gangbok);
    }
});

var gangseoContent = [
        '<div class="iw_inner">',
        '   <div style="background: #BDA284; margin: 0 0 15px 0; border-radius: 5px 5px 0 0;" class="row">',
        '       <h5 style="margin: 20px 0; color: #fff;">강서구 측정소</h5>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>강서로45다길 71 화곡3동 푸른들청소년도서관</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">측정항목</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>PM10 PM2.5</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">위성사진</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <img style="margin-top: 5px; margin-bottom: 13px;" src="./img/gangseo.png">',
        '       </div>',
        '   </div>'
    ].join('');

var infowindow6 = new naver.maps.InfoWindow({
    content: gangseoContent,
    minWidth: 450,
    maxHeight: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    disableAnchor: true,
});

naver.maps.Event.addListener(gangseo, "click", function(e) {
    if (infowindow6.getMap()) {
        infowindow6.close();
    } else {
        infowindow6.open(map, gangseo);
    }
});

var gonghangdaeroContent = [
        '<div class="iw_inner">',
        '   <div style="background: #BDA284; margin: 0 0 15px 0; border-radius: 5px 5px 0 0;" class="row">',
        '       <h5 style="margin: 20px 0; color: #fff;">공항대로 측정소</h5>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>강서구 마곡동 727-1091 마곡역 중앙차로정류장 옆</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">측정항목</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>PM10</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">위성사진</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <img style="margin-top: 5px; margin-bottom: 13px;" src="./img/gonghangdaero.png">',
        '       </div>',
        '   </div>'
    ].join('');

var infowindow7 = new naver.maps.InfoWindow({
    content: gonghangdaeroContent,
    minWidth: 450,
    maxHeight: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    disableAnchor: true,
});

naver.maps.Event.addListener(gonghangdaero, "click", function(e) {
    if (infowindow7.getMap()) {
        infowindow7.close();
    } else {
        infowindow7.open(map, gonghangdaero);
    }
});

var gwanakContent = [
        '<div class="iw_inner">',
        '   <div style="background: #BDA284; margin: 0 0 15px 0; border-radius: 5px 5px 0 0;" class="row">',
        '       <h5 style="margin: 20px 0; color: #fff;">관악구 측정소</h5>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>관악구 신림동길 14 신림동 주민센터</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">측정항목</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>PM10 PM2.5</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">위성사진</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <img style="margin-top: 5px; margin-bottom: 13px;" src="./img/gwanak.png">',
        '       </div>',
        '   </div>'
    ].join('');

var infowindow8 = new naver.maps.InfoWindow({
    content: gwanakContent,
    minWidth: 450,
    maxHeight: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    disableAnchor: true,
});

naver.maps.Event.addListener(gwanak, "click", function(e) {
    if (infowindow8.getMap()) {
        infowindow8.close();
    } else {
        infowindow8.open(map, gwanak);
    }
});

var gwangjinContent = [
        '<div class="iw_inner">',
        '   <div style="background: #BDA284; margin: 0 0 15px 0; border-radius: 5px 5px 0 0;" class="row">',
        '       <h5 style="margin: 20px 0; color: #fff;">광진구 측정소</h5>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>광진구 광나루로 571 구의아리수정수센터</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">측정항목</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>PM10 PM2.5</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">위성사진</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <img style="margin-top: 5px; margin-bottom: 13px;" src="./img/gwangjin.png">',
        '       </div>',
        '   </div>'
    ].join('');

var infowindow9 = new naver.maps.InfoWindow({
    content: gwangjinContent,
    minWidth: 450,
    maxHeight: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    disableAnchor: true,
});

naver.maps.Event.addListener(gwangjin, "click", function(e) {
    if (infowindow9.getMap()) {
        infowindow9.close();
    } else {
        infowindow9.open(map, gwangjin);
    }
});

var guroContent = [
        '<div class="iw_inner">',
        '   <div style="background: #BDA284; margin: 0 0 15px 0; border-radius: 5px 5px 0 0;" class="row">',
        '       <h5 style="margin: 20px 0; color: #fff;">구로구 측정소</h5>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>구로구 가마산로 27길 45 (구로고등학교)</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">측정항목</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>PM10 PM2.5</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">위성사진</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <img style="margin-top: 5px; margin-bottom: 13px;" src="./img/guro.png">',
        '       </div>',
        '   </div>'
    ].join('');

var infowindow10 = new naver.maps.InfoWindow({
    content: guroContent,
    minWidth: 450,
    maxHeight: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    disableAnchor: true,
});

naver.maps.Event.addListener(guro, "click", function(e) {
    if (infowindow10.getMap()) {
        infowindow10.close();
    } else {
        infowindow10.open(map, guro);
    }
});

var geumcheonContent = [
        '<div class="iw_inner">',
        '   <div style="background: #BDA284; margin: 0 0 15px 0; border-radius: 5px 5px 0 0;" class="row">',
        '       <h5 style="margin: 20px 0; color: #fff;">금천구 측정소</h5>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>구로구 가마산로 27길 45 (구로고등학교)</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">측정항목</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>PM10 PM2.5</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">위성사진</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <img style="margin-top: 5px; margin-bottom: 13px;" src="./img/geumcheon.png">',
        '       </div>',
        '   </div>'
    ].join('');

var infowindow11 = new naver.maps.InfoWindow({
    content: geumcheonContent,
    minWidth: 450,
    maxHeight: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    disableAnchor: true,
});

naver.maps.Event.addListener(geumcheon, "click", function(e) {
    if (infowindow11.getMap()) {
        infowindow11.close();
    } else {
        infowindow11.open(map, geumcheon);
    }
});

var nowonContent = [
        '<div class="iw_inner">',
        '   <div style="background: #BDA284; margin: 0 0 15px 0; border-radius: 5px 5px 0 0;" class="row">',
        '       <h5 style="margin: 20px 0; color: #fff;">노원구 측정소</h5>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>노원구 상계로 118 상계2동 주민센터</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">측정항목</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>PM10 PM2.5</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">위성사진</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <img style="margin-top: 5px; margin-bottom: 13px;" src="./img/nowon.png">',
        '       </div>',
        '   </div>'
    ].join('');

var infowindow12 = new naver.maps.InfoWindow({
    content: nowonContent,
    minWidth: 450,
    maxHeight: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    disableAnchor: true,
});

naver.maps.Event.addListener(nowon, "click", function(e) {
    if (infowindow12.getMap()) {
        infowindow12.close();
    } else {
        infowindow12.open(map, nowon);
    }
});

var dobongContent = [
        '<div class="iw_inner">',
        '   <div style="background: #BDA284; margin: 0 0 15px 0; border-radius: 5px 5px 0 0;" class="row">',
        '       <h5 style="margin: 20px 0; color: #fff;">도봉구 측정소</h5>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>도봉구 시루봉로2길 34 쌍문동청소년문화의 집</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">측정항목</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>PM10 PM2.5</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">위성사진</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <img style="margin-top: 5px; margin-bottom: 13px;" src="./img/dobong.png">',
        '       </div>',
        '   </div>'
    ].join('');

var infowindow13 = new naver.maps.InfoWindow({
    content: dobongContent,
    minWidth: 450,
    maxHeight: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    disableAnchor: true,
});

naver.maps.Event.addListener(dobong, "click", function(e) {
    if (infowindow13.getMap()) {
        infowindow13.close();
    } else {
        infowindow13.open(map, dobong);
    }
});

var dosandaeContent = [
        '<div class="iw_inner">',
        '   <div style="background: #BDA284; margin: 0 0 15px 0; border-radius: 5px 5px 0 0;" class="row">',
        '       <h5 style="margin: 20px 0; color: #fff;">도산대로 측정소</h5>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>강남구 도산대로 104 신사역2번출구 앞</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">측정항목</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>PM10</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">위성사진</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <img style="margin-top: 5px; margin-bottom: 13px;" src="./img/dosan.png">',
        '       </div>',
        '   </div>'
    ].join('');

var infowindow14 = new naver.maps.InfoWindow({
    content: dosandaeContent,
    minWidth: 450,
    maxHeight: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    disableAnchor: true,
});

naver.maps.Event.addListener(dosandae, "click", function(e) {
    if (infowindow14.getMap()) {
        infowindow14.close();
    } else {
        infowindow14.open(map, dosandae);
    }
});

var dongdaemunContent = [
        '<div class="iw_inner">',
        '   <div style="background: #BDA284; margin: 0 0 15px 0; border-radius: 5px 5px 0 0;" class="row">',
        '       <h5 style="margin: 20px 0; color: #fff;">동대문구 측정소</h5>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>동대문구 천호대로13길 43 용두초등학교</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">측정항목</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>PM10 PM2.5</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">위성사진</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <img style="margin-top: 5px; margin-bottom: 13px;" src="./img/dongdaemun.png">',
        '       </div>',
        '   </div>'
    ].join('');

var infowindow15 = new naver.maps.InfoWindow({
    content: dongdaemunContent,
    minWidth: 450,
    maxHeight: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    disableAnchor: true,
});

naver.maps.Event.addListener(dongdaemun, "click", function(e) {
    if (infowindow15.getMap()) {
        infowindow15.close();
    } else {
        infowindow15.open(map, dongdaemun);
    }
});

var dongjakContent = [
        '<div class="iw_inner">',
        '   <div style="background: #BDA284; margin: 0 0 15px 0; border-radius: 5px 5px 0 0;" class="row">',
        '       <h5 style="margin: 20px 0; color: #fff;">동작구 측정소</h5>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>동작구 사당로16아길 6 (사당4동 주민센터)</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">측정항목</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>PM10 PM2.5</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">위성사진</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <img style="margin-top: 5px; margin-bottom: 13px;" src="./img/dongjak.png">',
        '       </div>',
        '   </div>'
    ].join('');

var infowindow16 = new naver.maps.InfoWindow({
    content: dongjakContent,
    minWidth: 450,
    maxHeight: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    disableAnchor: true,
});

naver.maps.Event.addListener(dongjak, "click", function(e) {
    if (infowindow16.getMap()) {
        infowindow16.close();
    } else {
        infowindow16.open(map, dongjak);
    }
});

var dongjagdaeroContent = [
        '<div class="iw_inner">',
        '   <div style="background: #BDA284; margin: 0 0 15px 0; border-radius: 5px 5px 0 0;" class="row">',
        '       <h5 style="margin: 20px 0; color: #fff;">동작대로 중앙차로 측정소</h5>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>동작구 동작대로 144 이수역 북단 버스중앙차로</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">측정항목</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>PM10</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">위성사진</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <img style="margin-top: 5px; margin-bottom: 13px;" src="./img/dongjagdaero.png">',
        '       </div>',
        '   </div>'
    ].join('');

var infowindow17 = new naver.maps.InfoWindow({
    content: dongjagdaeroContent,
    minWidth: 450,
    maxHeight: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    disableAnchor: true,
});

naver.maps.Event.addListener(dongjagdaero, "click", function(e) {
    if (infowindow17.getMap()) {
        infowindow17.close();
    } else {
        infowindow17.open(map, dongjagdaero);
    }
});

var mapoContent = [
        '<div class="iw_inner">',
        '   <div style="background: #BDA284; margin: 0 0 15px 0; border-radius: 5px 5px 0 0;" class="row">',
        '       <h5 style="margin: 20px 0; color: #fff;">마포구 측정소</h5>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>마포구 대흥로 20길 28 마포아트센터</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">측정항목</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>PM10 PM2.5</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">위성사진</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <img style="margin-top: 5px; margin-bottom: 13px;" src="./img/mapo.png">',
        '       </div>',
        '   </div>'
    ].join('');

var infowindow18 = new naver.maps.InfoWindow({
    content: mapoContent,
    minWidth: 450,
    maxHeight: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    disableAnchor: true,
});

naver.maps.Event.addListener(mapo, "click", function(e) {
    if (infowindow18.getMap()) {
        infowindow18.close();
    } else {
        infowindow18.open(map, mapo);
    }
});

var seodaemunContent = [
        '<div class="iw_inner">',
        '   <div style="background: #BDA284; margin: 0 0 15px 0; border-radius: 5px 5px 0 0;" class="row">',
        '       <h5 style="margin: 20px 0; color: #fff;">서대문구 측정소</h5>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>서대문구 연희로32길 51 서대문구 자연사박물관</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">측정항목</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>PM10 PM2.5</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">위성사진</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <img style="margin-top: 5px; margin-bottom: 13px;" src="./img/seodaemun.png">',
        '       </div>',
        '   </div>'
    ].join('');

var infowindow19 = new naver.maps.InfoWindow({
    content: seodaemunContent,
    minWidth: 450,
    maxHeight: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    disableAnchor: true,
});

naver.maps.Event.addListener(seodaemun, "click", function(e) {
    if (infowindow19.getMap()) {
        infowindow19.close();
    } else {
        infowindow19.open(map, seodaemun);
    }
});

var seochoContent = [
        '<div class="iw_inner">',
        '   <div style="background: #BDA284; margin: 0 0 15px 0; border-radius: 5px 5px 0 0;" class="row">',
        '       <h5 style="margin: 20px 0; color: #fff;">서초구 측정소</h5>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>서초구 신반포로15길 16 (반포 2동 주민센터)</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">측정항목</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>PM10 PM2.5</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">위성사진</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <img style="margin-top: 5px; margin-bottom: 13px;" src="./img/seocho.png">',
        '       </div>',
        '   </div>'
    ].join('');

var infowindow20 = new naver.maps.InfoWindow({
    content: seochoContent,
    minWidth: 450,
    maxHeight: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    disableAnchor: true,
});

naver.maps.Event.addListener(seocho, "click", function(e) {
    if (infowindow20.getMap()) {
        infowindow20.close();
    } else {
        infowindow20.open(map, seocho);
    }
});

var seongdongContent = [
        '<div class="iw_inner">',
        '   <div style="background: #BDA284; margin: 0 0 15px 0; border-radius: 5px 5px 0 0;" class="row">',
        '       <h5 style="margin: 20px 0; color: #fff;">성동구 측정소</h5>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>성동구 뚝섬로 273 서울숲 자전거대여소 옆</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">측정항목</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>PM10 PM2.5</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">위성사진</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <img style="margin-top: 5px; margin-bottom: 13px;" src="./img/seongdong.png">',
        '       </div>',
        '   </div>'
    ].join('');

var infowindow21 = new naver.maps.InfoWindow({
    content: seongdongContent,
    minWidth: 450,
    maxHeight: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    disableAnchor: true,
});

naver.maps.Event.addListener(seongdong, "click", function(e) {
    if (infowindow21.getMap()) {
        infowindow21.close();
    } else {
        infowindow21.open(map, seongdong);
    }
});

var seongbokContent = [
        '<div class="iw_inner">',
        '   <div style="background: #BDA284; margin: 0 0 15px 0; border-radius: 5px 5px 0 0;" class="row">',
        '       <h5 style="margin: 20px 0; color: #fff;">성북구 측정소</h5>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>성북구 삼양로2길 70 (길음2동 주민센터)</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">측정항목</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>PM10 PM2.5</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">위성사진</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <img style="margin-top: 5px; margin-bottom: 13px;" src="./img/seongbok.png">',
        '       </div>',
        '   </div>'
    ].join('');

var infowindow22 = new naver.maps.InfoWindow({
    content: seongbokContent,
    minWidth: 450,
    maxHeight: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    disableAnchor: true,
});

naver.maps.Event.addListener(seongbok, "click", function(e) {
    if (infowindow22.getMap()) {
        infowindow22.close();
    } else {
        infowindow22.open(map, seongbok);
    }
});

var songpaContent = [
        '<div class="iw_inner">',
        '   <div style="background: #BDA284; margin: 0 0 15px 0; border-radius: 5px 5px 0 0;" class="row">',
        '       <h5 style="margin: 20px 0; color: #fff;">송파구 측정소</h5>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>송파구 올림픽로 424 서울역사편찬원</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">측정항목</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>PM10 PM2.5</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">위성사진</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <img style="margin-top: 5px; margin-bottom: 13px;" src="./img/songpa.png">',
        '       </div>',
        '   </div>'
    ].join('');

var infowindow23 = new naver.maps.InfoWindow({
    content: songpaContent,
    minWidth: 450,
    maxHeight: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    disableAnchor: true,
});

naver.maps.Event.addListener(songpa, "click", function(e) {
    if (infowindow23.getMap()) {
        infowindow23.close();
    } else {
        infowindow23.open(map, songpa);
    }
});

var sinchonContent = [
        '<div class="iw_inner">',
        '   <div style="background: #BDA284; margin: 0 0 15px 0; border-radius: 5px 5px 0 0;" class="row">',
        '       <h5 style="margin: 20px 0; color: #fff;">신촌로 측정소</h5>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>마포구 노고산동 57-62 (신촌역 7번 출구)</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">측정항목</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>PM10</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">위성사진</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <img style="margin-top: 5px; margin-bottom: 13px;" src="./img/sinchon.png">',
        '       </div>',
        '   </div>'
    ].join('');

var infowindow24 = new naver.maps.InfoWindow({
    content: sinchonContent,
    minWidth: 450,
    maxHeight: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    disableAnchor: true,
});

naver.maps.Event.addListener(sinchon, "click", function(e) {
    if (infowindow24.getMap()) {
        infowindow24.close();
    } else {
        infowindow24.open(map, sinchon);
    }
});

var yangcheonContent = [
        '<div class="iw_inner">',
        '   <div style="background: #BDA284; margin: 0 0 15px 0; border-radius: 5px 5px 0 0;" class="row">',
        '       <h5 style="margin: 20px 0; color: #fff;">양천구 측정소</h5>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>양천구 중앙로52길 56 (신정4동 문화센터)</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">측정항목</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>PM10 PM2.5</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">위성사진</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <img style="margin-top: 5px; margin-bottom: 13px;" src="./img/yangcheon.png">',
        '       </div>',
        '   </div>'
    ].join('');

var infowindow25 = new naver.maps.InfoWindow({
    content: yangcheonContent,
    minWidth: 450,
    maxHeight: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    disableAnchor: true,
});

naver.maps.Event.addListener(yangcheon, "click", function(e) {
    if (infowindow25.getMap()) {
        infowindow25.close();
    } else {
        infowindow25.open(map, yangcheon);
    }
});

var yeongdungpoContent = [
        '<div class="iw_inner">',
        '   <div style="background: #BDA284; margin: 0 0 15px 0; border-radius: 5px 5px 0 0;" class="row">',
        '       <h5 style="margin: 20px 0; color: #fff;">영등포구 측정소</h5>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>영등포구 양산로23길 11 (당산1동 주민센터)</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">측정항목</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>PM10</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">위성사진</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <img style="margin-top: 5px; margin-bottom: 13px;" src="./img/yeongdungpo.png">',
        '       </div>',
        '   </div>'
    ].join('');

var infowindow26 = new naver.maps.InfoWindow({
    content: yeongdungpoContent,
    minWidth: 450,
    maxHeight: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    disableAnchor: true,
});

naver.maps.Event.addListener(yeongdungpo, "click", function(e) {
    if (infowindow26.getMap()) {
        infowindow26.close();
    } else {
        infowindow26.open(map, yeongdungpo);
    }
});

var yeongdungporoContent = [
        '<div class="iw_inner">',
        '   <div style="background: #BDA284; margin: 0 0 15px 0; border-radius: 5px 5px 0 0;" class="row">',
        '       <h5 style="margin: 20px 0; color: #fff;">영등포로 측정소</h5>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>영등포구 영중로 37 (영등포시장사거리)</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">측정항목</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>PM10 PM2.5</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">위성사진</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <img style="margin-top: 5px; margin-bottom: 13px;" src="./img/yeongdungporo.png">',
        '       </div>',
        '   </div>'
    ].join('');

var infowindow27 = new naver.maps.InfoWindow({
    content: yeongdungporoContent,
    minWidth: 450,
    maxHeight: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    disableAnchor: true,
});

naver.maps.Event.addListener(yeongdungporo, "click", function(e) {
    if (infowindow27.getMap()) {
        infowindow27.close();
    } else {
        infowindow27.open(map, yeongdungporo);
    }
});

var yongsanContent = [
        '<div class="iw_inner">',
        '   <div style="background: #BDA284; margin: 0 0 15px 0; border-radius: 5px 5px 0 0;" class="row">',
        '       <h5 style="margin: 20px 0; color: #fff;">용산구 측정소</h5>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>용산구 한남대로 136 (서울특별시중부기술교육원)</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">측정항목</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>PM10 PM2.5</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">위성사진</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <img style="margin-top: 5px; margin-bottom: 13px;" src="./img/yongsan.png">',
        '       </div>',
        '   </div>'
    ].join('');

var infowindow28 = new naver.maps.InfoWindow({
    content: yongsanContent,
    minWidth: 450,
    maxHeight: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    disableAnchor: true,
});

naver.maps.Event.addListener(yongsan, "click", function(e) {
    if (infowindow28.getMap()) {
        infowindow28.close();
    } else {
        infowindow28.open(map, yongsan);
    }
});

var eunpyeongContent = [
        '<div class="iw_inner">',
        '   <div style="background: #BDA284; margin: 0 0 15px 0; border-radius: 5px 5px 0 0;" class="row">',
        '       <h5 style="margin: 20px 0; color: #fff;">은평구 측정소</h5>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>은평구 진흥로 215 (한국환경정책평가연구원)</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">측정항목</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>PM10 PM2.5</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">위성사진</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <img style="margin-top: 5px; margin-bottom: 13px;" src="./img/eunpyeong.png">',
        '       </div>',
        '   </div>'
    ].join('');

var infowindow29 = new naver.maps.InfoWindow({
    content: eunpyeongContent,
    minWidth: 450,
    maxHeight: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    disableAnchor: true,
});

naver.maps.Event.addListener(eunpyeong, "click", function(e) {
    if (infowindow29.getMap()) {
        infowindow29.close();
    } else {
        infowindow29.open(map, eunpyeong);
    }
});

var jeongnungContent = [
        '<div class="iw_inner">',
        '   <div style="background: #BDA284; margin: 0 0 15px 0; border-radius: 5px 5px 0 0;" class="row">',
        '       <h5 style="margin: 20px 0; color: #fff;">정릉로 측정소</h5>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>성북구 정릉로 180 내부순환로 내선 정릉램프 출구</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">측정항목</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>PM10 PM2.5</p>',
        '       </div>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">위성사진</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <img style="margin-top: 5px; margin-bottom: 13px;" src="./img/jeongnung.png">',
        '       </div>',
        '   </div>'
    ].join('');

var infowindow30 = new naver.maps.InfoWindow({
    content: jeongnungContent,
    minWidth: 450,
    maxHeight: 100,
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderWidth: 1,
    disableAnchor: true,
});

naver.maps.Event.addListener(jeongnung, "click", function(e) {
    if (infowindow30.getMap()) {
        infowindow30.close();
    } else {
        infowindow30.open(map, jeongnung);
    }
});

// 지도 인터랙션 옵션
$("#interaction").on("click", function(e) {
    e.preventDefault();

    if (map.getOptions("draggable")) {
        map.setOptions({ //지도 인터랙션 끄기
            draggable: false,
            pinchZoom: false,
            scrollWheel: false,
            keyboardShortcuts: false,
            disableDoubleTapZoom: true,
            disableDoubleClickZoom: true,
            disableTwoFingerTapZoom: true
        });

        $(this).removeClass("control-on");
    } else {
        map.setOptions({ //지도 인터랙션 켜기
            draggable: true,
            pinchZoom: true,
            scrollWheel: true,
            keyboardShortcuts: true,
            disableDoubleTapZoom: false,
            disableDoubleClickZoom: false,
            disableTwoFingerTapZoom: false
        });

        $(this).addClass("control-on");
    }
});

// 관성 드래깅 옵션
$("#kinetic").on("click", function(e) {
    e.preventDefault();

    if (map.getOptions("disableKineticPan")) {
        map.setOptions("disableKineticPan", false); //관성 드래깅 켜기
        $(this).addClass("control-on");
    } else {
        map.setOptions("disableKineticPan", true); //관성 드래깅 끄기
        $(this).removeClass("control-on");
    }
});

// 타일 fadeIn 효과
$("#tile-transition").on("click", function(e) {
    e.preventDefault();

    if (map.getOptions("tileTransition")) {
        map.setOptions("tileTransition", false); //타일 fadeIn 효과 끄기

        $(this).removeClass("control-on");
    } else {
        map.setOptions("tileTransition", true); //타일 fadeIn 효과 켜기
        $(this).addClass("control-on");
    }
});

// min/max 줌 레벨
$("#min-max-zoom").on("click", function(e) {
    e.preventDefault();

    if (map.getOptions("minZoom") === 10) {
        map.setOptions({
            minZoom: 1,
            maxZoom: 14
        });
        $(this).val(this.name + ': 1 ~ 14');
    } else {
        map.setOptions({
            minZoom: 10,
            maxZoom: 12
        });
        $(this).val(this.name + ': 10 ~ 12');
    }
});

//지도 컨트롤
$("#controls").on("click", function(e) {
    e.preventDefault();

    if (map.getOptions("scaleControl")) {
        map.setOptions({ //모든 지도 컨트롤 숨기기
            scaleControl: false,
            logoControl: false,
            mapDataControl: false,
            zoomControl: false,
            mapTypeControl: false
        });
        $(this).removeClass('control-on');
    } else {
        map.setOptions({ //모든 지도 컨트롤 보이기
            scaleControl: true,
            logoControl: true,
            mapDataControl: true,
            zoomControl: true,
            mapTypeControl: true
        });
        $(this).addClass('control-on');
    }
});

$("#interaction, #tile-transition, #controls").addClass("control-on");