const tabs = document.querySelector('.tabs');
const activeTabClass = 'active';
const activeContentClass = 'visible';

tabs.addEventListener('click', handleTabClick);

function handleTabClick(e) {
  const target = e.target;
  const tabNum = target.dataset.tab;
  
  if (!tabNum) {
    return;
  }
  
  const activeTab = tabs.querySelector(`.${activeTabClass}`);
  const activeContent = document.querySelector(`.pages .${activeContentClass}`);
  const currentContent = document.querySelector(`.content[data-tab='${tabNum}']`);
  
  activeTab.classList.remove(activeTabClass);
  target.classList.add(activeTabClass);
  activeContent.classList.remove(activeContentClass);
  currentContent.classList.add(activeContentClass);
}

const popupButtons = document.querySelectorAll('.popup-btn');
popupButtons.forEach(btn => btn.addEventListener('click', handlePopupOpen));

const popupCloses = document.querySelectorAll('.popup-close');
popupCloses.forEach(close => close.addEventListener('click', handlePopupClose));

function handlePopupOpen() {
  const index = this.getAttribute('data-index');
  document.querySelector(`.popup-wrap[data-index="${index}"]`).style.display = 'block';
}

function handlePopupClose() {
  this.parentNode.parentNode.style.display = 'none';
}

const smoothLinks = document.querySelectorAll('a[href^="#"]');
smoothLinks.forEach(link => link.addEventListener('click', handleSmoothScroll));

function handleSmoothScroll(e) {
  e.preventDefault();
  const id = this.getAttribute('href').substr(1);
  const top = document.getElementById(id).offsetTop;
  window.scrollTo({
    top: top,
    behavior: 'smooth'
  });
}

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLink.forEach(n => n.addEventListener ('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

$( '.js-input' ).on('keyup', function() {
    $(this).toggleClass('not-empty', $(this).val());
});
