
let manualContainer = document.getElementById('manual-container');
let closeButton= document.getElementById('close-button');


// EVENT LISTENERS
// manualContainer.style.visibility = 'visible';
// close the content when clikcing 'X'
closeButton.addEventListener('click', function() {
    manualContainer.style.visibility = 'hidden';
});

// click anywhere on the window to close the content
window.addEventListener('click', function(e) {
    if (e.target === manualContainer) {
        manualContainer.style.visibility = 'hidden';
    }
});