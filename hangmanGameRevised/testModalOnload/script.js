
const slides = Array.from(document.querySelectorAll('.slide'));
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let closeButton= document.getElementById('close-button');
const reviewInstructionsButton = document.getElementById('review-instructions-button');
let manualContainer = document.getElementById('manual-container');


let currentSlideIndex = 0;

// Function to show the current slide
function showSlide(index) {
  // Hide all slides
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  // Show the slide at the specified index
  slides[index].style.display = 'block';
}


// Function to go to the previous slide
function goToPrevSlide() {
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }
  showSlide(currentSlideIndex);
}

// Function to go to the next slide
function goToNextSlide() {
  currentSlideIndex++;
  if (currentSlideIndex >= slides.length) {
    //exit
    currentSlideIndex = 0;
  }
  showSlide(currentSlideIndex);
}
reviewInstructionsButton.addEventListener('click', function() {
    modalContainer.style.display = 'block';
} );

// Function to review the instructions
function reviewInstructions() {
    currentSlideIndex = 0;
    showSlide(currentSlideIndex);
  }

// Add event listeners to the buttons
prevButton.addEventListener('click', goToPrevSlide);
nextButton.addEventListener('click', goToNextSlide);
reviewInstructionsButton.addEventListener('click', reviewInstructions);

// Show the first slide initially
showSlide(currentSlideIndex);

// close the content when clikcing 'X'
closeButton.addEventListener('click', function() {
    manualContainer.style.display = 'none';
});

// click anywhere on the window to close the content
window.addEventListener('click', function(e) {
    if (e.target === manualContainer) {
        manualContainer.style.display = 'none';
    }
});