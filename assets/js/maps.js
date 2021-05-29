/**
 * Google maps API from tutorial https://youtu.be/Zxf1mnP5zcw
 */
function initMap() {
    // Map options
    var options = {
        zoom: 8,
        center: {
            lat: 53.7276,
            lng: -7.7933
        }
    }
    // New map
    var map = new google.maps.Map(document.getElementById("map"), options);

    // Add marker
    var marker = new google.maps.Marker({
        position: {
            lat: 53.5644,
            lng: -7.7646
        },
        map: map
    });

    // Add info window
    var infoWindow = new google.maps.InfoWindow({
        content: "<h3>SolaNew PV Systems</h3>"
    });

    // Add event listener to marker 
    marker.addListener("click", function () {
        infoWindow.open(map, marker);
    });
}