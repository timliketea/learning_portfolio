$(function(){


// skroll

  $("body").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

  // mixitup  

var mixer = mixitup('.work__content', {
  animation: {
    duration: 900
}
});

});

// Fancybox

Fancybox.bind("[data-fancybox]", {

});

// burger menu

const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    menuList.classList.toggle('active');
});

const menuBtnActive = document.querySelector('.menu__btn');

menuBtnActive.addEventListener('click', function() {
    document.body.classList.toggle('menu-open');
});

// Sticky header

$(document).ready(function() {
  var $menu = $(".menu");
  var $headerContent = $(".header__content");
  var $menuLink = $(".menu__link");
  var $menuBtn = $(".menu__btn");
  var $menuList = $(".menu__list");
  var initialScroll = 0;
  var menuHeight = $menu.height();

  $(window).scroll(function() {
    var currentScroll = $(this).scrollTop();
    var isScrollPastMenu = currentScroll > initialScroll + menuHeight;

    $menu.toggleClass("fixed", isScrollPastMenu);
    $headerContent.toggleClass("fixed", isScrollPastMenu);
  });

  $menuLink.on("click", function() {
    $menuBtn.removeClass("active");
    $menuList.removeClass("active");
  });
});
