
const enBtn = document.querySelector('#en-btn');
const frBtn = document.querySelector('#fr-btn');
const hinBtn = document.querySelector('#hin-btn');


const pageTitle = document.querySelector('title');
const navLinks = document.querySelectorAll('.nav_links a');
const getStartedBtn = document.querySelector('.action_btn button');
const exploreBtn = document.querySelector('.action_btn1 button');
const ourServicesBtn = document.querySelector('.action_btn2 button');
const mediShoppe = document.querySelector('.rectangle1 h1');

const translations = {
  en: {
    pageTitle: 'Medi+',
    navLinks: ['Home /', 'Shop /', 'Learn /', 'About',],
    getStartedBtn: 'Get Started',
    exploreBtn: 'Explore   >',
    ourServicesBtn: 'Our Services+Our Services+Our Services+Our Services+',
    mediShoppe: 'Medi+ Shoppe.'
  
  },
  fr: {
    pageTitle: 'Medi+',
    navLinks: ['Accueil /', 'Boutique /', 'Apprendre /', 'À propos /',],
    getStartedBtn: 'Commencer',
    exploreBtn: 'Explorer   >',
    ourServicesBtn: 'Nos services+Nos services+Nos services+Nos services+',
    mediShoppe: 'Boutique Medi+.'
  },
  hin: {
    pageTitle: 'मेडी+',
    navLinks: ['होम /', 'शॉप /', 'सीखें /', 'हमारे बारे में /',],
    getStartedBtn: 'शुरू करें',
    exploreBtn: 'अन्वेषण   >',
    ourServicesBtn: 'हमारी सेवाएं+हमारी सेवाएं+हमारी सेवाएं+हमारी सेवाएं+',
    mediShoppe: 'मेडी+ दुकान।'
  }
};

// Function to translate the elements
function translateElements(lang) {
  pageTitle.textContent = translations[lang].pageTitle;
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].textContent = translations[lang].navLinks[i];
  }
  getStartedBtn.textContent = translations[lang].getStartedBtn;
  exploreBtn.textContent = translations[lang].exploreBtn;
  ourServicesBtn.textContent = translations[lang].ourServicesBtn;
  mediShoppe.textContent = translations[lang].mediShoppe;
}

// Event listener for language buttons
enBtn.addEventListener('click', () => {
  translateElements('en');
});

frBtn.addEventListener('click', () => {
  translateElements('fr');
});

hinBtn.addEventListener('click', () => {
  translateElements('hin');
});
