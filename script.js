// Countdown to the party (Boston time, EST).
const START = new Date("2026-11-10T20:00:00-05:00").getTime();
const END = new Date("2026-11-11T00:00:00-05:00").getTime();

const pad = (n) => String(n).padStart(2, "0");
const el = (id) => document.getElementById(id);

function tick() {
  const now = Date.now();
  const left = START - now;

  if (left <= 0) {
    el("countdown").hidden = true;
    const done = el("countdown-done");
    done.hidden = false;
    done.textContent = now < END ? "The party's on — come on over!" : "Thanks for coming — see you next year!";
    return false;
  }

  const s = Math.floor(left / 1000);
  el("cd-days").textContent = pad(Math.floor(s / 86400));
  el("cd-hours").textContent = pad(Math.floor((s % 86400) / 3600));
  el("cd-mins").textContent = pad(Math.floor((s % 3600) / 60));
  el("cd-secs").textContent = pad(s % 60);
  return true;
}

tick();
const timer = setInterval(() => {
  if (!tick() && Date.now() >= END) clearInterval(timer);
}, 1000);
