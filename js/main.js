$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      loop:true,
      nav:true,
      navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
      autoplay:true,
      autoplayTimeout:5000,
      dots:false,
      autoplayHoverPause: true,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  });
});
$(document).ready(function(){


  $('.Testimonials_slider').owlCarousel({
    loop:true,
  margin:0,
  items:1,
  autoplay:true,
  navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
  dots:false,
  autoplayHoverPause: true,
  autoplaySpeed: 800,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  responsive:{
      0:{
          items:1,
          dots:false,
          nav:false,
      },
      767:{
          items:1,
          dots:false,
          nav:false,
      },
      992:{
          items:1,
          nav:false,
          dots:false,
      },
      1200:{
          items:1,
          nav:false,
          dots:false,
      },
      1500:{
          items:1,
          dots:false,
      }
  }

  });
  /*aos plugin*/
  AOS.init({
      duration:2000,

  });

$(window).scroll(function(){
  if($(this).scrollTop() > 1220){
    $('#topBtn').fadeIn();
  }else {
    $('#topBtn').fadeOut();
  }
})
  $('#topBtn').click(function(){
    $('html,body').animate({
      scrollTop: 0},800);
  });
});
var Preloader=document.getElementById("pageLoader");
function myFunction(){
  Preloader.style.display="none"}
  var pageload=document.getElementById("pageLoader");
  function mainFunction(){
    pageload.style.display="none";
  }
