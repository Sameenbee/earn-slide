// Apple Music Landing Page - Main JavaScript

/**
 * Handle CTA button clicks
 * Opens the affiliate link in a new tab
 */
function handleApply() {
  window.open("https://trksy.org/aff_c?offer_id=1970&aff_id=172249", "_blank");
}

// Add smooth scroll behavior for anchor links (if any are added later)
document.addEventListener('DOMContentLoaded', function() {
  // Add any initialization code here
  console.log('Apple Music Landing Page loaded');
  
  // Add click tracking if needed
  const ctaButtons = document.querySelectorAll('.cta-button');
  ctaButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      // You can add analytics tracking here
      // Example: gtag('event', 'click', { 'event_category': 'CTA', 'event_label': 'Apply Now' });
    });
  });
});
