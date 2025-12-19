/**
 * Contact Us Page JavaScript
 * Handles contact form functionality
 */

(function() {
    'use strict';

    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {
        // Character counter for message field
        const messageField = document.getElementById('message');
        const charCount = document.getElementById('charCount');
        const contactForm = document.getElementById('contactForm');

        // Character counter functionality
        if (messageField && charCount) {
            messageField.addEventListener('input', function() {
                charCount.textContent = this.value.length;
            });
        }

        // Form submission handler
        if (contactForm) {
            const messageContainer = document.getElementById('contactFormMessage');
            
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get success message
                var successMessage = (typeof contactData !== 'undefined' && contactData.successMessage) 
                    ? contactData.successMessage 
                    : 'Thank you for your submission!';
                
                // Show success message on page
                if (messageContainer) {
                    messageContainer.textContent = successMessage;
                    messageContainer.className = 'contact-form-message contact-form-message-success';
                    messageContainer.style.display = 'block';
                    
                    // Scroll to message
                    messageContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Reset character count
                    if (charCount) {
                        charCount.textContent = '0';
                    }
                    
                    // Hide message after 5 seconds (optional)
                    setTimeout(function() {
                        messageContainer.style.display = 'none';
                    }, 5000);
                }
                
                // Add your form submission logic here (AJAX call, etc.)
                // After successful submission, the message will be shown above
            });
        }
    });
})();

