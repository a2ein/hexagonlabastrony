// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const events = [
        { name: 'Lunar Eclipse', date: '2024-04-15' },
        { name: 'Meteor Shower', date: '2024-05-10' },
        { name: 'Solar Eclipse', date: '2024-06-20' },
    ];
    
    const eventsList = document.getElementById('events-list');
    
    events.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.className = 'event';
        eventItem.innerHTML = `<h3>${event.name}</h3><p>Date: ${event.date}</p>`;
        eventsList.appendChild(eventItem);
    });
});
