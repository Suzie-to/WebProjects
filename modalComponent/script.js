let openButton = document.getElementById('open-button');
let modalContainer = document.getElementById('modal-container');
let closeButton= document.getElementById('close-button');


// EVENT LISTENERS

openButton.addEventListener('click', function() {
    modalContainer.style.display = 'block';
} );

// close the content when clikcing 'X'
closeButton.addEventListener('click', function() {
    modalContainer.style.display = 'none';
});

// click anywhere on the window to close the content
window.addEventListener('click', function(e) {
    if (e.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
});