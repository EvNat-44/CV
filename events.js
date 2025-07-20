document.addEventListener("DOMContentLoaded", function() {
  var loadingBar = document.querySelector(".loading-bar");

  // Progress loading bar from 0% to 100% in 4 seconds
  var progress = 0;
  var interval = setInterval(function() {
    if (progress >= 100) {
      clearInterval(interval);
      document.querySelector(".loader-wrapper").style.display = "none";
      var content = document.querySelector(".content");
      if (content) {
        content.classList.remove("hidden");
      }
      setTimeout(function() {
        var content = document.querySelector(".content");
        if (content) {
          content.style.display = "none";
        }
        var name = document.querySelector(".name");
        if (name) {
          name.classList.remove("hidden");

          //runTypewriterEffect();


          setTimeout(function() {
              var buttons = document.querySelectorAll(".name button");
              buttons.forEach(function(button) {
                  button.classList.remove("hidden");
              });
          }, 4000); // Adjust timing for showing buttons after name animation
        }
      }, 3000); // Adjust timing for showing name
    } else {
      progress++;
      loadingBar.style.width = progress + "%";
    }
  }, 40); // Adjust timing for smoother animation
  var cvBtn = document.getElementById("cvBtn");
  var cvImage = document.getElementById("cvImage");

  // Toggle image visibility when CV button is clicked
  cvBtn.addEventListener("click", function() {
      cvImage.classList.toggle("hidden");

    });
});
function toggleAboutContent() {
var aboutContent = document.getElementById('aboutContent');
if (aboutContent.classList.contains('hidden')) {
    aboutContent.classList.remove('hidden');
} else {
    aboutContent.classList.add('hidden');
}
}
function toggleSkillsContent() {
var skillsContent = document.getElementById('skillsContent');
if (skillsContent.classList.contains('hidden')) {
    skillsContent.classList.remove('hidden');
} else {
    skillsContent.classList.add('hidden');
}
}

// Toggle function for "Projects" button
function toggleProjectsContent() {
var projectsContent = document.getElementById('projectsContent');
if (projectsContent.classList.contains('hidden')) {
    projectsContent.classList.remove('hidden');
} else {
    projectsContent.classList.add('hidden');
}
}

function openWebsiteInNewTab() {
var url = 'https://drive.google.com/file/d/18sqQtv04DcyymbsO_35mc4HWdMfVeGWx/view?usp=sharing'; 

// Create an anchor element
var anchor = document.createElement('a');
anchor.href = url; // Set the URL
anchor.target = '_blank'; // Open in a new tab
anchor.click(); // Simulate a click on the anchor to open the link
}

function openWebsiteInNewTab1() {
var url = 'https://drive.google.com/drive/folders/1Y8zf4UtL45T886VhYBlNgLBeelHYnmo4?usp=sharing'; 

// Create an anchor element
var anchor = document.createElement('a');
anchor.href = url; // Set the URL
anchor.target = '_blank'; // Open in a new tab
anchor.click(); // Simulate a click on the anchor to open the link
}

function toggleContactDetails() {
var contactDetails = document.getElementById('contactDetails');
if (contactDetails.classList.contains('hidden')) {
    contactDetails.classList.remove('hidden');
} else {
    contactDetails.classList.add('hidden');
}
}

/*function runTypewriterEffect() {
const nameEl = document.querySelector(".name");
const text   = nameEl?.textContent.trim() || "Welcome!";
nameEl.textContent = "";           // clear existing text
let i = 0;

function type() {
  if (i < text.length) {
    nameEl.textContent += text.charAt(i);
    i++;
    setTimeout(type, 10);        // typing speed (ms/char)
  }
}
if (nameEl) type();
}*/
/*
function runTypewriterEffect() {
const nameEl = document.querySelector(".name");
const text = nameEl?.textContent.trim() || "Welcome!";
nameEl.textContent = "";
let i = 0;

function type() {
    if (i < text.length) {
        nameEl.textContent += text.charAt(i);
        i++;
        setTimeout(type, 100); // Speed of typing
    }
}

if (nameEl) type();
}*/
