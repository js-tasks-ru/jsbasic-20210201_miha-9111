function hideSelf() {
  let hideSelfButton = document.querySelector('.hide-self-button');

  hideSelfButton.addEventListener('click', () => {
    hideSelfButton.setAttribute('hidden', true);
  });
}
