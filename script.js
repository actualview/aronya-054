window.onload = () => {
     let places = staticLoadPlaces();
     renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'Whale',
            location: {
                lat: 35.146492,
                lng: 129.128107,
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
        model.setAttribute('gps-entity-place', `latitude: ${35.146492}; longitude: ${129.128107};`);
        model.setAttribute('gltf-model', './assets/whale/scene.glb');
        model.setAttribute('rotation', '0 30 0');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '0.005 0.005 0.005');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}
