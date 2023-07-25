window.onload = () => {
     let places = staticLoadPlaces();
     renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'Whale',
            location: {
                lat: 35.147650,
                lng: 129.124915,
            }
        },
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${35.147650}; longitude: ${129.124915};`);
        model.setAttribute('gltf-model', './assets/whale/scene.gltf');
        model.setAttribute('rotation', '0 30 0');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '0.8 0.8 0.8');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}
