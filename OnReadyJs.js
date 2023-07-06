var map = new jsVectorMap({
  selector: "#"+$parameters.ContainerId,
  map: "world",
  markers: [
    { name: 'Egypt', coords: [26.8206, 30.8025] },
    { name: 'United Kingdom', coords: [55.3781, 3.4360] },
     { name: 'Chennai', coords: [13.0827, 80.2707] },
    {
      name: 'United States',
      coords: [37.0902, -95.7129],
      // Add style for this particular marker
      // Keep in mind `style` object is merged with `markerStyle.initial`
      style: { fill: 'red' }
    }
  ],
  zoomButtons: false
});
