// initialise and add the map
function initMap() {
    // Your location
    const loc = {lat: 42.361145, lng: -72.057083};
    // centered map on location
    const map = new google.maps.Map(document.querySelector('.map')
    , {
        zoom: 14,
        center: loc
    });
    // the marker positioned at location
    const Marker = new google.maps.Marker({position: loc, map: map});
}

