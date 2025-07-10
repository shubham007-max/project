const moduleBox = document.getElementById('moduleBox');
const formContainer = document.getElementById('formContainer');
const closeForm = document.getElementById('closeForm');
const assetForm = document.getElementById('assetForm');
const thankYouPopup = document.getElementById('thankYouPopup');

// Show the form when module is clicked
moduleBox.addEventListener('click', () => {
  moduleBox.classList.add('hidden');
  formContainer.classList.remove('hidden');
});

// Close the form and return to module box
closeForm.addEventListener('click', () => {
  formContainer.classList.add('hidden');
  moduleBox.classList.remove('hidden');
});

// Handle form submission
assetForm.addEventListener('submit', (e) => {
  e.preventDefault();
  formContainer.classList.add('hidden');
  thankYouPopup.classList.remove('hidden');

  // After 2 seconds, hide popup and return to module
  setTimeout(() => {
    thankYouPopup.classList.add('hidden');
    moduleBox.classList.remove('hidden');
    assetForm.reset();
  }, 2000);
});
