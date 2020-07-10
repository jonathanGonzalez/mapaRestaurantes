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
    infoWindow = new google.maps.InfoWindow();

    // Try HTML5 geolocation.
    if (navigator.geolocation) 
    {
        navigator.geolocation.getCurrentPosition(function(position) 
        {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            var marker = new google.maps.Marker({position: pos, map: map});
            // marker.addListener("click", function()
            // {
            //             infowindow.open(map, marker);
            // });

            // infoWindow.setPosition(pos);
            // infoWindow.setContent("Mi ubicación");
            // infoWindow.open(map);
            // map.setCenter(pos);
        },
        function() {
            handleLocationError(true, infoWindow, map.getCenter());
        }
        );
    } 
    else
    {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
    function handleLocationError(browserHasGeolocation, infoWindow, pos) 
    {
        infoWindow.setPosition(pos);
        infoWindow.setContent(
          browserHasGeolocation
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation."
        );
        infoWindow.open(map);
      }

    // var marker = new google.maps.Marker({position: { lat: 5.046376, lng: -75.482093}, map: map});
    // var marker2 = new google.maps.Marker({position: { lat: 5.047349, lng: -75.482998}, map: map});
    // r.forEach(restaurante => {
    //     var marker = new google.maps.Marker({position: restaurante.geo, map: map});
    //     var contentString =
    //     '<div id="content">' +
    //     '<div id="siteNotice">' +
    //     "</div>" +
    //     '<h4 id="firstHeading" class="firstHeading">'+ restaurante.nombre  +'</h4>' +
    //     '<div id="bodyContent">' +
    //     "<p><b>Teléfono</b></br><a href='tel:" + restaurante.telefono + "'>" + restaurante.telefono +
    //     "</a>"+
    //     "</p>" +
    //     "</div>" +
    //     "</div>";
    //     var infowindow = new google.maps.InfoWindow({
    //         content: contentString
    //     });
    //     marker.addListener("click", function() {
    //         infowindow.open(map, marker);
    //       });
    // });
}