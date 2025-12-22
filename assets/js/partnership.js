/**
 * Partnership Inquiry Page JavaScript
 * Handles partnership form functionality
 */

(function() {
    'use strict';

    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {
        const partnershipForm = document.getElementById('partnershipForm');

        // Form submission handler
        if (partnershipForm) {
            const messageContainer = document.getElementById('partnershipFormMessage');
            
            partnershipForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get success message
                var successMessage = 'Thank you for your partnership inquiry! We will get back to you soon.';
                
                // Show success message on page
                if (messageContainer) {
                    messageContainer.textContent = successMessage;
                    messageContainer.className = 'contact-form-message contact-form-message-success';
                    messageContainer.style.display = 'block';
                    
                    // Scroll to message
                    messageContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    
                    // Reset form
                    partnershipForm.reset();
                    
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

