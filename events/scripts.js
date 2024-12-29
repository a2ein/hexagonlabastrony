document.addEventListener('DOMContentLoaded', () => {
    const events = [
        { name: 'Eclipse', date: 'Event Name', description: 'Eclipse: Conditions:The Moon must be in its full phase.Earth, Sun, and Moon must align perfectly, which does/t happen monthly due to the Moons tilted orbit about 5 degrees. Types of Lunar Eclipses:Total Lunar Eclipse: Moon fully enters Earth/s umbra.Partial Lunar Eclipse:/ Only part of the Moon enters Earth/s umbra.Penumbral Eclipse:/ Moon passes through Earths penumbra, causing subtle shading.Eclipse Seasons: Occurs about twice a year when the Moons orbit crosses Earths orbital plane.Blood Moon: Occurs during a total lunar eclipse, where the Moon turns red due to Rayleigh Scattering.Upcoming Blood Moons:March 14, 2025: Not visible from Dhaka. Watch online.September 7-8, 2025: Visible from Dhaka at night.', modelUrl: 'https://www.youtube.com/embed/cxrLRbkOwKs',img:'' },
        { name: 'Meteor Shower', date: '2024-05-10', description: '', modelUrl: 'path_to_meteor_shower_model' },
        { name: 'Comet', date: '2024-06-20', description: 'Origin of Meteors Comets: As they near the Sun, they shed gas and dust, leaving a trail that intersects Earths orbit.Asteroids: Debris from asteroid collisions can also cause meteor showers.Meteor Shower Process:Debris Collision: Earth moves through these debris fields, and particles enter the atmosphere at high speeds (25-160 km/s). Friction causes them to heat up, burn, and create bright streaks of light known as meteors.Radiant Point:Constellation Origin: Meteor showers are named after the constellation from which they appear to originate, called the radiant.', modelUrl: 'path_to_comet_model' },
        { name: 'Planetary Alignment', date: '2024-06-20', description: 'Multiple planets will align.', modelUrl: 'path_to_planetary_alignment_model' },
        { name: 'Super Luna', date: '2024-06-20', description: 'A super moon will be visible from certain regions.', modelUrl: 'path_to_super_luna_model' },
    ];
    
    const eventsList = document.getElementById('events-list');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');
    const modalTitle = document.getElementById('modal-title');
    const modalDate = document.getElementById('modal-date');
    const modalDescription = document.getElementById('modal-description');
    const modelViewer = document.getElementById('model-viewer');
    
    events.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.className = 'event';
        eventItem.innerHTML = `
            <h3>${event.name}</h3>
            <p>Date: ${event.date}</p>
            <button onclick="showEventDetails('${event.name}', '${event.date}', '${event.description}')">View Details</button>
            <button onclick="showEventDetails('${event.name}', '${event.date}', '${event.description}', '${event.modelUrl}')">Upcoming</button>
            <button onclick="showEventDetails( '${event.description}', '${event.modelUrl}')">Visual Representation</button>
        `;
        eventsList.appendChild(eventItem);
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});

function showEventDetails(name, date, description, modelUrl) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDate = document.getElementById('modal-date');
    const modalDescription = document.getElementById('modal-description');
    const modelViewer = document.getElementById('model-viewer');
    
    // Display the model using iframe or other method
    modelViewer.innerHTML = `<iframe src="${modelUrl}" width="100%" height="240px"></iframe>`;
    
    modal.style.display = 'block';
    modalTitle.innerText = name;
    modalDate.innerText = `Date: ${date}`;
    modalDescription.innerText = description;

}
