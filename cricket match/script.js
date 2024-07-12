
let choice;
let resultmsg;

// Event listener for all buttons to show their respective popups
document.querySelectorAll('.alert-button').forEach(button => {
  button.addEventListener('click', function() {
      const targetPopup = this.getAttribute('data-target');
      document.getElementById(targetPopup).classList.add('show');
  });
});

// Event listener for all close buttons to hide the popups
document.querySelectorAll('.close-button').forEach(button => {
  button.addEventListener('click', function() {
      this.closest('.popup-overlay').classList.remove('show');
  });
});

// Optional: To hide the popup when clicking outside the popup content
document.querySelectorAll('.popup-overlay').forEach(overlay => {
  overlay.addEventListener('click', function(event) {
      if (event.target === this) {
          this.classList.remove('show');
      }
  });
});
