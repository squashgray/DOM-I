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

let topImg = document.getElementById("cta-img"); // gets an ID //
topImg.setAttribute('src', siteContent["cta"]["img-src"]) // changes the src using siteContent from 'cta' object 'img-src' propterty //
// setAttribute can't be used for textcontent // 
let mainTitle = document.querySelector('.cta h1'); //specificity is important, must reference class -> child //
mainTitle.textContent = siteContent ["cta"]["h1"]; // adds textContent using the siteContent provided // 

let mainButton = document.querySelector('.cta button'); // just like before .class child
mainButton.textContent = siteContent["cta"]["button"];

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//nav a tags //
let navA = document.querySelectorAll('a'); // used selector all to make 'array like' node list //
navA[0].textContent= siteContent["nav"]["nav-item-1"];  // select each item indiviually using bracket notation [0] to access its place in the node list // 
navA[1].textContent= siteContent["nav"]["nav-item-2"];  
navA[2].textContent= siteContent["nav"]["nav-item-3"];
navA[3].textContent= siteContent["nav"]["nav-item-4"];
navA[4].textContent= siteContent["nav"]["nav-item-5"];
navA[5].textContent= siteContent["nav"]["nav-item-6"];

navA[0].style.color= 'green'; // same for text color // 
navA[1].style.color= 'green';
navA[2].style.color= 'green';
navA[3].style.color= 'green';
navA[4].style.color= 'green';
navA[5].style.color= 'green';

// main h4 titles //
let hfours = document.querySelectorAll('h4') // like the a tags, selects all the h4's and makes a node list //
hfours[0].textContent= siteContent["main-content"]["features-h4"]; // important to have everything in the correct order //
hfours[1].textContent= siteContent["main-content"]["about-h4"];
hfours[2].textContent= siteContent["main-content"]["services-h4"];
hfours[3].textContent= siteContent["main-content"]["product-h4"];
hfours[4].textContent= siteContent["main-content"]["vision-h4"];
// main content p // 
let mainContent = document.querySelectorAll('.text-content > p'); // > selects the direct children of the element (.text-content), otherwise it selects the <p>'s from contact section //
mainContent[0].textContent= siteContent["main-content"]["features-content"]; // same story be specific //
mainContent[1].textContent= siteContent["main-content"]["about-content"];
mainContent[2].textContent= siteContent["main-content"]["services-content"];
mainContent[3].textContent= siteContent["main-content"]["product-content"];
mainContent[4].textContent= siteContent["main-content"]["vision-content"];

let nav = document.querySelector('nav'); // lets me use nav to append, prepend //

let home = document.createElement("a"); //create an a tag //
home.innerText = "Main"; //sets the content on the a tag //
home.href = "#"; //makes it a link // 
home.style.color= "green"; // changes the color //

nav.prepend(home); //prepend to the nav variable //

let cookies = document.createElement("a");
cookies.innerHTML = "Cookies";
cookies.href = "#"
cookies.style.color= "green";

nav.append(cookies); 







