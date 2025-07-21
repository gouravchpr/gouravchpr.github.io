// Function to toggle dark mode
function toggleDarkMode() {
  // Toggle the 'dark-mode' class on the body element
  document.body.classList.toggle('dark-mode');

  // Save the current dark mode state in localStorage
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));

  // Update the button text based on the current mode
  document.querySelector('.dark-toggle').textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
}

// Persist dark mode on page load
if (localStorage.getItem('darkMode') === 'true') {
  // Add the 'dark-mode' class if it was previously enabled
  document.body.classList.add('dark-mode');

  // Update the button text to reflect the current mode
  document.querySelector('.dark-toggle').textContent = '☀️ Light Mode';
}