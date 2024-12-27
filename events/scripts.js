// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const events = [
        { name: 'Lunar Eclipse', date: '2024-04-15', description: 'A lunar eclipse will be visible in many parts of the world.', modelUrl: 'path_to_lunar_eclipse_model' },
        { name: 'Meteor Shower', date: '2024-05-10', description: 'The annual meteor shower will reach its peak tonight.', modelUrl: 'path_to_meteor_shower_model' },
        { name: 'Solar Eclipse', date: '2024-06-20', description: 'A solar eclipse will be visible from certain regions.', modelUrl: 'path_to_solar_eclipse_model' },
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
            <button onclick="showEventDetails('${event.name}', '${event.date}', '${event.description}', '${event.modelUrl}')">View Details</button>
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
    
    modalTitle.innerText = name;
    modalDate.innerText = `Date: ${date}`;
    modalDescription.innerText = description;

    // Code to display the model using Three.js or another library goes here.
    
    modal.style.display = 'block';
}
