document.addEventListener('DOMContentLoaded', () => {
    $(document).ready(function () {
        $('.carrousel').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
        });
    });
      
        window.onscroll = function () {
          hideOnScroll();
        };
      
        let barHide = document.querySelector("header nav");
        let prevScrollpos = window.pageYOffset;
      
        let hideOnScroll = () => {
          let currentScrollPos = window.pageYOffset;
          if (prevScrollpos > currentScrollPos) {
            barHide.style.top = "0";
          } else {
            barHide.style.top = "-12rem";
          }
          prevScrollpos = currentScrollPos;
        }
      
      
      
      
})