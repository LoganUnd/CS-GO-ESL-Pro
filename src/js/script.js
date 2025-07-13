import '../sass/style.scss';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "purecss/build/grids-min.css";
import "purecss/build/grids-responsive-min.css"

// Test image import
import testImage from '../img/Menwithweapon-1.png';
console.log('Image path:', testImage);

// Set the background image using CSS custom property
document.documentElement.style.setProperty('--promo-bg-image', `url(${testImage})`);

// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


try {
	const tabs = document.querySelectorAll(".events__match-matches");
	const contents = document.querySelectorAll(".catalog__content-item, .catalog__content-item-3");

	tabs.forEach((tab, index) => {
		tab.addEventListener("click", () => {
			// Remove active class from all tabs
			tabs.forEach((t) => t.classList.remove("catalog__tab_active"));
			
			// Hide all content sections
			contents.forEach((c) => {
				c.style.display = "none";
			});

			// Add active class to clicked tab
			tab.classList.add("catalog__tab_active");
			
			// Show corresponding content
			if (contents[index]) {
				contents[index].style.display = "block";
			}
		});
	});

	// Show first content on page load
	contents.forEach((c, i) => {
		c.style.display = i === 0 ? "flex" : "none";
	});
} catch (e) {}

try {
	const tabs = document.querySelectorAll(".catalog__tab");
	const contents = document.querySelectorAll(".catalog__content-item, .catalog__content-item-2");

	tabs.forEach((tab, index) => {
		tab.addEventListener("click", () => {
			// Remove active class from all tabs
			tabs.forEach((t) => t.classList.remove("catalog__tab_active"));
			
			// Hide all content sections
			contents.forEach((c) => {
				c.style.display = "none";
			});

			// Add active class to clicked tab
			tab.classList.add("catalog__tab_active");
			
			// Show corresponding content
			if (contents[index]) {
				contents[index].style.display = "block";
			}
		});
	});

	contents.forEach((c, i) => {
		c.style.display = i === 0 ? "block" : "none";
	});
} catch (e) {
	console.error("Error in tab switching:", e);
}