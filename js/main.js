// year
document.querySelector('.modal-year__button--yes').addEventListener('click', function() {
  document.querySelector('.modal-year__wrapper').classList.add('visually-hidden');
});

document.querySelector('.modal-year__button--no').addEventListener('click', function() {
  document.querySelector('.year-title').textContent = 'Сайт недоступен лицам младше 18 лет!';
})

// cookie
document.querySelector('.modal-cookie__button--accept').addEventListener('click', function() {
  document.querySelector('.modal-cookie__wrapper').classList.add('visually-hidden');
});
document.querySelector('.modal-cookie__button--reject').addEventListener('click', function() {
  document.querySelector('.modal-cookie__wrapper').classList.add('visually-hidden');
});
document.querySelector('.modal-cookie__button--settings').addEventListener('click', function() {
  document.querySelector('.modal-cookie').classList.add('visually-hidden');
  document.querySelector('.modal-cookie-settings').classList.remove('visually-hidden');
});

document.querySelector('.modal-cookie-settings__save').addEventListener('click', function() {
  document.querySelector('.modal-cookie__wrapper').classList.add('visually-hidden');
});

// menu-burger

document.querySelector('.menu-burger').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.nav-list').classList.toggle('nav-list--active');
});

// menu-burger footer

document.querySelector('.menu-burger--footer').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.nav-list--footer').classList.toggle('nav-list--active');
});
