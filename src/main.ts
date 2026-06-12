import "./style.css";
let seconds = 25 * 60;

let interval: number | null = null;
let isRunning = false;

let mode: "Work" | "Break" = "Work";
let completedSessions = 0;

const app = document.getElementById("app") as HTMLElement;

app.innerHTML = "<h1>Pomodoro App</h1>";

function render() {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const timeLabel = `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;

  document.title = `${mode === "Work" ? "Focus Time" : "Break Time"} • ${timeLabel} | Pomodoro App`;

  app.innerHTML = `
    <div class="card">
    
    <h2 class="mode"> ${
      mode === "Work" ? "🧸 Focus Time" : "🍯 Break Time"
    }</h2>

    

    <div class="timer">
    ${timeLabel}
    </div>

    <p class="sessions">🐻 Completed Sessions: ${completedSessions}</p>
    
    <div class="buttons">
    <button id="start">START</button>
    <button id="pause">PAUSE</button>
    <button id="reset">RESET</button>
    </div>

    </div>
    `;
}

function startTimer() {
  if (isRunning) return;

  isRunning = true;

  interval = setInterval(() => {
    if (seconds <= 0) {
      if (mode === "Work") {
        completedSessions++;

        mode = "Break";
        seconds = 5 * 60;

        alert("Work session ended!");
      } else {
        mode = "Work";
        seconds = 25 * 60;

        alert("Break session ended!");
      }
      render();
      return;
    }
    seconds--;
    render();
  }, 1000);
}

function pauseTimer() {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
  isRunning = false;
}

function resetTimer() {
  pauseTimer();

  mode = "Work";
  seconds = 25 * 60;

  render();
}

app.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;

  if (target.id === "start") {
    startTimer();
  }

  if (target.id === "pause") {
    pauseTimer();
  }

  if (target.id === "reset") {
    resetTimer();
  }
});

render();
