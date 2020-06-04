const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


const navContent = Object.values(siteContent.nav);
const navBar = document.querySelectorAll('nav > a');
for(let i = 0; i < navBar.length; i++){
  navBar[i].textContent = navContent[i];
}
navBar.forEach(a => {
  a.style.color = 'green';
});


const header = document.querySelector('.cta-text').children;
const ctaContent = Object.values(siteContent.cta);
for(let i = 0; i < header.length; i++){
  header[i].textContent = ctaContent[i];
}
const heading1 = document.querySelector('h1');
heading1.innerHTML = `Dom <br> is <br> Awesome`;
const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', ctaContent[2]);


const mainContent = Object.values(siteContent['main-content']);
const content1 = document.querySelectorAll('.top-content > .text-content >h4,.top-content > .text-content > p' );
const content2 = document.querySelectorAll('.bottom-content > .text-content >h4,.bottom-content > .text-content > p' );
const mainImg = document.getElementById('middle-img');
for(let i = 0; i < content1.length; i++){
  content1[i].textContent = mainContent[i];
}
for(let i = 0; i < content2.length; i++){
  content2[i].textContent = mainContent[i + (content1.length +1)];
}
mainImg.setAttribute('src', mainContent[4]);


const contactContent = Object.values(siteContent.contact);
const contactInfo = document.querySelector('.contact').children;
for(let i = 0; i < contactInfo.length; i++){
  contactInfo[i].textContent = contactContent[i];
}
const address = document.querySelector('.contact > p');
address.innerHTML = `123 Way 456 Street <br> Somewhere, USA`;


const footerInfo = document.querySelector('footer > p');
const footerContent = Object.values(siteContent.footer);
footerInfo.textContent = footerContent;