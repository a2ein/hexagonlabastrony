document.addEventListener('DOMContentLoaded', () => {
    const events = [
        { name: 'Eclipse', date: '', description: 'Eclipse: Conditions:The Moon must be in its full phase.Earth, Sun, and Moon must align perfectly, which does/t happen monthly due to the Moons tilted orbit about 5 degrees. Types of Lunar Eclipses:Total Lunar Eclipse: Moon fully enters Earth/s umbra.Partial Lunar Eclipse:/ Only part of the Moon enters Earth/s umbra.Penumbral Eclipse:/ Moon passes through Earths penumbra, causing subtle shading.Eclipse Seasons: Occurs about twice a year when the Moons orbit crosses Earths orbital plane.Blood Moon: Occurs during a total lunar eclipse, where the Moon turns red due to Rayleigh Scattering.Upcoming Blood Moons:March 14, 2025: Not visible from Dhaka. Watch online.September 7-8, 2025: Visible from Dhaka at night.', modelUrl: 'https://youtu.be/VW2xRR75lKE?si=JH5nwtk-G5euplDG',img:'img/ec.jpg' },
        { name: 'Meteor Shower', date: ' ', description: 'Meteor Showers: A Celestial Display Meteor showers are captivating astronomical events that occur when Earth passes through streams of cosmic debris left behind by comets or asteroids. As these particles, often mere grains of dust and rock, enter Earths atmosphere at high velocities, they incinerate due to friction, producing brilliant streaks of light across the night sky.These dazzling displays are named after the constellations from which they appear to emanate, known as the "radiant." While meteors can be seen all over the sky, the radiant point creates the illusion of their paths converging, offering viewers a breathtaking, concentrated celestial show.', modelUrl: 'https://youtu.be/S_jdfyp8pL0?si=VC9LLyg9YntVWO6z',img:'img/mete.jpg' },
        { name: 'Comet', date: '', description: 'Origin of Meteors Comets: As they near the Sun, they shed gas and dust, leaving a trail that intersects Earths orbit.Asteroids: Debris from asteroid collisions can also cause meteor showers.Meteor Shower Process:Debris Collision: Earth moves through these debris fields, and particles enter the atmosphere at high speeds (25-160 km/s). Friction causes them to heat up, burn, and create bright streaks of light known as meteors.Radiant Point:Constellation Origin: Meteor showers are named after the constellation from which they appear to originate, called the radiant.', modelUrl: 'https://youtu.be/jSdVT5-4PLA?si=UOXXGxc19JEFeUKT',img:'img/comet.jpg' },
        { name: 'Planetary Alignment', date: '', description: 'Multiple planets will align.', modelUrl: 'path_to_planetary_alignment_model' ,img:'img/plane.jpg'},
        { name: 'Super Luna', date: '', description: 'A super moon will be visible from certain regions.', modelUrl: 'https://youtube.com/shorts/mZn0cgw8UWE?si=Mz7dg95J_qhN5jvH',img:'img/superluna.jpg'},
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
         <img src="${event.img}"  alt="img">
            <button onclick="showEventDetails('${event.name}', '${event.date}', '${event.description}')">View Details</button>
           
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
