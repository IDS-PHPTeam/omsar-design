// Scroll Script
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar-scroll');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-white', 'shadow-sm');
        } else {
            navbar.classList.remove('bg-white', 'shadow-sm');
        }
    }
});

// Carousel Initialization
$(document).ready(function(){
    
    // Latest Projects Carousel
    $(".projects-carousel").owlCarousel({
        center: true,
        items: 2,
        loop: true,
        autoplay: true,
        margin: 20,
        nav: false,
        dots: true,
        responsive:{
            0:{
                items: 1,
                center: false, // Disable center mode on mobile
                stagePadding: 0 // Full-width cards on mobile
            },
            768:{
                items: 1.5
            },
            1000:{
                items: 2.2
            }
        }
    });

    // Latest News Carousel
    $(".news-carousel").owlCarousel({
        items: 3, 
        loop: true,
        autoplay: true,
        margin: 20,
        nav: false,
        dots: true,
        stagePadding: 150, // Add padding to show partial cards on sides
        responsive:{
            0:{
                items: 1.2, // Peek effect on mobile
                margin: 10,
                stagePadding: 0 // No padding on mobile
            },
            768:{
                items: 2,
                stagePadding: 100 // Reduced padding on tablets
            },
            1000:{
                items: 3,
                stagePadding: 150 // Full padding for desktop layout: 1/2, 1, 1, 1/2
            },
            1400:{  // Large desktop screens
                items: 4,
                stagePadding: 200
            }
        }
    });

    // Testimonials Carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        items: 3,
        loop: true,
        autoplay: true,
        margin: 30,
        nav: false,
        navText: ["<i class='bi bi-chevron-left'></i>", "<i class='bi bi-chevron-right'></i>"],
        dots: true,
        responsive:{
            0:{
                items: 1
            },
            768:{
                items: 1.5 // or 2
            },
            1000:{
                items: 3,
                nav: true,
                dots: false
            }
        }
    });
});
