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
  const mininput = document.getElementById("minimin");
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
  const mininput = document.getElementById("minimin");
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

todod1.value = localStorage.getItem('todod1');
todod1.oninput = () => {
  localStorage.setItem('todod1', todod1.value)
};

todod2.value = localStorage.getItem('todod2');
todod2.oninput = () => {
  localStorage.setItem('todod2', todod2.value)
};

todod3.value = localStorage.getItem('todod3');
todod3.oninput = () => {
  localStorage.setItem('todod3', todod3.value)
};

todod4.value = localStorage.getItem('todod4');
todod4.oninput = () => {
  localStorage.setItem('todod4', todod4.value)
};

todod5.value = localStorage.getItem('todod5');
todod5.oninput = () => {
  localStorage.setItem('todod5', todod5.value)
};

todod6.value = localStorage.getItem('todod6');
todod6.oninput = () => {
  localStorage.setItem('todod6', todod6.value)
};




var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var d = new Date();
document.getElementById("calhometitle").innerHTML = monthNames[d.getMonth()]

checkbox1 = document.getElementById("chkbtn1");
chkbtn1.onchange = () => {
  localStorage.setItem("chkbtn1", checkbox1.checked)
};

checked = JSON.parse(localStorage.getItem("chkbtn1"));
document.getElementById("chkbtn1").checked = checked;

checkbox2 = document.getElementById("chkbtn2");
chkbtn2.onchange = () => {
  localStorage.setItem("chkbtn2", checkbox2.checked)
};

checked = JSON.parse(localStorage.getItem("chkbtn2"));
document.getElementById("chkbtn2").checked = checked;

checkbox3 = document.getElementById("chkbtn3");
chkbtn3.onchange = () => {
  localStorage.setItem("chkbtn3", checkbox3.checked)
};

checked = JSON.parse(localStorage.getItem("chkbtn3"));
document.getElementById("chkbtn3").checked = checked;

checkbox4 = document.getElementById("chkbtn4");
chkbtn4.onchange = () => {
  localStorage.setItem("chkbtn4", checkbox4.checked)
};

checked = JSON.parse(localStorage.getItem("chkbtn4"));
document.getElementById("chkbtn4").checked = checked;

checkbox5 = document.getElementById("chkbtn5");
chkbtn5.onchange = () => {
  localStorage.setItem("chkbtn5", checkbox5.checked)
};

checked = JSON.parse(localStorage.getItem("chkbtn5"));
document.getElementById("chkbtn5").checked = checked;

checkbox6 = document.getElementById("chkbtn6");
chkbtn6.onchange = () => {
  localStorage.setItem("chkbtn6", checkbox6.checked)
};

checked = JSON.parse(localStorage.getItem("chkbtn6"));
document.getElementById("chkbtn6").checked = checked;

const checkbtn1 = document.getElementById("chkbtn1");
const textToCross1 = document.getElementById("todod1");
checkbtn1.addEventListener("change",
function () {
    if (this.checked) {
        textToCross1.style.textDecoration = "line-through";
        textToCross1.style.opacity = "20%";
        checkbtn1.style.opacity = "20%";
    }
    else {
        textToCross1.style.textDecoration = "none";
        textToCross1.style.opacity = "100%";
        checkbtn1.style.opacity = "30%";
    }
});

const checkbtn2 = document.getElementById("chkbtn2");
const textToCross2 = document.getElementById("todod2");
checkbtn2.addEventListener("change",
function () {
    if (this.checked) {
        textToCross2.style.textDecoration = "line-through";
        textToCross2.style.opacity = "20%";
        checkbtn2.style.opacity = "20%";
    }
    else {
        textToCross2.style.textDecoration = "none";
        textToCross2.style.opacity = "100%";
        checkbtn2.style.opacity = "30%";
    }
});

const checkbtn3 = document.getElementById("chkbtn3");
const textToCross3 = document.getElementById("todod3");
checkbtn3.addEventListener("change",
function () {
    if (this.checked) {
        textToCross3.style.textDecoration = "line-through";
        textToCross3.style.opacity = "20%";
        checkbtn3.style.opacity = "20%";
    }
    else {
        textToCross3.style.textDecoration = "none";
        textToCross3.style.opacity = "100%";
        checkbtn3.style.opacity = "30%";
    }
});

const checkbtn4 = document.getElementById("chkbtn4");
const textToCross4 = document.getElementById("todod4");
checkbtn4.addEventListener("change",
function () {
    if (this.checked) {
        textToCross4.style.textDecoration = "line-through";
        textToCross4.style.opacity = "20%";
        checkbtn4.style.opacity = "20%";
    }
    else {
        textToCross4.style.textDecoration = "none";
        textToCross4.style.opacity = "100%";
        checkbtn4.style.opacity = "30%";
    }
});
const checkbtn5 = document.getElementById("chkbtn5");
const textToCross5 = document.getElementById("todod5");
checkbtn5.addEventListener("change",
function () {
    if (this.checked) {
        textToCross5.style.textDecoration = "line-through";
        textToCross5.style.opacity = "20%";
        checkbtn5.style.opacity = "20%";
    }
    else {
        textToCross5.style.textDecoration = "none";
        textToCross5.style.opacity = "100%";
        checkbtn5.style.opacity = "30%";
    }
});

const checkbtn6 = document.getElementById("chkbtn6");
const textToCross6 = document.getElementById("todod6");
checkbtn6.addEventListener("change",
function () {
    if (this.checked) {
        textToCross6.style.textDecoration = "line-through";
        textToCross6.style.opacity = "20%";
        checkbtn6.style.opacity = "20%";
    }
    else {
        textToCross6.style.textDecoration = "none";
        textToCross6.style.opacity = "100%";
        checkbtn6.style.opacity = "30%";
    }
});

function openNav() {
  document.getElementById("mySidenav").style.width = "20%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}