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
// navigation
const logo = document.querySelector("#logo-img");
logo.src = siteContent["nav"]["img-src"];

const navItems = document.querySelectorAll(`nav > a`);
navItems.forEach((item, pos) => item.textContent = siteContent.nav[`nav-item-${pos+1}`]);

// cta Section
const ctaTexts = document.querySelector(`.cta-text`).children;
const headText = siteContent[`cta`][`h1`].split(` `).join(`<br>`);
ctaTexts[0].innerHTML = headText;
ctaTexts[1].textContent = siteContent[`cta`][`button`];

const ctaImg = document.querySelector(`#cta-img`);
ctaImg.src = siteContent[`cta`][`img-src`];

// main content - top
const topTexts = document.querySelectorAll(`.top-content > .text-content`);
topTexts[0].children[0].textContent = siteContent[`main-content`][`features-h4`];
topTexts[0].children[1].textContent = siteContent[`main-content`][`features-content`];
topTexts[1].children[0].textContent = siteContent[`main-content`][`about-h4`];
topTexts[1].children[1].textContent = siteContent[`main-content`][`about-content`];

// main content - middle image
const midImg = document.querySelector(`#middle-img`);
midImg.src = siteContent[`main-content`][`middle-img-src`];

// main content - bottom
const bottomTexts = document.querySelectorAll(`.bottom-content > .text-content`);
bottomTexts[0].children[0].textContent = siteContent[`main-content`][`services-h4`];
bottomTexts[0].children[1].textContent = siteContent[`main-content`][`services-content`];
bottomTexts[1].children[0].textContent = siteContent[`main-content`][`product-h4`];
bottomTexts[1].children[1].textContent = siteContent[`main-content`][`product-content`];
bottomTexts[2].children[0].textContent = siteContent[`main-content`][`vision-h4`];
bottomTexts[2].children[1].textContent = siteContent[`main-content`][`vision-content`];

// contact section
const contactItems = document.querySelector(`.contact`);
contactItems.children[0].textContent = siteContent[`contact`][`contact-h4`];
const address = siteContent[`contact`][`address`].replace(`t `, `t<br>`);
contactItems.children[1].innerHTML = address;
contactItems.children[2].textContent = siteContent[`contact`][`phone`];
contactItems.children[3].textContent = siteContent[`contact`][`email`];

// footer
const footerText = document.querySelector(`footer > p`);
footerText.innerHTML = siteContent[`footer`][`copyright`];
