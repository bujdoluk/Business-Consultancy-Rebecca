window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
//var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= 80) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

$(".numscroller").counterUp({ delay: 5 }, { time: 1000 });

/* $(".header__nav-list-item a").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html", "body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      2000
    );
  }
});
 */

const scroll = new SmoothScroll('.header__nav-list-item a[href*="#"]', {
  speed: 1500,
});

// RESPONSIVE NAVBAR

const navSlide = () => {
  const burger = document.querySelector(".header__nav-icon");
  const nav = document.querySelector(".header__nav-list");
  const navLinks = document.querySelectorAll(".header__nav-list li");

  // Toggle navigation
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    // Animation of links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinksFade 0.5s ease forwards ${
          index / 6 + 0
        }s`;
      }
    });

    // Burger cross animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 150) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
