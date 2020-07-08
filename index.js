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
