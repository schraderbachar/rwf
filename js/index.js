$(document).ready(function () {
  //scrollspy
  $('.scrollspy').scrollSpy();
});
//nav bar transparent while on top of page
var navcol = $(".navbar.navbar-dark");
var bg = "bg";
var bannerImageHeight = $('#top').height();
navcol.removeClass(bg);
//add nav when not on the top
$(window).scroll(() => {
    $(this).scrollTop() > (bannerImageHeight - 50) ? navcol.addClass(bg) : navcol.removeClass(bg);
});
