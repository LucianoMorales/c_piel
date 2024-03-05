const menuButton = document.createElement('button');
menuButton.innerHTML = 'Mostrar menú';
menuButton.addEventListener('click', () => {
  const menuList = document.querySelector('.menu ul');
  menuList.classList.toggle('show');
});
document.querySelector('.menu').appendChild(menuButton);