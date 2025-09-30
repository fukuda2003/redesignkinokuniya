const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close');
const accordion = document.querySelector('.accordion > a');
const submenu = document.querySelector('.accordion .submenu');

// ハンバーガー開閉
hamburger.addEventListener('click', () => {
  overlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  overlay.classList.remove('active');
});

// モバイルのアコーディオン
accordion.addEventListener('click', (e) => {
  e.preventDefault();
  submenu.classList.toggle('active');
});