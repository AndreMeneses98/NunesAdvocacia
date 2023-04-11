$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        stagePadding: 1,
        loop:true,
        margin:1,
        nav:true,
        autoplay: true,
        autoplayTimeout:3800,
        smartSpeed:1500,
        dots: false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
      });
})