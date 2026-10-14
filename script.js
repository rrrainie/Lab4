let visits = Number(localStorage.getItem("visits")) || 0;
visits = visits + 1;
localStorage.setItem("visits", visits);

function showGreeting() {
  const greeting = document.getElementById("greeting");

  if (visits === 1) {
    greeting.textContent = "Welcome! This is your first visit. 👋";
  } else if (visits <= 3) {
    greeting.textContent = "Welcome back! This is visit #" + visits + ".";
  } else {
    greeting.textContent = "You're a regular now! Visit #" + visits + " 🎉";
  }
}

function chooseMood(mood) {
  const name = document.getElementById("nameInput").value.trim();
  const who = name === "" ? "Friend" : name;   
  let emoji;
  let message;
  let color;

  if (mood === "happy") {
    emoji = "😊";
    message = who + ", great to hear! Share your good mood with someone today.";
    color = "#fff3b0";
  } else if (mood === "sad") {
    emoji = "💙";
    message = who + ", it's okay to feel sad. Maybe talk to a friend or listen to music.";
    color = "#b8d8ff";
  } else if (mood === "tired") {
    emoji = "😴";
    message = who + ", take a short break and drink some water.";
    color = "#d9c9ff";
  } else {
    emoji = "🌿";
    message = who + ", take three deep breaths. One thing at a time.";
    color = "#c8f0d0";
  }

  document.getElementById("emoji").textContent = emoji;
  document.getElementById("message").textContent = message;
  document.body.style.backgroundColor = color;
}

// ---------- RESET ----------
function resetVisits() {
  localStorage.removeItem("visits");
  visits = 1;
  localStorage.setItem("visits", visits);
  showGreeting();
}

showGreeting();
