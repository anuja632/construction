   document.querySelector('.hamburger-menu .round-menu').addEventListener('click', function() {
    document.querySelector('.slide-bar').classList.add('active');
  });
  document.querySelector('.close-mobile-menu').addEventListener('click', function() {
    document.querySelector('.slide-bar').classList.remove('active');
  });
  document.querySelectorAll('.mean-expand').forEach(expandBtn => {
  expandBtn.addEventListener('click', function(e) {
    e.preventDefault();
    // Find the submenu right before this button
    const submenu = this.previousElementSibling; 
    if (submenu && submenu.classList.contains('sub-menu')) {
      if (submenu.style.display === 'block') {
        submenu.style.display = 'none';
        this.textContent = '+';
      } else {
        submenu.style.display = 'block';
        this.textContent = '-';
      }
    }
  });
});

 
 // Open sidebar
  document.querySelector('.round-menu').addEventListener('click', function () {
    document.querySelector('.slide-bar').classList.add('open');
  });

  // Close sidebar
  document.querySelector('.close-mobile-menu').addEventListener('click', function () {
    document.querySelector('.slide-bar').classList.remove('open');
  });


  var swiper = new Swiper('.hero__slider', {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 1000,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 0,
  });

  document.querySelector('.round-menu').addEventListener('click', function() {
  const menu = document.querySelector('.main-menu');
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
});

var swiper = new Swiper('.services__slide__one', {
    loop: true,
    spaceBetween: 40,
    slidesPerView: 3,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      320: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 }
    }
  });
    var caseSlider = new Swiper('.case__slider__one', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1024:{
        slidesPerView:3,
      },
            1440:{
        slidesPerView:3,
      }
    },
  });
  const testimonialSlider = new Swiper('.testimonial__slider__one', {
    slidesPerView: 'auto', // allows card width to be fixed
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var swiper = new Swiper(".teams__slider__one", {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 3,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  breakpoints: {
  0: {
    slidesPerView: 1,
  },
  576: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,
  },
  992: {
    slidesPerView: 3,
  },
},


  });
