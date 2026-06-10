let seconds = 25*60;

let interval: number | null = null;
let isRunning = false;
const app= document.getElementById('app') as HTMLElement;

app.innerHTML = "<h1>Pomodoro App</h1>";

function render(){
    const minutes = Math.floor(seconds/60);
    const remainingSeconds = seconds%60;

    app.innerHTML =
    `
    <h1>${minutes}:${remainingSeconds.toString().padStart(2,"0")}</h1>

    <button id="start">START</button>
    <button id="pause">PAUSE</button>
    <button id="reset">RESET</button>
    `;

}

function attachEvents(){
    const startBtn= document.getElementById("start")!;
    const pauseBtn= document.getElementById("pause")!;
    const resetBtn = document.getElementById("reset")!;

    startBtn.onclick= startTimer;
    pauseBtn.onclick= pauseTimer;
    resetBtn.onclick= resetTimer;
}

function startTimer(){
    if (isRunning) return;

    isRunning = true;

    interval = setInterval(() => {
        if(seconds<=0){
            clearInterval(interval!);
            interval= null;
            isRunning=false;
            
            return;
        }
        seconds--;
        render();
        attachEvents();
    }, 1000);
}

function pauseTimer(){
    if(interval){
        clearInterval(interval);
        interval= null;
        }
        isRunning= false;
}

function resetTimer(){
    pauseTimer();
    seconds = 25*60;
    render();
    attachEvents();
}
render();

attachEvents();