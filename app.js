const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');





// Get references to the toggle button and body
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.className = savedTheme;
}

// Add click event listener to toggle button
themeToggle.addEventListener("click", () => {
  const currentTheme = body.className;
  const newTheme = currentTheme === "light-mode" ? "dark-mode" : "light-mode";
  
  // Update the theme
  body.className = newTheme;
  
  // Save the new theme in localStorage
  localStorage.setItem("theme", newTheme);
});




















hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});