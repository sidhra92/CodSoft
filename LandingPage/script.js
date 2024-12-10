const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');

// Open Sidebar
menuToggle.addEventListener('click', () => {
  sidebar.style.right = '0';
  overlay.style.display = 'block';
});

// Close Sidebar
closeBtn.addEventListener('click', () => {
  sidebar.style.right = '-250px';
  overlay.style.display = 'none';
});

overlay.addEventListener('click', () => {
  sidebar.style.right = '-250px';
  overlay.style.display = 'none';
});






// For slide show

let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
 

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Show the current slide
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  

  // Change slide every 3 seconds
  setTimeout(showSlides, 3000); // 3000ms = 3 seconds
}

// Start the slideshow
showSlides();













