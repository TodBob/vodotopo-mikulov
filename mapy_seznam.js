var center = SMap.Coords.fromWGS84(16.6362431, 48.8134681);
var m = new SMap(JAK.gel("mapa"), center, 13);
m.addDefaultLayer(SMap.DEF_BASE).enable();
m.addDefaultControls();

var layer = new SMap.Layer.Marker();
m.addLayer(layer);
layer.enable();

var card = new SMap.Card();
card.getHeader().innerHTML = "<strong>Nadpis</strong>";
card.getBody().innerHTML = "Ahoj, já jsem <em>obsah vizitky</em>!";

var options = {
  title: "Dobré ráno"
};
var marker = new SMap.Marker(center, "myMarker", options);
marker.decorate(SMap.Marker.Feature.Card, card);
layer.addMarker(marker);

var mouseControl = null;
var controls = m.getControls();

for (var i = 0; i < controls.length; i++) {
  if (controls[i] instanceof SMap.Control.Mouse) {
    mouseControl = controls[i];
  }
}
mouseControl.configure(SMap.MOUSE_PAN | SMap.MOUSE_ZOOM);
