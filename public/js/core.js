// Hey skid or contributor.
// this is The core script that sets the theme, favicon, tabcloak etc

document.addEventListener("DOMContentLoaded", function () {
  var headElement = document.querySelector("head");

  var htmlToInject = `
 
  `;

  headElement.insertAdjacentHTML("beforeend", htmlToInject);
});

document.addEventListener("DOMContentLoaded", function () {
  // Check the number of existing navbars
  var existingNavs = document.querySelectorAll(".navbar");

  if (existingNavs.length === 0) {
    var navHTML = `
         <marquee><a href="https://discord.gg/fbjT5wG4za" class="red">NATIVE DISCORD SERVER GOT NUKED ITS BACK JOIN NOW!
  (click me to join)
</a></marquee>
          <nav class="navbar">
              <h1 class="navtext">native.</h1>
              <li><a href="/./" class="navlink">Home</a></li>
              <li><a href="/./projects">Games</a></li>
              <li><a href="/./bookmarklets">Bookmarklets</a></li>
              <li><a href="/./apps">Apps</a></li>
              <li><a href="/./form">Request</a></li>
              <li><a href="/./search">Pr0x</a></li>
              <li><a href="#" onclick="createBlank();">about:blank</a></li>
              <li><a href="/./settings">Settings</a></li>
              <li><a href="/./other/">More</a></li>
          </nav>
          <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
          <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
          <link rel="stylesheet" href="/css/stars.cs"></link>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1565760898646999"
     crossorigin="anonymous"></script>
<!-- main -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-1565760898646999"
     data-ad-slot="3394614244"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
          `;

    var bodyElement = document.querySelector("body");
    bodyElement.insertAdjacentHTML("afterbegin", navHTML);
  }
});

var rocket = document.createElement("script");
rocket.async = true;
rocket.src = "/js/rocket-loader.min.js";
document.body.appendChild(rocket);

// Collect Tab Cloak data from local storage
var tab = localStorage.getItem("tab");
if (tab) {
  try {
    // Parse the data, it is in JSON
    var tabData = JSON.parse(tab);
  } catch {
    var tabData = {};
  }
} else {
  var tabData = {};
}

// Set the Tab title if the Tab cloak data is there
if (tabData.title) {
  document.title = tabData.title;
}

// Set the Tab icon if the Tab cloak data is there
if (tabData.icon) {
  document.querySelector('link[rel="icon"]').href = tabData.icon;
}
document.addEventListener("DOMContentLoaded", function () {
  const themeSelect = document.getElementById("themeSelect");

  // Check the saved theme from local storage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    applyTheme(savedTheme);
    themeSelect.value = savedTheme;
  }

  // Apply selected theme
  themeSelect.addEventListener("change", function () {
    const selectedTheme = themeSelect.value;
    applyTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
  });

  function applyTheme(theme) {
    document.body.className = ""; // Reset body classes
    if (theme !== "default") {
      document.body.classList.add(theme);
    }
  }
});
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function createBlank() {
  win = window.open();
  win.document.body.style.margin = "0";
  win.document.body.style.height = "100vh";
  var iframe = win.document.createElement("iframe");
  iframe.style.border = "none";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.margin = "0";
  iframe.referrerpolicy = "no-referrer";
  iframe.allow = "fullscreen";
  iframe.src = location.origin;
  win.document.body.appendChild(iframe);
  window.location.href = "https://www.google.com/search?q=what+day+is+today";
}
setTimeout(() => {
  console.warn("Thanks for using Native Games.... skid");
}, 3000);

// Check if the page is loaded within an iframe
if (window !== window.top) {
  // Page is in an iframe, find and delete the nav element
  var navElement = document.querySelector("nav.navbar");
  if (navElement) {
    navElement.parentNode.removeChild(navElement);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const starsVisible = localStorage.getItem("starsVisible") === "true";
  updateStarsVisibility(starsVisible);
});

function updateStarsVisibility(visible) {
  const displayValue = visible ? "block" : "none";
  document.getElementById("stars").style.display = displayValue;
  document.getElementById("stars2").style.display = displayValue;
  document.getElementById("stars3").style.display = displayValue;
}

document.addEventListener("DOMContentLoaded", function () {
  const switchElement = document.getElementById("toggleSwitch");
  switchElement.checked = localStorage.getItem("starsVisible") === "true";

  switchElement.addEventListener("change", function () {
    localStorage.setItem("starsVisible", switchElement.checked);
    window.location.reload();
  });
});
document.addEventListener("DOMContentLoaded", (event) => {
  const createBlankSwitch = document.getElementById("createBlankSwitch");

  // Check if the toggle was on before the refresh
  const isOn = localStorage.getItem("createBlankSwitchState") === "true";
  createBlankSwitch.checked = isOn;

  // Run createBlank() if not in an iframe and toggle is on
  if (window.self === window.top && isOn) {
    createBlank();
  }

  // Add event listener for toggle switch changes
  createBlankSwitch.addEventListener("change", (e) => {
    localStorage.setItem("createBlankSwitchState", e.target.checked);
    if (!e.target.checked) {
      // Optional: Do something when toggle is turned off
    }
  });
});
