topnavtext1.value = localStorage.getItem('topnavtext1');
topnavtext1.oninput = () => {
  localStorage.setItem('topnavtext1', topnavtext1.value)
};

topnavtext2.value = localStorage.getItem('topnavtext2');
topnavtext2.oninput = () => {
  localStorage.setItem('topnavtext2', topnavtext2.value)
};


//Timer Code

const workTimer = document.getElementById('work-timer');
const shortTimer = document.getElementById('short-timer');
const longTimer = document.getElementById('long-timer');

shortTimer.style.display = "none";
longTimer.style.display = "none";

const timerOptionBtns = document.querySelectorAll('.timer-option button');
const timerSettingsBtns = document.querySelectorAll('.timer-settings button');

document.getElementById('reset-button').style.display = "none"
document.getElementById('continue-button').style.display = "none"
document.getElementById('pause-button').style.display = "none"

let intervalId;
let isRunning = false;
let currentTimer = "work";
let minutes, seconds;

function updateTimerDisplay() {
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formattedSeconds = seconds < 10  && seconds != 0 ? `0${seconds}` : `${seconds}`;
  
    workTimer.innerHTML = `${formattedMinutes}:${formattedSeconds}`;
  }
  

function startTimer() {
  resetTimer()
  const mininput = document.getElementById("min");
  mininput.style.display = "none";
    if (isRunning) return;
  isRunning = true;
  intervalId = setInterval(function () {
    if (seconds > 0) {
      seconds--;
    } else {
      if (minutes === 0) {
        clearInterval(intervalId);
        isRunning = false;
        resetTimer();
      } else {
        seconds = 59;
        minutes--;
      }
    }

    updateTimerDisplay();
  }, 1000);
}

function stopTimer() {
  if (!isRunning) return;

  clearInterval(intervalId);
  isRunning = false;
}

function resetTimer() {
  const mininput = document.getElementById("min");
  mininput.style.display = "block";
  var x = document.getElementById("frm1");
  var num = "";
  var i;
  for (i = 0; i < 1 ;i++) {
    num += x.elements[i].value + "<br>";
  }
  var workmin = parseInt(num);

  stopTimer();
  if (Number.isNaN(workmin)) {
    workmin = 0;
  }
  if (currentTimer === "work") {
    minutes = workmin;
  } else if (currentTimer === "short") {
    const element = document.getElementById("min");
    element.style.display = "none";
    minutes = 5;
  } else {
    const element = document.getElementById("min");
    element.style.display = "none";
    minutes = 15;
  }
  seconds = '00';
  updateTimerDisplay();
}

function switchTimer() {
  var workmin = 0
  var x = document.getElementById("frm1");
  var num = "";
  var i;
  for (i = 0; i < 1 ;i++) {
    num += x.elements[i].value + "<br>";
  }
  var workmin = parseInt(num);



  if (currentTimer === "work") {
    currentTimer = "short";
    shortTimer.style.display = "block";
    workTimer.style.display = "none";
    minutes = workmin;
  } else if (currentTimer === "short") {
    currentTimer = "long";
    longTimer.style.display = "block";
    shortTimer.style.display = "none";
    minutes = 15;
  } else {
    currentTimer = "work";
    workTimer.style.display = "block";
    longTimer.style.display = "none";
    minutes = 25;
  }
  seconds = '00';
  updateTimerDisplay();
  resetTimer();
}

timerOptionBtns.forEach(button => {
  button.addEventListener('click', () => {
    timerOptionBtns.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    if (button.id === "work-button") {
      currentTimer = "work";
    } else if (button.id === "short-button") {
      currentTimer = "short";
    } else {
      currentTimer = "long";
    }

    resetTimer();
  });
});

timerSettingsBtns.forEach(button => {
  button.addEventListener('click', () => {
    if (button.id === "start-button") {
        document.getElementById('start-button').style.display = "none";
        document.getElementById('reset-button').style.display = "";
        document.getElementById('pause-button').style.display = "";
        startTimer();
    } else if (button.id === "pause-button") {
        document.getElementById('continue-button').style.display = "";
        document.getElementById('pause-button').style.display = "none";
        stopTimer();
    } else if (button.id === "continue-button") {
        document.getElementById('pause-button').style.display = "";
        document.getElementById('continue-button').style.display = "none";
        startTimer();
    } else if (button.id === "reset-button") {
        document.getElementById('start-button').style.display = "";
        document.getElementById('reset-button').style.display = "none";
        document.getElementById('pause-button').style.display = "none";
        document.getElementById('continue-button').style.display = "none";
        resetTimer();
    }
  });
});

resetTimer();

function openNav() {
  document.getElementById("mySidenav").style.width = "20%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

