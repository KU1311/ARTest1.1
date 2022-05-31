window.onload = () => {
     let places = staticLoadPlaces();
     renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'P1',
            location: {
                lat: 22.321536,
                lng: 114.208861,
            }
        },
	{
            name: 'P2',
            location: {
                lat: 22.321766,
                lng: 114.209032,
            }
        },
	{
            name: 'P3',
            location: {
                lat: 22.321695,
                lng: 114.209075,
            }
        },
	{
            name: 'P4',
            location: {
                lat: 22.321143,
                lng: 114.208416,
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
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('gltf-model', './assets/Enero/ENERO.gltf');
        model.setAttribute('rotation', '0 0 0');
        model.setAttribute('scale', '1 1 1');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}
