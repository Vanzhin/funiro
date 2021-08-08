"use strict"
import Vue from 'vue'
import App from './App.vue'
import css from "./css/style.css";




new Vue({
    render: h => h(App),
}).$mount('#app');

const swiper1 = new Swiper('.slider-main__body', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    observer: true,
    observerParents: true,
    slidesPerView: 'auto',
    spaceBetween: 32,
    watchOverflow: true,
    speed: 800,
    preloadImages: false,
    parallax: true,
  
    // If we need pagination
    pagination: {
      el: '.controls-slider-main__dots',
      clickable: 'true',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider-main .slider-arrow_next',
      prevEl: '.slider-main .slider-arrow_prev',
    },

  
  });
  const swiper2 = new Swiper('.slider-rooms__body', {
    // Optional parameters
    loop: true,
    observer: true,
    observerParents: true,
    slidesPerView: 'auto',
    spaceBetween: 24,
    watchOverflow: true,
    speed: 800,
    preloadImages: false,
    parallax: true,
    loopAdditionalSlides: 5,

  
    // If we need pagination
    pagination: {
      el: '.slider-rooms__dotts',
      clickable: 'true',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider-rooms .slider-arrow_next',
      prevEl: '.slider-rooms .slider-arrow_prev',
    },

  
  });

// dynamic adaptive initialization
    const da = new DynamicAdapt("max");
    da.init();

// smoth transition href
$(function () {
    $('a[href*=#]').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                    scrollTop: targetOffset
                }, 500); //скорость прокрутки
                return false;
            }
        }
    });
});