export const initMap = (leaflet) => {
  var initialCoordinates = [-14, -50]
  var initialZoomLevel = 4
  // create a map in the "map" div, set the view to a given place and zoom
  var map = leaflet.map('map').setView(initialCoordinates, initialZoomLevel)

  // add an OpenStreetMap tile layer
  leaflet
    .tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; Contribuidores do <a href="http://osm.org/copyright">OpenStreetMap</a>',
    })
    .addTo(map)

  return map
}

export const addPlaceToMap = (
  leaflet,
  map,
  latitude,
  longitude,
  marker_message
) => {
  var muxiCoordinates = [latitude, longitude]
  var muxiMarkerMessage = marker_message

  var muxiIconProperties = {
    iconUrl:
      'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    iconSize: [24, 36],
    iconAnchor: [12, 18],
    popupAnchor: [0, -50],
  }

  var muxiIcon = leaflet.icon(muxiIconProperties)

  leaflet
    .marker(muxiCoordinates, {
      icon: muxiIcon,
    })
    .addTo(map)
    .bindPopup(muxiMarkerMessage)
}
