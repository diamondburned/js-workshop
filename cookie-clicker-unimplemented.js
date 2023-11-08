const element = {
  cookie: document.getElementById("cookie"), // <button>
  cps: document.getElementById("cps"), // <span>
  cpc: document.getElementById("cpc"), // <span>
  counter: document.getElementById("counter"), // <span>
  upgrades: {
    autoclicker1: document.getElementById("auto-clicker-1"),
    autoclicker2: document.getElementById("auto-clicker-2"),
    betterCookies: document.getElementById("better-cookies"),
  },
};

let cookies = 0;
let cps = 0; // cookies per second
let cpc = 1; // cookies per click

// update updates the HTML page with the latest state (above variables).
function update() {
  console.log("updated", { cookies, cps, cpc });
  // TODO: update the needed elements
}

function hasEnoughCookies(cost) {
  if (cookies >= cost) {
    return true;
  }
  alert("You are too poor!");
  return false;
}

setInterval(() => {
  cookies += cps / 4; // 4 ticks per second
  update();
}, 250); // tick every 0.25 seconds

// TODO: add an event listener for the cookie button.
// It should add the cookies and update the page.

// TODO: add event listeners for the upgrades.
// They should check if the player has enough cookies, and if so, subtract the
// cost and add the upgrade.
//
// autoclicker1: -10 cookies, +1 cps
// autoclicker2: -50 cookies, +10 cps
// betterCookies: -25 cookies, +5 cpc
