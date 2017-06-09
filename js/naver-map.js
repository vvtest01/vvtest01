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
        '       <h5 style="margin: 20px 0; color: #fff;">송파 측정소</h5> <span id="close">Close</span>',
        '   </div>',
        '   <div style="margin-left: 13px;" class="row">',
        '       <div class="col-md-2">',
        '           <strong style="color: #666; float: right;">주소</strong>',
        '       </div>',
        '       <div style="padding-left: 0;" class="col-md-10">',
        '           <p>서울 송파구 올림픽로 424 서울역사편찬원</p>',
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

naver.maps.Event.addListener(getElementById("close"), "click", function(e) {
        if (infowindow.getMap()) {
        infowindow.close();
    } else {
        infowindow.open(map, gangnam);
    }
});

var gangnamdaeroContent = [
        '<div class="iw_inner">',
        '   <h3>서울특별시청</h3>',
        '   <p>testestetstwest<br />',
        '       02-120 | 공공,사회기관 &gt; 특별,광역시청<br />',
        '       <a href="http://www.seoul.go.kr" target="_blank">www.seoul.go.kr/</a>',
        '   </p>',
        '</div>'
    ].join('');

var infowindow2 = new naver.maps.InfoWindow({
    content: gangnamdaeroContent,
});

naver.maps.Event.addListener(gangnamdaero, "click", function(e) {
    if (infowindow2.getMap()) {
        infowindow2.close();
    } else {
        infowindow2.open(map, gangnamdaero);
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