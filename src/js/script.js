 $(document).ready(function(){
    $('#btn-menu').click(()=>{
      $('nav ul').show(50)
      $('#btn-menu').hide()
      $('.bg-bars').show(50)
      $('body').css({'overflow-y':'hidden'})
    })
     $('#btn-menu-close').click(()=>{
      $('nav ul').hide(50)
      $('#btn-menu').show()
      $('.bg-bars').hide(50)
      $('body').css({'overflow-y':'auto'})
    })
  })
 
 window.addEventListener("load",()=>{
         const loader = document.getElementById('loader-bg')
        const content = document.getElementById('content')

        loader.style.display = "none"
        content.style.display = "block"
    }
       
    )


const swipe = new Swiper(".mySwiper", {
      
            speed: 600,
            loop: true,
            autoplay: {
            delay: 5000,
            disableOnInteraction: false
            },
            slidesPerView: 3,
            spaceBetween: 2,
            centerSlide:'true',
            grabCursor:'true',
            fade:'true',
            loop: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
              dynamicBullets:true
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            breakpoints:{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              950: {
                slidesPerView: 3,
              },
            },
          });

 /*** Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  const swiper = new Swiper('.team-slider', {
    speed: 800,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      950: {
                slidesPerView: 2,
              },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });
