const hamMenu = document.querySelector('.hamMenu');
const hamInfo = document.querySelector('.hamInfo');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  hamInfo.classList.toggle('open');
});