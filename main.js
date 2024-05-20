'use strict';
{
  const close = document.getElementById('close');
  const close2 = document.getElementById('close2');
  const modal = document.getElementById('modal');
  const modal2 = document.getElementById('modal2');
  const mask = document.getElementById('mask');

  

  close.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal2.classList.remove('hidden');
  });

  close2.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal2.classList.add('hidden');
  });

}