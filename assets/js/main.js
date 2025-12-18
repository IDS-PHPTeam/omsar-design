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
    var projectsCarousel = $(".projects-carousel").owlCarousel({
        center: true,
        items: 2,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true, //stop on hover
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

    // Handle clicks on shadow overlays for projects carousel
    function handleShadowOverlayClick() {
        // Scope to projects carousel wrapper only
        const $wrapper = $('.projects-carousel-wrapper');
        
        // Handle left shadow overlay click
        $wrapper.find('.carousel-shadow-left').off('click').on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Get page direction (LTR or RTL) - check on each click to handle dynamic changes
            const isRTL = document.documentElement.dir === 'rtl' || 
                         getComputedStyle(document.documentElement).direction === 'rtl';
            
            // In LTR: left = previous, In RTL: left = next (reversed)
            if (isRTL) {
                projectsCarousel.trigger('next.owl.carousel');
            } else {
                projectsCarousel.trigger('prev.owl.carousel');
            }
        });
        
        // Handle right shadow overlay click
        $wrapper.find('.carousel-shadow-right').off('click').on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Get page direction (LTR or RTL) - check on each click to handle dynamic changes
            const isRTL = document.documentElement.dir === 'rtl' || 
                         getComputedStyle(document.documentElement).direction === 'rtl';
            
            // In LTR: right = next, In RTL: right = previous (reversed)
            if (isRTL) {
                projectsCarousel.trigger('prev.owl.carousel');
            } else {
                projectsCarousel.trigger('next.owl.carousel');
            }
        });
    }
    
    // Initialize shadow overlay clicks after carousel is ready
    handleShadowOverlayClick();

    // Latest News Carousel
    $(".news-carousel").owlCarousel({
        items: 3, 
        loop: true,
        autoplay: true,
        autoplayHoverPause: true, //stop on hover
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
            1600:{   // Large monitors
                items: 3,
                stagePadding: 250
            }
        },
        onInitialized: function() {
            // Copy inline background-image to CSS variable for news cards zoom effect
            updateNewsCardBackgrounds();
        },
        onTranslated: function() {
            // Update backgrounds after carousel translation (for cloned items)
            updateNewsCardBackgrounds();
        }
    });

    // Function to copy inline background-image to CSS variable for news cards
    function updateNewsCardBackgrounds() {
        $(".news-carousel .news-card").each(function() {
            const bgImage = $(this).css('background-image');
            if (bgImage && bgImage !== 'none') {
                $(this).css('--bg-image', bgImage);
            }
        });
    }

    // Testimonials Carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        items: 3,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true, //stop on hover
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
