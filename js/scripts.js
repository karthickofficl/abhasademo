function initZonar() { "use strict"; function firstLoad() { var e = 0, t = 0, o = setInterval((function () { $(".loader_count").html(t), t++, 100 == ++e && clearInterval(o) }), 13); TweenMax.to($(".loading-text-container"), 1, { force3D: !0, y: "-150px", opacity: 0, ease: Expo.easeInOut, delay: 1.2, onComplete: function () { TweenMax.to($(".loader-anim"), .8, { force3D: !0, bottom: "100%", ease: Expo.easeInOut }), TweenMax.to($(".loader-anim2"), .8, { force3D: !0, bottom: "100%", delay: .2, ease: Expo.easeInOut, onComplete: function () { $(".loader").fadeOut(1) } }) } }); var n = $(".content").data("pagetitle"); $(".page-subtitle span").text(n) } firstLoad(); var a = $(".bg"), j, imageSwiper, autobtn, j2, totalSlides4, mouseContr2, j3, autobtn2, j2, j2, ms1, totalSlides3, heroCarusel, totalSlides2, gridCarusel; function n() { var e; $(".gallery-items").length && ((e = $(".gallery-items").isotope({ singleMode: !0, columnWidth: ".grid-sizer, .grid-sizer-second, .grid-sizer-three", itemSelector: ".gallery-item, .gallery-item-second, .gallery-item-three", transformsEnabled: !0, transitionDuration: "700ms" })).imagesLoaded((function () { e.isotope("layout") })), $(".gallery-filters").on("click", "a.gallery-filter", (function (t) { t.preventDefault(); var o = $(this).attr("data-filter"); setTimeout((function () { e.isotope({ filter: o }) }), 200), $(".gallery-filters a").removeClass("gallery-filter-active"), $(this).addClass("gallery-filter-active"), TweenLite.to(window, .2, { scrollTo: { y: $("#port-scroll"), offsetY: 70, autoKill: !1 } }) })), $(".gallery-filter-active").text()), $(".gallery-items").isotope("on", "layoutComplete", (function (e, t) { t = e.length, $(".num-album span").html(t) })); var t = $(".gallery-item").length; $(".all-album , .num-album span").html(t) } function inithorizontalPortfolio() { var e; $("#portfolio_horizontal_container").length && (e = $("#portfolio_horizontal_container")).imagesLoaded((function (t, o, n) { $(window).width() < 764 ? (e.isotope({ itemSelector: ".portfolio_item", layoutMode: "packery", packery: { isHorizontal: !1, gutter: 0 }, resizable: !0, transformsEnabled: !0, transitionDuration: "700ms" }), e.isotope("layout"), e.removeAttr("style"), $(".horizontal-grid-wrap").getNiceScroll().remove()) : (e.isotope({ itemSelector: ".portfolio_item", layoutMode: "packery", packery: { isHorizontal: !0, gutter: 0 }, resizable: !0, transformsEnabled: !0, transitionDuration: "700ms" }), e.isotope("layout"), $(".horizontal-grid-wrap").niceScroll({ cursorwidth: "2px", cursorborder: "none", cursorborderradius: "0px", touchbehavior: !0, autohidemode: !1, cursorcolor: "#F57500", bouncescroll: !1, scrollspeed: 120, mousescrollstep: 90, grabcursorenabled: !0, horizrailenabled: !0, preservenativescrolling: !0, cursordragontouch: !1, railpadding: { top: -70, right: 0, left: 0, bottom: -4 } })), $(".horizontal-grid-wrap").scroll((function () { var e = $("#portfolio_horizontal_container").width() - $(".horizontal-grid-wrap").width(); e = $(".horizontal-grid-wrap").scrollLeft() / e * 100; $(".js-progress-bar").css("stroke-dashoffset", 100 - e) })), $(".gallery-filters").on("click", "a", (function (t) { t.preventDefault(), $(".horizontal-grid-wrap").animate({ scrollLeft: 0 }, 500); var o = $(this).attr("data-filter"); setTimeout((function () { e.isotope({ filter: o }) }), 600), $(".gallery-filters a").removeClass("gallery-filter-active"), $(this).addClass("gallery-filter-active"), $(window).width() < 778 && setTimeout((function () { TweenLite.to($(window), .7, { scrollTo: { y: $("#portfolio_horizontal_container"), offsetY: 70, autoKill: !1 } }) }), 1200) })), e.isotope("on", "layoutComplete", (function (e, t) { t = e.length, $(".num-album").html(t) })); var a = $(".portfolio_item").length; $(".all-album , .num-album").html(a) })) } function autoEnd() { autobtn.removeClass("auto_actslider"), j.autoplay.stop() } function autoStart() { autobtn.addClass("auto_actslider"), j.autoplay.start() } function setUpCarouselSlider() { var e, t, o; $(".fw-carousel .swiper-wrapper").addClass("no-horizontal-slider"), 0 < $(".fw-carousel").length && (764 <= $(window).width() && null == o && (e = $(".fw-carousel .swiper-slide").length - 1, t = $(".fw-carousel").data("mousecontrol"), o = new Swiper(".fw-carousel .swiper-container", { preloadImages: !1, loop: !1, freeMode: !1, slidesPerView: "auto", spaceBetween: 10, grabCursor: !0, mousewheel: t, speed: 1400, direction: "horizontal", scrollbar: { el: ".hs_init", draggable: !0 }, effect: "slide", pagination: { el: ".fw-carousel-counter", type: "fraction", renderFraction: function (t) { return '<span class="' + t + '"></span><span class="j2total">' + e + "</span>" } }, navigation: { nextEl: ".fw-carousel-button-next", prevEl: ".fw-carousel-button-prev" }, on: { resize: function () { $(window).width() < 640 && o.update() } } }), $(".fw-carousel.thumb-contr .swiper-slide img").each((function () { var e = $(this).attr("src"); $("<div class='thumb-img'><img src='" + e + "'></div>").appendTo(".thumbnail-wrap") })), $(".thumb-img").on("click", (function () { o.slideTo($(this).index(), 500), hideThumbnails() }))), $(window).width() < 640 && void 0 !== o && (o.destroy(), o = void 0, $(".fw-carousel .swiper-wrapper").removeAttr("style").addClass("no-horizontal-slider"), $(".swiper-slide").removeAttr("style"))) } function autoEnd2() { autobtn2.removeClass("auto_actslider2"), j3.autoplay.stop() } function autoStart2() { autobtn2.addClass("auto_actslider2"), j3.autoplay.start() } function lightGalleryInit() { $(".image-popup").lightGallery({ selector: "this", cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)", download: !1, counter: !1 }); var o = $(".lightgallery"), p = o.data("looped"); o.lightGallery({ selector: ".lightgallery a.popup-image", cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)", download: !1, loop: !1, counter: !1 }), $("#html5-videos").lightGallery({ selector: "this" }), $(".dynamic-gal").on("click", (function () { var dynamicgal = eval($(this).attr("data-dynamicPath")); $(this).lightGallery({ dynamic: !0, dynamicEl: dynamicgal, download: !1, loop: !1, counter: !1 }) })) } a.each((function (e) { $(this).attr("data-bg") && $(this).css("background-image", "url(" + $(this).data("bg") + ")") })), n(), inithorizontalPortfolio(), 0 < $(".home-half-slider").length && (j = new Swiper(".fs-gallery-wrap .swiper-container", { preloadImages: !1, loop: !0, grabCursor: !0, centeredSlides: !1, resistance: !0, resistanceRatio: .6, speed: 2400, spaceBetween: 0, parallax: !1, effect: "slide", mousewheel: !1, init: !1, pagination: { el: ".hero-slider-wrap_pagination", clickable: !0 }, navigation: { nextEl: ".hsc-next", prevEl: ".hsc-prev" }, autoplay: { delay: 2500, disableOnInteraction: !1 } }), j.on("slideChange", (function () { var e = j.realIndex + 1, t = $(".current"), o = $(".hs_counter .current"); TweenMax.to(o, .2, { force3D: !0, y: -10, opacity: 0, ease: Power2.easeOut, onComplete: function () { TweenMax.to(o, .1, { force3D: !0, y: 10 }), t.html("0" + e) } }), TweenMax.to(o, .2, { force3D: !0, y: 0, delay: .3, opacity: 1, ease: Power2.easeOut }) })), j.on("slideChangeTransitionStart", (function () { $(".hc_dec").addClass("start_anim"), $(".slider-progress-bar").removeClass("act-slider") })), j.on("slideChangeTransitionEnd", (function () { $(".hc_dec").removeClass("start_anim"), $(".slider-progress-bar").addClass("act-slider") })), imageSwiper = new Swiper(".hero-slider-img .swiper-container", { preloadImages: !1, loop: !0, resistance: !0, parallax: !0, effect: "slide" }), j.controller.control = imageSwiper, imageSwiper.controller.control = j, autobtn = $(".play-pause_slider"), autobtn.on("click", (function () { return (autobtn.hasClass("auto_actslider") ? autoEnd : autoStart)(), !1 })), setTimeout((function () { j.init(); var e = j.slides.length - 2; $(".total").html("0" + e) }), 2e3)), 0 < $(".testimonilas-carousel").length && (j2 = new Swiper(".testimonilas-carousel .swiper-container", { preloadImages: !1, slidesPerView: 2, spaceBetween: 10, loop: !0, grabCursor: !0, mousewheel: !1, centeredSlides: !0, pagination: { el: ".tc-pagination", clickable: !0 }, navigation: { nextEl: ".tc-button-next", prevEl: ".tc-button-prev" }, breakpoints: { 800: { slidesPerView: 1 } } })), setUpCarouselSlider(), 0 < $(".fs-slider").length && ($(".fs-slider.thumb-contr .swiper-slide .bg").each((function () { var e = $(this).attr("data-bg"); $("<div class='thumb-img'><img src='" + e + "'></div>").appendTo(".thumbnail-wrap") })), $(".thumb-img").on("click", (function () { j3.slideTo($(this).index() + 1, 1), hideThumbnails() })), totalSlides4 = $(".fs-slider .swiper-slide").length, $(".hsc_total").html("0" + totalSlides4), mouseContr2 = $(".fs-slider").data("mousecontrol2"), j3 = new Swiper(".fs-slider .swiper-container", { preloadImages: !0, loop: !0, grabCursor: !0, speed: 1400, spaceBetween: 0, effect: "slide", init: !1, mousewheel: mouseContr2, pagination: { el: ".fs-slider-wrap_pagination", clickable: !0 }, navigation: { nextEl: ".fsc-next", prevEl: ".fsc-prev" }, autoplay: { delay: 3500, disableOnInteraction: !1 } }), $(".hsc_counter span").html("01"), j3.on("slideChange", (function () { var e = j3.realIndex + 1; $(".hsc_counter span").html("0" + e) })), j3.on("slideChangeTransitionStart", (function () { $(".slider-progress-bar").removeClass("act-slider") })), j3.on("slideChangeTransitionEnd", (function () { $(".slider-progress-bar").addClass("act-slider") })), autobtn2 = $(".play-pause_slider2"), autobtn2.on("click", (function () { return (autobtn2.hasClass("auto_actslider2") ? autoEnd2 : autoStart2)(), !1 })), setTimeout((function () { j3.init() }), 2e3)), 0 < $(".center-carousel").length && (j2 = new Swiper(".center-carousel .swiper-container", { preloadImages: !0, slidesPerView: "auto", spaceBetween: 10, loop: !0, grabCursor: !0, mousewheel: !1, centeredSlides: !0, autoHeight: !1, pagination: { el: ".ss-slider-pagination", clickable: !0 }, navigation: { nextEl: ".ccsw-next", prevEl: ".ccsw-prev" } })), 0 < $(".single-slider").length && (j2 = new Swiper(".single-slider .swiper-container", { preloadImages: !1, slidesPerView: 1, spaceBetween: 0, loop: !0, autoHeight: !0, grabCursor: !0, mousewheel: !1, pagination: { el: ".ss-slider-pagination", clickable: !0 }, navigation: { nextEl: ".ss-slider-cont-next", prevEl: ".ss-slider-cont-prev" } })), 0 < $(".slideshow-container_wrap").length && (ms1 = new Swiper(".slideshow-container_wrap .swiper-container", { preloadImages: !1, loop: !0, speed: 1400, spaceBetween: 0, effect: "fade", init: !1, autoplay: { delay: 2500, disableOnInteraction: !1 }, pagination: { el: ".fcwc-pagination", clickable: !0 } }), setTimeout((function () { ms1.init() }), 2e3)), 0 < $(".hero-carousel ").length && (totalSlides3 = $(".hero-carousel .swiper-slide").length, heroCarusel = new Swiper(".hero-carousel .swiper-container", { preloadImages: !1, loop: !0, centeredSlides: !0, freeMode: !1, slidesPerView: 3, spaceBetween: 6, grabCursor: !0, mousewheel: !1, parallax: !0, speed: 1400, effect: "slide", init: !1, autoplay: { delay: 2500, disableOnInteraction: !1 }, pagination: { el: ".fs-slider-wrap_pagination", clickable: !0 }, navigation: { nextEl: ".ss-slider-cont-next", prevEl: ".ss-slider-cont-prev" }, breakpoints: { 768: { slidesPerView: 2 }, 640: { slidesPerView: 1, centeredSlides: !1 } } }), $(".hsc_counter span").html("01"), $(".hsc_total").html("0" + totalSlides3), heroCarusel.on("slideChange", (function () { var e = heroCarusel.realIndex + 1; $(".hsc_counter span").html("0" + e) })), heroCarusel.on("slideChangeTransitionStart", (function () { $(".slider-progress-bar").removeClass("act-slider") })), heroCarusel.on("slideChangeTransitionEnd", (function () { $(".slider-progress-bar").addClass("act-slider") })), setTimeout((function () { heroCarusel.init() }), 2e3)), 0 < $(".grid-carousel ").length && (totalSlides2 = $(".grid-carousel .swiper-slide").length, gridCarusel = new Swiper(".grid-carousel .swiper-container", { preloadImages: !0, loop: !0, centeredSlides: !1, freeMode: !1, slidesPerView: 2, spaceBetween: 4, grabCursor: !0, mousewheel: !1, parallax: !1, speed: 1400, navigation: { nextEl: ".gc-slider-cont-next", prevEl: ".gc-slider-cont-prev" }, breakpoints: { 768: { slidesPerView: 2 }, 640: { slidesPerView: 1 } } })), lightGalleryInit(), $(".stats").appear((function () { $(".num").countTo() })), $(".skillbar-box").appear((function () { $(this).find("div.skillbar-bg").each((function () { $(this).find(".custom-skillbar").delay(600).animate({ width: $(this).attr("data-percent") }, 1500) })) })), $(".piechart-holder").appear((function () { $(this).find(".chart").each((function () { var e = $(".piechart-holder").attr("data-skcolor"); $(".chart").easyPieChart({ barColor: e, trackColor: "#eee", scaleColor: "#eee", size: "70", lineWidth: "12", lineCap: "butt", animate: 3500, easing: "easeInBounce", onStep: function (e, t, o) { $(this.el).find(".percent").text(Math.round(o)) } }) })) })); var ssl_total = $("section.scroll_sec").length; $(".sc_total").text("0" + ssl_total), $(".page-scroll-nav_wrap ").singlePageNav({ filter: ":not(.external)", updateHash: !1, offset: 70, threshold: 120, speed: 1200, currentClass: "act-sec" }), $(".custom-scroll-link").on("click", (function () { if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") || location.hostname === this.hostname) { var e = $(this.hash); if ((e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")).length) return TweenLite.to($("html,body"), 1, { scrollTo: { y: e.offset().top, offsetY: 80, autoKill: !1 } }), !1 } })), $(".to-top").on("click", (function () { TweenLite.to(window, 2, { scrollTo: { y: 0, offsetY: 0, autoKill: !1 } }) })); var progressBar = $(".js-progress-bar"), $window = $(window); $window.on("scroll", (function (e) { e = $(document).height(); var t = $(window).height(); t = $(window).scrollTop() / (e - t) * 100; progressBar.css("stroke-dashoffset", 100 - t) })), $(".hero-decor-let").rotaterator({ fadeSpeed: 500, pauseSpeed: 1200 }); var $window = $(window); function csselem() { $(".half-slider-item").css({ height: $(".half-slider-wrap").outerHeight(!0) }), $(".half-slider-img-item").css({ height: $(".half-slider-img").outerHeight(!0) }), $(".fs-slider-item").css({ height: $(".fs-slider-wrap").outerHeight(!0) - 6 + "px" }), $(".ms-item_fs").css({ height: $(".slideshow-container_wrap").outerHeight(!0) }), $(".horizontal-grid-wrap").css({ height: $(".hor-content_padd").outerHeight(!0) - 75 + "px" }), $(".fw-carousel .swiper-container").css({ height: $(".fw-carousel").outerHeight(!0) }) } csselem(), $window.resize((function () { csselem(), inithorizontalPortfolio() })), $(".accordion a.toggle").on("click", (function (e) { e.preventDefault(), $(".accordion a.toggle").removeClass("act-accordion"), $(this).addClass("act-accordion"), $(this).next("div.accordion-inner").is(":visible") ? $(this).next("div.accordion-inner").slideUp() : ($(".accordion a.toggle").next("div.accordion-inner").slideUp(), $(this).next("div.accordion-inner").slideToggle()) })); var coninw = $(".contact-info-wrap"), coninbtn = $(".contact-info-btn"); function showConInfo() { coninw.addClass("vis-coninfwrap"), coninbtn.removeClass("isconin-btn_vis") } function hideConInfo() { coninw.removeClass("vis-coninfwrap"), coninbtn.addClass("isconin-btn_vis") } coninbtn.on("click", (function () { ($(this).hasClass("isconin-btn_vis") ? showConInfo : hideConInfo)() })), $(".close_ciw").on("click", (function (e) { e.preventDefault(), hideConInfo() })), $(".proces-details-content-wrap").niceScroll({ cursorwidth: "2px", cursorborder: "none", cursorborderradius: "0px", cursorcolor: "#F57500", zindex: "10", background: "rgba(255,255,255,0.1)", autohidemode: !1 }), $(".hidden-contact_form-wrap_inner").niceScroll({ cursorwidth: "0", cursorborder: "none", cursorborderradius: "0px" }), $(".initscroll").niceScroll({ cursorwidth: "2px", cursorborder: "none", cursorborderradius: "0px", cursorcolor: "#F57500", zindex: "2", background: "#eee", autohidemode: !1 }), $(".show-phdc").on("click", (function () { var e = $(this).parent(".process-details").find(".proces-details-content"); TweenMax.to(e, 1.2, { force3D: !0, bottom: 0, ease: Expo.easeInOut }) })), $(".close-hidden_pdc").on("click", (function () { var e = $(this).parents(".process-details").find(".proces-details-content"); TweenMax.to(e, .6, { force3D: !0, bottom: "-100%", ease: Expo.easeInOut }) })); var thumbcont = $(".thumbnail-container"), thumbItrm = $(".thumb-img"), stbtn = $(".show_thumbnails"), latlog, popupTextit, map, offset, offset, greenIcon; function showThumbnails() { TweenMax.to(thumbcont, 1, { force3D: !0, top: 0, ease: Expo.easeInOut, onComplete: function () { thumbItrm.addClass("visthumbnails"), setTimeout((function () { thumbcont.addClass("visthumbnails") }), 200) } }), stbtn.removeClass("unvisthum") } function hideThumbnails() { thumbcont.removeClass("visthumbnails"), thumbItrm.removeClass("visthumbnails"), TweenMax.to(thumbcont, 1, { force3D: !0, delay: .2, top: "100%", ease: Expo.easeInOut, onComplete: function () { TweenMax.to(thumbcont, .1, { force3D: !0, left: 0, top: "100%", ease: Expo.easeInOut }) } }), stbtn.addClass("unvisthum") } function showDetails() { $(".det-overlay").fadeIn(400), TweenMax.to($(".hid-det-anim"), .8, { force3D: !0, left: "0", ease: Expo.easeInOut, onComplete: function () { TweenMax.to($(".fix-pr-det-dec2"), .5, { force3D: !0, width: 0, ease: Expo.easeInOut }), TweenMax.to($(".fix-pr-det-dec"), .8, { force3D: !0, delay: .2, left: "100%", ease: Expo.easeInOut }) } }), $(".shibtn").removeClass("unvisthum2"), hideThumbnails(), $(".fw-carousel-wrap").addClass("viscale") } function hideDetails() { $(".det-overlay").fadeOut(400), TweenMax.to($(".hid-det-anim"), .8, { force3D: !0, left: "-900px", ease: Expo.easeInOut, onComplete: function () { TweenMax.to($(".fix-pr-det-dec2"), .1, { force3D: !0, width: "150px", ease: Expo.easeInOut }), TweenMax.to($(".fix-pr-det-dec"), .1, { force3D: !0, left: "0", ease: Expo.easeInOut }) } }), $(".shibtn").addClass("unvisthum2"), $(".fw-carousel-wrap").removeClass("viscale") } function hoverdirInit() { $(".horizontal-grid-wrap .portfolio_item  , .gallery-items .gallery-item").each((function () { $(this).hoverdir() })) } function videoint() { var e = $(".background-youtube-wrapper").data("vid"), t = $(".background-youtube-wrapper").data("mv"); $(".background-youtube-wrapper").YTPlayer({ fitToBackground: !0, videoId: e, pauseOnScroll: !0, mute: t, callback: function () { $(".background-youtube-wrapper").data("ytPlayer").player } }); var o = $(".background-vimeo").data("vim"), n = $(".background-vimeo"), a = $(".media-container"); e = $(".background-vimeo iframe "), t = $(".video-container"); n.append('<iframe src="//player.vimeo.com/video/' + o + '?background=1"  frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen ></iframe>'), $(".video-holder").height(a.height()), 1024 < $(window).width() ? 0 < $(".video-holder").length && (a.height() / 9 * 16 > a.width() ? (e.height(a.height()).width(a.height() / 9 * 16), e.css({ "margin-left": -1 * $("iframe").width() / 2 + "px", top: "-75px", "margin-top": "0px" })) : (e.width($(window).width()).height($(window).width() / 16 * 9), e.css({ "margin-left": -1 * $("iframe").width() / 2 + "px", "margin-top": -1 * $("iframe").height() / 2 + "px", top: "50%" }))) : ($(window).width(), $(".video-holder").height(a.height()), e.height(a.height())), t.css("width", $(window).width() + "px"), t.css("height", Number(.5625 * $(window).width()) + "px"), t.height() < $(window).height() && (t.css("height", $(window).height() + "px"), t.css("width", Number(1280 / 720 * $(window).height()) + "px")) } stbtn.on("click", (function () { ($(this).hasClass("unvisthum") ? showThumbnails : hideThumbnails)() })), $(".shibtn").on("click", (function () { ($(this).hasClass("unvisthum2") ? showDetails : hideDetails)() })), $(".act-closedet").on("click", (function () { hideDetails() })), hoverdirInit(), $(".pr-det-container , .column-wrap").on({ mouseenter: function () { $(".element-item").addClass("white_blur") }, mouseleave: function () { $(".element-item").removeClass("white_blur") } }), $(".column-wrap.dark-bg").on({ mouseenter: function () { $(".element-item").removeClass("white_blur") }, mouseleave: function () { $(".element-item").removeClass("white_blur") } }), $("a , .btn ,   textarea,   input  , .leaflet-control-zoom , .aside-show_cf , .close-contact_form , .closedet_style ").on({ mouseenter: function () { $(".element-item").addClass("elem_hover") }, mouseleave: function () { $(".element-item").removeClass("elem_hover") } }), $("  .swiper-slide ,  #portfolio_horizontal_container").on({ mouseenter: function () { $(".element-item").addClass("slider_hover") }, mouseleave: function () { $(".element-item").removeClass("slider_hover") } }), $(".swiper-slide a , .next-project-swiper-link , #portfolio_horizontal_container a").on({ mouseenter: function () { $(".element-item").removeClass("slider_hover") }, mouseleave: function () { $(".element-item").addClass("slider_hover") } }), $(".next-project-swiper-link").on({ mouseenter: function () { $(".element-item").addClass("slider_linknext") }, mouseleave: function () { $(".element-item").removeClass("slider_linknext") } }), $(".nav-overlay , .det-overlay").on({ mouseenter: function () { $(".element-item").addClass("close-icon") }, mouseleave: function () { $(".element-item").removeClass("close-icon") } }), $("#contactform").submit((function () { var e = $(this).attr("action"); return $("#message").slideUp(750, (function () { $("#message").hide(), $("#submit").attr("disabled", "disabled"), $.post(e, { name: $("#name").val(), email: $("#email").val(), phone: $("#phone").val(), subject: $("#subject").val(), comments: $("#comments").val(), verify: $("#verify").val() }, (function (e) { document.getElementById("message").innerHTML = e, $("#message").slideDown("slow"), $("#submit").removeAttr("disabled"), null != e.match("success") && $("#contactform").slideDown("slow") })) })), !1 })), $("#contactform input, #contactform textarea").keyup((function () { $("#message").slideUp(1500) })), 0 < $("#map-single").length && (latlog = $("#map-single").data("latlog"), popupTextit = $("#map-single").data("popuptext"), map = L.map("map-single").setView(latlog, 15), L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png").addTo(map), offset = 1024 < $(window).width() ? .15 * map.getSize().x : 0 * map.getSize().x, map.panBy(new L.Point(-offset, 0), { animate: !1 }), greenIcon = L.icon({ iconUrl: "images/marker.png", iconSize: [40, 40], popupAnchor: [0, -26] }), L.marker(latlog, { icon: greenIcon }).addTo(map).bindPopup(popupTextit)), $(".show_contact-form").on("click", (function (e) { e.preventDefault(), $(".content-inner").addClass("vis-con-form") })), $(".close-contact_form").on("click", (function () { $(".content-inner").removeClass("vis-con-form"), $("#message").slideUp(500), $(".custom-form").find("input[type=text], textarea").val("") })), 0 < $(".video-holder-wrap").length && videoint(), $(".blog-btn").on("click", (function () { return $(this).parent(".blog-btn-filter").find("ul").slideToggle(500), !1 })), $(".act-filter").on("click", (function () { return $(".init_hidden_filter").slideToggle(300), !1 })), $(".page-scroll-nav_wrap ul li a  , .gallery-filters a").on("click", (function () { $(window).width() < 565 && $(".init_hidden_filter").delay(600).slideUp(300) })), $("#menu").menu(), $(".sliding-menu li a.nav").parent("li").addClass("submen-dec"); var nbw = $(".nav-button"), nh = $(".nav-holder"), nhw = $(".nav-holder-wrap"), nho = $(".nav-overlay"), nhl = $(".nav-holder-wrap_line"), nnvw = $("nav.nav-inner"), nfw = $(".nav-footer"), nhwd = $(".nav-holder-wrap_dec"); function showMenu() { nh.addClass("nh_vis"), nho.fadeIn(500), TweenMax.to(nhwd, .6, { force3D: !0, left: 0, ease: Expo.easeInOut }), TweenMax.to(nfw, .6, { force3D: !0, delay: .3, bottom: 0, ease: Expo.easeInOut }), TweenMax.to(nhl, 1.2, { force3D: !0, delay: .3, top: 0, ease: Expo.easeInOut }), TweenMax.to(nnvw, .8, { force3D: !0, opacity: "1", x: 0, delay: .6, ease: Expo.easeInOut }), nhw.removeClass("but-hol"), nbw.addClass("cmenu") } function hideMenu() { TweenMax.to(nhl, .3, { force3D: !0, top: "100%", ease: Expo.easeInOut, onComplete: function () { TweenMax.to(nfw, .2, { force3D: !0, bottom: "-70px", ease: Expo.easeInOut }), TweenMax.to(nnvw, .4, { force3D: !0, opacity: "0", x: "50px", ease: Expo.easeInOut, onComplete: function () { TweenMax.to(nhwd, .4, { force3D: !0, left: "100%", ease: Expo.easeInOut }), TweenMax.to($(".nhw-col"), .4, { force3D: !0, opacity: "0", transform: "  rotateX(80deg)", ease: Expo.easeInOut }), nh.removeClass("nh_vis"), nho.fadeOut(500) } }) } }), nhw.addClass("but-hol"), nbw.removeClass("cmenu") } nbw.on("click", (function () { (nhw.hasClass("but-hol") ? showMenu : hideMenu)() })), nho.on("click", (function () { hideMenu() })), $(".share-container").share({ networks: ["facebook", "pinterest", "twitter", "linkedin", "tumblr"] }); var shrcn = $(".share-container"), swra = $(".share-wrapper"), clsh = $(".close-share-btn"), shic = $(".share-icon"), ssbtn = $(".showshare"); function showShare() { ssbtn.addClass("uncl-share"), shrcn.removeClass("isShare"), TweenMax.to(swra, .6, { force3D: !1, width: "225px", ease: Expo.easeInOut, onComplete: function () { TweenMax.to(clsh, .4, { force3D: !0, right: "0" }), shic.each((function (e) { var t = $(this); setTimeout((function () { TweenMax.to(t, 1, { force3D: !1, opacity: "1" }) }), 130 * e) })) } }) } function hideShare() { ssbtn.removeClass("uncl-share"), shrcn.addClass("isShare"), TweenMax.to($(".share-icon"), 1, { force3D: !1, opacity: "0" }), TweenMax.to(clsh, .4, { force3D: !0, right: "-75px", onComplete: function () { TweenMax.to(swra, .6, { force3D: !1, delay: .2, width: "0", ease: Expo.easeInOut }) } }) } clsh.on("click", (function () { hideShare() })), ssbtn.on("click", (function () { ($(".share-container").hasClass("isShare") ? showShare : hideShare)() })) } function contentAnimShow() { $(".lg-backdrop , .lg-outer").remove(), $(".nav-button").removeClass("cmenu"), $(".showshare").removeClass("uncl-share"), $(".page-load").fadeIn(1), $(".pl-row-anim2").each((function (e, t) { (new TimelineLite).to(t, .6, { force3D: !0, right: "0", ease: Expo.easeInOut }, .1 * e) })), $(".pl-row-anim").each((function (e, t) { (new TimelineLite).to(t, .8, { force3D: !0, right: "0", ease: Expo.easeInOut }, .1 * e) })), TweenMax.to($(".page-subtitle span"), .9, { force3D: !0, y: -50, opacity: 0, delay: .7, ease: Power2.easeOut, onComplete: function () { TweenMax.to($(".page-subtitle span"), .1, { force3D: !0, y: 50 }) } }), setTimeout((function () { $("html, body").animate({ scrollTop: 0 }, { queue: !0, duration: 10 }) }), 1e3) } function contentAnimHide() { var e = $(".content").data("pagetitle"); $(".page-subtitle span").text(e), TweenMax.to($(".page-subtitle span"), .9, { force3D: !0, y: 0, opacity: 1, delay: .8, ease: Power2.easeOut }), $(".page-load").addClass("act_pl"), $(".pl-spinner").addClass("act-loader"), setTimeout((function () { $(".pl-spinner").removeClass("act-loader"), $(".page-load").removeClass("act_pl"), $(".pl-row-anim").each((function (e, t) { (new TimelineLite).to(t, .6, { force3D: !0, left: "100%", ease: Expo.easeInOut }, .1 * e) })), $(".pl-row-anim2").each((function (e, t) { (new TimelineLite).to(t, .8, { force3D: !0, left: "100%", ease: Expo.easeInOut }, .1 * e) })), setTimeout((function () { $(".page-load").fadeOut(1), TweenMax.to($(".pl-row-anim , .pl-row-anim2"), 0, { force3D: !0, left: "0", right: "100%" }) }), 1200) }), 1500) } function initvideo() { var e = { Android: function () { return navigator.userAgent.match(/Android/i) }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i) }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i) }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i) }, Windows: function () { return navigator.userAgent.match(/IEMobile/i) }, any: function () { return e.Android() || e.BlackBerry() || e.iOS() || e.Opera() || e.Windows() } }; trueMobile = e.any(), trueMobile && $("  .background-vimeo , .background-youtube-wrapper ").remove() } function mouseMove(e) { var t = window.pageYOffset || document.documentElement.scrollTop; mouse.x = e.pageX, mouse.y = e.pageY - t } function updatePosition() { active || (pos.x += (mouse.x - pos.x) * ratio, pos.y += (mouse.y - pos.y) * ratio, TweenMax.set(ball, { x: pos.x, y: pos.y })) } var mouse, pos, ratio, active, ball; function readyFunctions() { initvideo(), initZonar() } $("<div class='page-load'><span class='pl-spinner'></span></div>").appendTo("#main"), $.fn.duplicate = function (e, t) { for (var o = [], n = 0; n < e; n++)$.merge(o, this.clone(t).get()); return this.pushStack(o) }, $("<div class='pl-row'><span class='pl-row-anim'></span><span class='pl-row-anim2'></span></div>").duplicate(4).appendTo(".page-load"), 0 < $(".element-item").length && (mouse = { x: 0, y: 0 }, pos = { x: 0, y: 0 }, ratio = .15, active = !1, ball = document.querySelector(".element-item"), TweenLite.set(ball, { xPercent: -50, yPercent: -50 }), document.addEventListener("mousemove", mouseMove), TweenMax.ticker.addEventListener("tick", updatePosition)), $((function () { $.coretemp({ reloadbox: "#wrapper", outDuration: 700, inDuration: 200 }), readyFunctions(), $(document).on({ ksctbCallback: function () { readyFunctions() } }) })), document.addEventListener("gesturestart", (function (e) { e.preventDefault() }));