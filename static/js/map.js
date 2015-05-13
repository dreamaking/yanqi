(function(){

var lng = 116.655814,
	lat = 40.379155,
	loc = new AMap.LngLat(lng, lat);
var mapObj = new AMap.Map("content",{
	center : loc,
	zoom : 13
});
var marker = new AMap.Marker({
	position : loc,
});
marker.setMap(mapObj);
})();