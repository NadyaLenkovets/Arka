$(function () {

   /* Slider slick  #introSlider
      =============================*/

      $('#intro-slider').slick({
         infinite: true,
         autoplay: true,
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
         dots: false,
         fade: true,
         // adaptiveHeight: true,
         responsive: [
            {
               breakpoint: 767,
               settings: {
                  slidesToShow: 1,
               }
            }
         ]
 
      });




      /* burger-menu
      =============================*/

      $('.header__burger').click(function (event) {
         $('.header__burger,.header-nav').toggleClass('active');
         $('body').toggleClass('lock');
         if ($('.header-nav').hasClass('active')) {
            $('.header-nav__link').click(function (event) {
               $('.header__burger,.header-nav').removeClass('active');
               $('body').removeClass('lock');
            });
              
         }
      });




      /* scroll-up BUTTON
      =============================*/

       // При нажатии кнопки идти вверх;

       document.getElementById('button-up').onclick = function scrollUpFunction() {
         document.body.scrollTop = 0;
         document.documentElement.scrollTop = 0;
      }
   
   
      // Кнопка появляется, когда проскролили 500px
   
      window.onscroll = function() {scrollFunction()}
   
      function scrollFunction() {
         if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            document.getElementById('button-up').style.opacity = "1";
            
         } else {
            document.getElementById('button-up').style.opacity = "0";
         }
      }



      /* Animation 
      =============================*/

      const animItems = document.querySelectorAll('.anim-items');

      if (animItems.length > 0) {
         window.addEventListener('scroll', animOnScroll);
         function animOnScroll() {
            for (let i = 0; i < animItems.length; i++) {
               const animItem = animItems[i];
               const animItemHeight = animItem.offsetHeight;
               const animItemOffset = offset(animItem).top;
               const animStart = 4;

               let animItemPoint = window.innerHeight - animItemHeight / animStart;

               if (animItemHeight > window.innerHeight) {
                  animItemPoint = window.innerHeight - window.innerHeight / animStart;
               }

               if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                  animItem.classList.add('anim-active');
               } else {
                  if (!animItem.classList.contains('anim-no-hide')) {
                     animItem.classList.remove('anim-active');
                  }
               }
            }
         }

         function offset(el) {
            const rect = el.getBoundingClientRect(),
               scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
               scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
         }

         setTimeout(() => {
            animOnScroll();
         }, 300);
      

         animOnScroll();
      }



});