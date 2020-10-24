(function ($) {
  "use strict";

  $(window).on("load", function () {
    /*-------------- Wow.js --------------*/

    $(".loader").fadeOut(1000);
    var wow = new WOW({
      offset: 150,
      mobile: false,
    });

    wow.init();
  });

  /*------------------- Animsition Loader -------------------*/

  $(".animsition").animsition({
    inClass: "fade-in-up",
    outClass: "fade-out-up",
    inDuration: 1500,
    outDuration: 800,
    linkElement: "a.project-box",
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: "body", //animsition wrapper element
    loadingClass: "spinner",
    loadingInner:
      '<div class="double-bounce1"></div><div class="double-bounce2"></div>', // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: ["animation-duration", "-webkit-animation-duration"],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay: false,
    overlayClass: "animsition-overlay-slide",
    overlayParentElement: "body",
    transition: function (url) {
      window.location.href = url;
    },
  });

  /*------------------- magnificPopup -------------------*/

  $(".popup-youtube").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-with-zoom",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });

  $(".image-popup").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    closeBtnInside: false,
    mainClass: "mfp-with-zoom mfp-img-mobile",
    image: {
      verticalFit: true,
      titleSrc: function (item) {
        return (
          item.el.attr("title") +
          ' &middot; <a class="image-source-link" href="' +
          item.el.attr("data-source") +
          '" target="_blank">Full Image</a>'
        );
      },
    },
    zoom: {
      enabled: true,
    },
  });

  /*-------------------------------------------------------------------------------
	  Menu
	-------------------------------------------------------------------------------*/

  $(".navbar-toggle").on("click", function () {
    $("body").removeClass("menu-is-closed").addClass("menu-is-opened");
  });

  $(".close-menu, .click-capture, .menu-list li a").on("click", function () {
    $("body").removeClass("menu-is-opened").addClass("menu-is-closed");
    $(".menu-list ul").slideUp(300);
  });

  $(".menu-list li a").on("click", function () {
    $(".menu-list li").removeClass("active");
    $(this).closest("li").addClass("active");
  });

  $(".col-resume").on("mouseover", function () {
    $(".section-bg.mask").addClass("hide");
  });

  $(".col-resume").on("mouseleave", function () {
    $(".section-bg.mask").removeClass("hide");
  });

  /*-------------------------------------------------------------------------------
	  Full screen sections
	-------------------------------------------------------------------------------*/

  function navbarFullpage() {
    if ($(".pp-section.active").scrollTop() > 0) {
      $(".navbar-fullpage").addClass("navbar-fixed");
    } else {
      $(".navbar-fullpage").removeClass("navbar-fixed");
    }
  }

  navbarFullpage();

  function navbar() {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 0) {
        $(".navbar").addClass("navbar-fixed");
      } else {
        $(".navbar").removeClass("navbar-fixed");
      }
    });
  }

  navbar();

  if ($(".pagepiling").length > 0) {
    $(".pagepiling").pagepiling({
      scrollingSpeed: 280,
      loopBottom: true,
      anchors: [
        "page1",
        "page2",
        "page3",
        "page4",
        "page5",
        "page6",
        "page7",
        "page8",
      ],
      afterLoad: function (anchorLink, index) {
        navbarFullpage();
      },
    });
  }

  $(".pp-scrollable").on("scroll", function () {
    var scrollTop = $(this).scrollTop();
    if (scrollTop > 0) {
      $(".navbar-fullpage").addClass("navbar-fixed");
    } else {
      $(".navbar-fullpage").removeClass("navbar-fixed");
    }
  });

  /*------------------------------------------------------------------------------
	   Scroller navigation
	/-------------------------------------------------------------------------------*/

  $("#pp-nav")
    .remove()
    .appendTo(".animsition")
    .addClass("white right-boxed hidden-xs");

  $(".pp-nav-up").on("click", function () {
    $.fn.pagepiling.moveSectionUp();
  });

  $(".pp-nav-down").on("click", function () {
    $.fn.pagepiling.moveSectionDown();
  });

  /*-------------------------------------------------------------------------------
	  Change background on project section
	-------------------------------------------------------------------------------*/

  $(".gallery .item a").on("mouseover", function () {
    var index = $(".gallery .item a").index(this);
    $(".gallery .item a").removeClass("active");
    $(this).addClass("active");
    $(".bg-changer .section-bg")
      .removeClass("active")
      .eq(index)
      .addClass("active");
  });

  /*-------------------------------------------------------------------------------
	  Gallery filter
	-------------------------------------------------------------------------------*/

  $(".list").on("click", function () {
    const value = $(this).attr("data-filter");
    if (value == "*") {
      $(".item").show("1000");
    } else {
      $(".item")
        .not("." + value)
        .hide("1000");
      $(".item")
        .filter("." + value)
        .show("1000");
    }
  });

  $(".list").on("click", function () {
    $(this).addClass("selected").siblings().removeClass("selected");
  });
})(jQuery);
