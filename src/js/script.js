  $(document).ready(function(){
    $('#btn-menu').click(()=>{
      $('nav ul').css({"right":"5px"})
      $('#btn-menu').hide()
      $('.bg-bars').show(50)
      $('body').css({'overflow-y':'hidden'})
    })
    $('.bg-bars').click(()=>{
       $('nav ul').css({"right":"-1000px"})
      $('#btn-menu').show()
      $('.bg-bars').hide(50)
      $('body').css({'overflow-y':'auto'})
    })
     $('#btn-menu-close').click(()=>{
      $('nav ul').css({"right":"-1000px"})
      $('#btn-menu').show()
      $('.bg-bars').hide(50)
      $('body').css({'overflow-y':'auto'})
    });

    
   

// Bars Button
var barsBtn = document.getElementById('bars');
var menu = document.getElementById('NavLink');
barsBtn.addEventListener('click',()=>{
    menu.classList.toggle('menuOn');
});
      /**Form function */

var $field = $('.field'),
$username = $('#username'),
$email = $('#email'),
$subject = $('#subject'),
$message = $('#message'),
$submit = $('#submit-btn'),
$regName = /^[a-zA-ZéèîïêàâÊ][a-zéèîïêàâç]+([-'\s][a-zA-ZéèîïêàâÊ][a-zéèîïêàâç]+)?/i,
$regMail = /^[a-z0-9.-_]+@[a-z0-9.-_]+\.[a-z]{2,6}$/i;

$username.keyup(function(e){
        if($regName.test($username.val())){
            $($username).addClass('fieldValid');
                
            }
            else if($username.val() =='' || !$regName.test($username.val())){
              $($username).removeClass('fieldValid');
            }
        });
       
$email.keyup(function(e){
        if($regMail.test($email.val())){
          $($email).addClass('fieldValid');
                
            }
            else if($email.val() =='' || !$regMail.test($email.val())){
              $($email).removeClass('fieldValid');
            }
        });
$subject.keyup(function(e){
          if($regName.test($subject.val())){
            $($subject).addClass('fieldValid');
                  
              }
              else if($subject.val() =='' || !$regName.test($subject.val())){
                $($subject).removeClass('fieldValid');
              }
          });
$message.keyup(function(e){
            if($message.val() != ''){
              $($message).addClass('fieldValid');
              $message.css({
                color : 'rgb(0, 172, 0)',
                border : '2px solid rgb(0, 172, 0)'
            })
            }
            else{
              $($message).removeClass('fieldValid');
              $message.css({
                color : 'red',
                border : '2px solid red'
            })
              e.preventDefault(); 
              }
        });
       
$submit.click(function(e){

        if($regName.test($username.val())){
          
            $($username).addClass('fieldValid');
              
            }
            else if($username.val() =='' || !$regName.test($username.val())){
        
                $($username).removeClass('fieldValid');    
                $username.css({
                    color : 'red',
                    border : '2px solid red'
                })
                e.preventDefault();
            }
        
        if($regMail.test($email.val())){
            $($email).addClass('fieldValid');
                
            }
            else if($email.val() =='' || !$regMail.test($email.val())){
              $($email).removeClass('fieldValid');
              $email.css({
                color : 'red',
                border : '2px solid red'
            })
            e.preventDefault();
            }
        if($regName.test($subject.val())){
              $($subject).addClass('fieldValid');
                    
                }
                else if($subject.val() =='' || !$regName.test($subject.val())){
                  $($subject).removeClass('fieldValid');
                  $subject.css({
                    color : 'red',
                    border : '2px solid red'
                })
                e.preventDefault();
                }
        if($message.val() == ''){
            $($message).removeClass('fieldValid');
            $message.css({
              color : 'red',
              border : '2px solid red'
          })
            e.preventDefault(); 
            }
            else if($message.val() != ''){
                $($message).addClass('fieldValid');
                
            }
    
    else{
        $('form').submit();
        $('#submit-btn').css({'cursor': 'not-allowed'});
    }
     
});

      });
 
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
        slidesPerView: 2,
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


//Mode nuit

const btnMode = document.getElementById('BtnMode');
const PageContent = document.querySelectorAll('body.Page');

//Session Storage
// Vérifier si le mode nuit est sauvegardé dans sessionStorage
    if (sessionStorage.getItem('DarkMode') === 'true') {
        document.body.classList.add('DarkPage');
    }

btnMode.addEventListener('click', ()=>{ 

    // Basculer la classe 'night-mode'
      document.body.classList.toggle('DarkPage');

        // Sauvegarder l'état du mode nuit dans sessionStorage
        const isNightMode = document.body.classList.contains('DarkPage');
        sessionStorage.setItem('DarkMode', isNightMode);
});