var map;
var restaurantes;
function loadData()
{
    fetch("data.json")
    .then(response => response.json())
    .then(data => {
        restaurantes = data;
        initMap(restaurantes)
    //console.log("------ datajson: ",datajson)
    });
}
function initMap(r) 
{                  
    console.log(r);
    // console.log(restaurantes[2].nombre);
    // console.log(restaurantes[2].geo.lng)
    map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 5.055926, lng: -75.485854 },
    zoom: 10,                
    });
    // var marker = new google.maps.Marker({position: { lat: 5.046376, lng: -75.482093}, map: map});
    // var marker2 = new google.maps.Marker({position: { lat: 5.047349, lng: -75.482998}, map: map});
    r.forEach(restaurante => {
        var marker = new google.maps.Marker({position: restaurante.geo, map: map});
    });
}