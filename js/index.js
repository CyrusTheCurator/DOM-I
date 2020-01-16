const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//anchor links
let bananas = document.createElement("a");
let apples = document.createElement("a");
bananas.textContent = "Bananas";
apples.textContent = "Apples";
let navBarItems = document.querySelectorAll("a");
let navBar = document.querySelector("nav");
//loops over node list and populates anchor link text
navBarItems.forEach((item, index) => {
  item.textContent = siteContent.nav[`nav-item-${index + 1}`];
  item.style.color = "green";
});
navBar.append(apples);
navBar.prepend(bananas);
apples.style.color = "green";
bananas.style.color = "green";

//h1 text
let h1Text = document.querySelector(".cta-text h1");
h1Text.textContent = siteContent.cta.h1;

//"Get Started Button"
let getStartedButton = document.querySelector("button");
getStartedButton.textContent = siteContent.cta.button;

//header image
let headerImg = document.querySelector("#cta-img");
console.log(headerImg);
headerImg.setAttribute("src", siteContent.cta["img-src"]);

//text contents array-like object
let textContentsCollectionH4 = document.querySelectorAll(".text-content h4");
let textContentsCollectionP = document.querySelectorAll(".text-content p");

const contentKeys = Object.keys(siteContent["main-content"]);

console.log(textContentsCollectionH4);
console.log(textContentsCollectionP);

//we need to remove the image link from the array for our for loops to not be broken
contentKeys.splice(4, 1);
console.log("Our modified keys for looping are ", contentKeys);

let h4Keys = [];
let textContentKeys = [];
//evens get pushed to h4, odds get pushed to textContent
for (i = 0; i < contentKeys.length; i++) {
  if (i % 2 != 1) {
    h4Keys.push(contentKeys[i]);
  } else {
    textContentKeys.push(contentKeys[i]);
  }
}
console.log("h4 keys ", h4Keys);
console.log("text keys ", textContentKeys);
//populate h4 with content from h4 array
textContentsCollectionH4.forEach((item, index) => {
  item.textContent = siteContent["main-content"][h4Keys[index]];
});

let middleImg = document.querySelector("#middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);
//populate p with content from p array
textContentsCollectionP.forEach((item, index) => {
  item.textContent = siteContent["main-content"][textContentKeys[index]];
});

//here's a more explicit approach

let contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent.contact["contact-h4"];

let contactTexts = document.querySelectorAll(".contact p");
let contactAddress = siteContent.contact.address;
let contactPhone = siteContent.contact.phone;
let contactEmail = siteContent.contact.email;

contactTexts[0].textContent = contactAddress;
contactTexts[1].textContent = contactPhone;
contactTexts[2].textContent = contactEmail;

let footer = document.querySelector("footer p");
footer.textContent = siteContent.footer.copyright;
