function toggleText() {
  const toggleTextButton = document.querySelector('.toggle-text-button');
  const text = document.querySelector('#text');

  toggleTextButton.addEventListener('click', function() {
    if (!text.hasAttribute('hidden')) {
      return text.setAttribute('hidden', true);
    }
    text.removeAttribute('hidden');
  });
}
