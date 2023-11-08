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

function update() {
  element.counter.textContent = Math.floor(cookies);
  element.cps.textContent = cps;
  element.cpc.textContent = cpc;
}

function hasEnoughCookies(cost) {
  if (cookies >= cost) {
    return true;
  }
  alert("You are too poor!");
  return false;
}

const tickRate = 500; // 0.5 second
setInterval(() => {
  cookies += cps / 2;
  update();
}, tickRate);

element.cookie.addEventListener("click", () => {
  cookies += cpc;
  update();
});

element.upgrades.autoclicker1.addEventListener("click", () => {
  if (!hasEnoughCookies(10)) return;
  cookies -= 10;
  cps += 1;
  update();
});

element.upgrades.autoclicker2.addEventListener("click", () => {
  if (!hasEnoughCookies(50)) return;
  cookies -= 50;
  cps += 10;
  update();
});

element.upgrades.betterCookies.addEventListener("click", () => {
  if (!hasEnoughCookies(25)) return;
  cookies -= 25;
  cpc += 5;
  update();
});
