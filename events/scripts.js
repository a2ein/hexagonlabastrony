document.addEventListener('DOMContentLoaded', () => {
    const events = [
        { name: 'Eclipse', date: '2024-04-15', description: 'Types of solar eclipses: Total, Partial, Annular, Hybrid. Types of lunar eclipses: Total, Partial, Penumbral.', modelUrl: 'https://www.youtube.com/embed/cxrLRbkOwKs' },
        { name: 'Meteor Shower', date: '2024-05-10', description: 'The annual meteor shower will reach its peak tonight.', modelUrl: 'path_to_meteor_shower_model' },
        { name: 'Comet', date: '2024-06-20', description: 'A comet will be visible from certain regions.', modelUrl: 'path_to_comet_model' },
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
            <button onclick="showEventDetails('${event.name}', '${event.date}', '${event.description}', '${event.modelUrl}')">View Details</button>
            <button onclick="showEventDetails('${event.name}', '${event.date}', '${event.description}', '${event.modelUrl}')">Classification</button>
            <button onclick="showEventDetails('${event.name}', '${event.date}', '${event.description}', '${event.modelUrl}')">Visual Representation</button>
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

    // Display the model using iframe or other method
    modelViewer.innerHTML = `<iframe src="${modelUrl}" width="100%" height="240px"></iframe>`;
    
    modal.style.display = 'block';
}
