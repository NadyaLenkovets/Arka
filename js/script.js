$(function () {

      /* burger-menu
      =============================*/

      $('.header__burger').click(function (event) {
         $('.header__burger,.header__nav').toggleClass('active');
         $('body').toggleClass('lock');
         if ($('.header__nav').hasClass('active')) {
            $('.header__nav-link').click(function (event) {
               $('.header__burger,.header__nav').removeClass('active');
               $('body').removeClass('lock');
            });
              
         }
      });


      /* footer-menu
      =============================*/

      $('.footer__menu-title').click(function (event) {
         $(this).next().toggleClass('active');
         if ($('.footer__block').hasClass('active')) {
            $('.footer__link').click(function (event) {
               $('.footer__block').removeClass('active');
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

});