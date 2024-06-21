let toggle = document.getElementsByClassName('toggle_bar');
        function toggle_bar() {
        let element = document.querySelector(".toggle");
        element.classList.toggle("show")
        let element2 = document.querySelector(".bar")
        element2.classList.toggle("bar2")
}

let typed = new Typed(".auto-input", {
        strings: ["CSE Partner", "Helper", "Resources"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
})

// Get the slider elements
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Set the initial active slide
let activeSlide = 0;
slides[activeSlide].classList.add('active');

// Add event listeners to the navigation buttons
prevButton.addEventListener('click', () => {
  // Decrement the active slide index
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  updateSlider();
});

nextButton.addEventListener('click', () => {
  // Increment the active slide index
  activeSlide++;
  if (activeSlide >= slides.length) {
    activeSlide = 0;
  }
  updateSlider();
});

// Update the slider by hiding all slides and showing the active one
function updateSlider() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  slides[activeSlide].classList.add('active');
}

let typed2 = new Typed(".auto-input2", {
  strings: ["Coder", "Photographer", "Name Kunal Sharma"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
})
