
topnavtext1.value = localStorage.getItem('topnavtext1');
topnavtext1.oninput = () => {
  localStorage.setItem('topnavtext1', topnavtext1.value)
};

topnavtext2.value = localStorage.getItem('topnavtext2');
topnavtext2.oninput = () => {
  localStorage.setItem('topnavtext2', topnavtext2.value)
};

//Todo Daily
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

//Todo Weekly
todow1.value = localStorage.getItem('todow1');
todow1.oninput = () => {
  localStorage.setItem('todow1', todow1.value)
};

todow2.value = localStorage.getItem('todow2');
todow2.oninput = () => {
  localStorage.setItem('todow2', todow2.value)
};

todow3.value = localStorage.getItem('todow3');
todow3.oninput = () => {
  localStorage.setItem('todow3', todow3.value)
};

todow4.value = localStorage.getItem('todow4');
todow4.oninput = () => {
  localStorage.setItem('todow4', todow4.value)
};

todow5.value = localStorage.getItem('todow5');
todow5.oninput = () => {
  localStorage.setItem('todow5', todow5.value)
};

todow6.value = localStorage.getItem('todow6');
todow6.oninput = () => {
  localStorage.setItem('todow6', todow6.value)
};

//Kanban Backlog
kanbanb1.value = localStorage.getItem('kanbanb1');
kanbanb1.oninput = () => {
  localStorage.setItem('kanbanb1', kanbanb1.value)
};

kanbanb2.value = localStorage.getItem('kanbanb2');
kanbanb2.oninput = () => {
  localStorage.setItem('kanbanb2', kanbanb2.value)
};

kanbanb3.value = localStorage.getItem('kanbanb3');
kanbanb3.oninput = () => {
  localStorage.setItem('kanbanb3', kanbanb3.value)
};

kanbanb4.value = localStorage.getItem('kanbanb4');
kanbanb4.oninput = () => {
  localStorage.setItem('kanbanb4', kanbanb4.value)
};

kanbanb5.value = localStorage.getItem('kanbanb5');
kanbanb5.oninput = () => {
  localStorage.setItem('kanbanb5', kanbanb5.value)
};

kanbanb6.value = localStorage.getItem('kanbanb6');
kanbanb6.oninput = () => {
  localStorage.setItem('kanbanb6', kanbanb6.value)
};

//Kanban Doing
kanband1.value = localStorage.getItem('kanband1');
kanband1.oninput = () => {
  localStorage.setItem('kanband1', kanband1.value)
};

kanband2.value = localStorage.getItem('kanband2');
kanband2.oninput = () => {
  localStorage.setItem('kanband2', kanband2.value)
};

kanband3.value = localStorage.getItem('kanband3');
kanband3.oninput = () => {
  localStorage.setItem('kanband3', kanband3.value)
};

kanband4.value = localStorage.getItem('kanband4');
kanband4.oninput = () => {
  localStorage.setItem('kanband4', kanband4.value)
};

kanband5.value = localStorage.getItem('kanband5');
kanband5.oninput = () => {
  localStorage.setItem('kanband5', kanband5.value)
};

kanband6.value = localStorage.getItem('kanband6');
kanband6.oninput = () => {
  localStorage.setItem('kanband6', kanband6.value)
};

//Kanban In Progress
kanbanp1.value = localStorage.getItem('kanbanp1');
kanbanp1.oninput = () => {
  localStorage.setItem('kanbanp1', kanbanp1.value)
};

kanbanp2.value = localStorage.getItem('kanbanp2');
kanbanp2.oninput = () => {
  localStorage.setItem('kanbanp2', kanbanp2.value)
};

kanbanp3.value = localStorage.getItem('kanbanp3');
kanbanp3.oninput = () => {
  localStorage.setItem('kanbanp3', kanbanp3.value)
};

kanbanp4.value = localStorage.getItem('kanbanp4');
kanbanp4.oninput = () => {
  localStorage.setItem('kanbanp4', kanbanp4.value)
};

kanbanp5.value = localStorage.getItem('kanbanp5');
kanbanp5.oninput = () => {
  localStorage.setItem('kanbanp5', kanbanp5.value)
};

kanbanp6.value = localStorage.getItem('kanbanp6');
kanbanp6.oninput = () => {
  localStorage.setItem('kanbanp6', kanbanp6.value)
};

//Kanban Completed
kanbanc1.value = localStorage.getItem('kanbanc1');
kanbanc1.oninput = () => {
  localStorage.setItem('kanbanc1', kanbanc1.value)
};

kanbanc2.value = localStorage.getItem('kanbanc2');
kanbanc2.oninput = () => {
  localStorage.setItem('kanbanc2', kanbanc2.value)
};

kanbanc3.value = localStorage.getItem('kanbanc3');
kanbanc3.oninput = () => {
  localStorage.setItem('kanbanc3', kanbanc3.value)
};

kanbanc4.value = localStorage.getItem('kanbanc4');
kanbanc4.oninput = () => {
  localStorage.setItem('kanbanc4', kanbanc4.value)
};

kanbanc5.value = localStorage.getItem('kanbanc5');
kanbanc5.oninput = () => {
  localStorage.setItem('kanbanc5', kanbanc5.value)
};

kanbanc6.value = localStorage.getItem('kanbanc6');
kanbanc6.oninput = () => {
  localStorage.setItem('kanbanc6', kanbanc6.value)
};

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const day = document.querySelector(".calendar-dates");

const currdate = document
    .querySelector(".calendar-current-date");

const prenexIcons = document
    .querySelectorAll(".calendar-navigation span");

// Array of month names
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

// Function to generate the calendar
const manipulate = () => {

    // Get the first day of the month
    let dayone = new Date(year, month, 1).getDay();

    // Get the last date of the month
    let lastdate = new Date(year, month + 1, 0).getDate();

    // Get the day of the last date of the month
    let dayend = new Date(year, month, lastdate).getDay();

    // Get the last date of the previous month
    let monthlastdate = new Date(year, month, 0).getDate();

    // Variable to store the generated calendar HTML
    let lit = "";

    // Loop to add the last dates of the previous month
    for (let i = dayone; i > 0; i--) {
        lit +=
            `<li class="inactive">${monthlastdate - i + 1}</li>`;
    }

    // Loop to add the dates of the current month
    for (let i = 1; i <= lastdate; i++) {

        // Check if the current date is today
        let isToday = i === date.getDate()
            && month === new Date().getMonth()
            && year === new Date().getFullYear()
            ? "active"
            : "";
        lit += `<li class="${isToday}">${i}</li>`;
    }

    // Loop to add the first dates of the next month
    for (let i = dayend; i < 6; i++) {
        lit += `<li class="inactive">${i - dayend + 1}</li>`
    }

    // Update the text of the current date element 
    // with the formatted current month and year
    currdate.innerText = `${months[month]} ${year}`;

    // update the HTML of the dates element 
    // with the generated calendar
    day.innerHTML = lit;
}

manipulate();

// Attach a click event listener to each icon
prenexIcons.forEach(icon => {

    // When an icon is clicked
    icon.addEventListener("click", () => {

        // Check if the icon is "calendar-prev"
        // or "calendar-next"
        month = icon.id === "calendar-prev" ? month - 1 : month + 1;

        // Check if the month is out of range
        if (month < 0 || month > 11) {

            // Set the date to the first day of the 
            // month with the new year
            date = new Date(year, month, new Date().getDate());

            // Set the year to the new year
            year = date.getFullYear();

            // Set the month to the new month
            month = date.getMonth();
        }

        else {

            // Set the date to the current date
            date = new Date();
        }

        // Call the manipulate function to 
        // update the calendar display
        manipulate();
    });
});

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

checkbox7 = document.getElementById("chkbtn7");
chkbtn7.onchange = () => {
  localStorage.setItem("chkbtn7", checkbox7.checked)
};

checked = JSON.parse(localStorage.getItem("chkbtn7"));
document.getElementById("chkbtn7").checked = checked;

checkbox8 = document.getElementById("chkbtn8");
chkbtn8.onchange = () => {
  localStorage.setItem("chkbtn8", checkbox8.checked)
};

checked = JSON.parse(localStorage.getItem("chkbtn8"));
document.getElementById("chkbtn8").checked = checked;

checkbox9 = document.getElementById("chkbtn9");
chkbtn9.onchange = () => {
  localStorage.setItem("chkbtn9", checkbox9.checked)
};

checked = JSON.parse(localStorage.getItem("chkbtn9"));
document.getElementById("chkbtn9").checked = checked;

checkbox10 = document.getElementById("chkbtn10");
chkbtn10.onchange = () => {
  localStorage.setItem("chkbtn10", checkbox10.checked)
};

checked = JSON.parse(localStorage.getItem("chkbtn10"));
document.getElementById("chkbtn10").checked = checked;

checkbox11 = document.getElementById("chkbtn11");
chkbtn11.onchange = () => {
  localStorage.setItem("chkbtn11", checkbox11.checked)
};

checked = JSON.parse(localStorage.getItem("chkbtn11"));
document.getElementById("chkbtn11").checked = checked;

checkbox12 = document.getElementById("chkbtn12");
chkbtn12.onchange = () => {
  localStorage.setItem("chkbtn12", checkbox12.checked)
};

checked = JSON.parse(localStorage.getItem("chkbtn12"));
document.getElementById("chkbtn12").checked = checked;

checkbox13 = document.getElementById("chkbtn13");
chkbtn13.onchange = () => {
  localStorage.setItem("chkbtn13", checkbox13.checked)
};

checked = JSON.parse(localStorage.getItem("chkbtn13"));
document.getElementById("chkbtn13").checked = checked;

checkbox14 = document.getElementById("chkbtn14");
chkbtn14.onchange = () => {
  localStorage.setItem("chkbtn14", checkbox14.checked)
};

checked = JSON.parse(localStorage.getItem("chkbtn14"));
document.getElementById("chkbtn14").checked = checked;

checkbox15 = document.getElementById("chkbtn15");
chkbtn15.onchange = () => {
  localStorage.setItem("chkbtn15", checkbox15.checked)
};

checked = JSON.parse(localStorage.getItem("chkbtn15"));
document.getElementById("chkbtn15").checked = checked;

checkbox16 = document.getElementById("chkbtn16");
chkbtn16.onchange = () => {
  localStorage.setItem("chkbtn16", checkbox16.checked)
};

checked = JSON.parse(localStorage.getItem("chkbtn16"));
document.getElementById("chkbtn16").checked = checked;

checkbox17 = document.getElementById("chkbtn17");
chkbtn17.onchange = () => {
  localStorage.setItem("chkbtn17", checkbox17.checked)
};

checked = JSON.parse(localStorage.getItem("chkbtn17"));
document.getElementById("chkbtn17").checked = checked;

checkbox18 = document.getElementById("chkbtn18");
chkbtn18.onchange = () => {
  localStorage.setItem("chkbtn18", checkbox18.checked)
};

checked = JSON.parse(localStorage.getItem("chkbtn18"));
document.getElementById("chkbtn18").checked = checked;

checkbox19 = document.getElementById("chkbtn19");
chkbtn19.onchange = () => {
  localStorage.setItem("chkbtn19", checkbox19.checked)
};

checked = JSON.parse(localStorage.getItem("chkbtn19"));
document.getElementById("chkbtn19").checked = checked;

checkbox20 = document.getElementById("chkbtn20");
chkbtn20.onchange = () => {
  localStorage.setItem("chkbtn20", checkbox20.checked)
};

checked = JSON.parse(localStorage.getItem("chkbtn20"));
document.getElementById("chkbtn20").checked = checked;

checkbox21 = document.getElementById("chkbtn21");
chkbtn21.onchange = () => {
  localStorage.setItem("chkbtn21", checkbox21.checked)
};

checked = JSON.parse(localStorage.getItem("chkbtn21"));
document.getElementById("chkbtn21").checked = checked;

checkbox22 = document.getElementById("chkbtn22");
chkbtn22.onchange = () => {
  localStorage.setItem("chkbtn22", checkbox22.checked)
};

checked = JSON.parse(localStorage.getItem("chkbtn22"));
document.getElementById("chkbtn22").checked = checked;

checkbox23 = document.getElementById("chkbtn23");
chkbtn23.onchange = () => {
  localStorage.setItem("chkbtn23", checkbox23.checked)
};

checked = JSON.parse(localStorage.getItem("chkbtn23"));
document.getElementById("chkbtn23").checked = checked;

checkbox24 = document.getElementById("chkbtn24");
chkbtn24.onchange = () => {
  localStorage.setItem("chkbtn24", checkbox24.checked)
};

checked = JSON.parse(localStorage.getItem("chkbtn24"));
document.getElementById("chkbtn24").checked = checked;

checkbox25 = document.getElementById("chkbtn25");
chkbtn25.onchange = () => {
  localStorage.setItem("chkbtn25", checkbox25.checked)
};

checked = JSON.parse(localStorage.getItem("chkbtn25"));
document.getElementById("chkbtn25").checked = checked;

checkbox26 = document.getElementById("chkbtn26");
chkbtn26.onchange = () => {
  localStorage.setItem("chkbtn26", checkbox26.checked)
};

checked = JSON.parse(localStorage.getItem("chkbtn26"));
document.getElementById("chkbtn26").checked = checked;

checkbox27 = document.getElementById("chkbtn27");
chkbtn27.onchange = () => {
  localStorage.setItem("chkbtn27", checkbox27.checked)
};

checked = JSON.parse(localStorage.getItem("chkbtn27"));
document.getElementById("chkbtn27").checked = checked;

checkbox28 = document.getElementById("chkbtn28");
chkbtn28.onchange = () => {
  localStorage.setItem("chkbtn28", checkbox28.checked)
};

checked = JSON.parse(localStorage.getItem("chkbtn28"));
document.getElementById("chkbtn28").checked = checked;

checkbox29 = document.getElementById("chkbtn29");
chkbtn29.onchange = () => {
  localStorage.setItem("chkbtn29", checkbox29.checked)
};

checked = JSON.parse(localStorage.getItem("chkbtn29"));
document.getElementById("chkbtn29").checked = checked;

checkbox30 = document.getElementById("chkbtn30");
chkbtn30.onchange = () => {
  localStorage.setItem("chkbtn30", checkbox30.checked)
};

checked = JSON.parse(localStorage.getItem("chkbtn30"));
document.getElementById("chkbtn30").checked = checked;

checkbox31 = document.getElementById("chkbtn31");
chkbtn31.onchange = () => {
  localStorage.setItem("chkbtn31", checkbox31.checked)
};

checked = JSON.parse(localStorage.getItem("chkbtn31"));
document.getElementById("chkbtn31").checked = checked;

checkbox32 = document.getElementById("chkbtn32");
chkbtn32.onchange = () => {
  localStorage.setItem("chkbtn32", checkbox32.checked)
};

checked = JSON.parse(localStorage.getItem("chkbtn32"));
document.getElementById("chkbtn32").checked = checked;

checkbox33 = document.getElementById("chkbtn33");
chkbtn33.onchange = () => {
  localStorage.setItem("chkbtn33", checkbox33.checked)
};

checked = JSON.parse(localStorage.getItem("chkbtn33"));
document.getElementById("chkbtn33").checked = checked;

checkbox34 = document.getElementById("chkbtn34");
chkbtn34.onchange = () => {
  localStorage.setItem("chkbtn34", checkbox34.checked)
};

checked = JSON.parse(localStorage.getItem("chkbtn34"));
document.getElementById("chkbtn34").checked = checked;

checkbox35 = document.getElementById("chkbtn35");
chkbtn35.onchange = () => {
  localStorage.setItem("chkbtn35", checkbox35.checked)
};

checked = JSON.parse(localStorage.getItem("chkbtn35"));
document.getElementById("chkbtn35").checked = checked;

checkbox36 = document.getElementById("chkbtn36");
chkbtn36.onchange = () => {
  localStorage.setItem("chkbtn36", checkbox36.checked)
};

checked = JSON.parse(localStorage.getItem("chkbtn36"));
document.getElementById("chkbtn36").checked = checked;







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

const checkbtn7 = document.getElementById("chkbtn7");
const textToCross7 = document.getElementById("todow1");
checkbtn7.addEventListener("change",
function () {
    if (this.checked) {
        textToCross7.style.textDecoration = "line-through";
        textToCross7.style.opacity = "20%";
        checkbtn7.style.opacity = "20%";
    }
    else {
        textToCross7.style.textDecoration = "none";
        textToCross7.style.opacity = "100%";
        checkbtn7.style.opacity = "30%";
    }
});

const checkbtn8 = document.getElementById("chkbtn8");
const textToCross8 = document.getElementById("todow2");
checkbtn8.addEventListener("change",
function () {
    if (this.checked) {
        textToCross8.style.textDecoration = "line-through";
        textToCross8.style.opacity = "20%";
        checkbtn8.style.opacity = "20%";
    }
    else {
        textToCross8.style.textDecoration = "none";
        textToCross8.style.opacity = "100%";
        checkbtn8.style.opacity = "30%";
    }
});
const checkbtn9 = document.getElementById("chkbtn9");
const textToCross9 = document.getElementById("todow3");
checkbtn9.addEventListener("change",
function () {
    if (this.checked) {
        textToCross9.style.textDecoration = "line-through";
        textToCross9.style.opacity = "20%";
        checkbtn9.style.opacity = "20%";
    }
    else {
        textToCross9.style.textDecoration = "none";
        textToCross9.style.opacity = "100%";
        checkbtn9.style.opacity = "30%";
    }
});

const checkbtn10 = document.getElementById("chkbtn10");
const textToCross10 = document.getElementById("todow4");
checkbtn10.addEventListener("change",
function () {
    if (this.checked) {
        textToCross10.style.textDecoration = "line-through";
        textToCross10.style.opacity = "20%";
        checkbtn10.style.opacity = "20%";
    }
    else {
        textToCross10.style.textDecoration = "none";
        textToCross10.style.opacity = "100%";
        checkbtn10.style.opacity = "30%";
    }
});
const checkbtn11 = document.getElementById("chkbtn11");
const textToCross11 = document.getElementById("todow5");
checkbtn11.addEventListener("change",
function () {
    if (this.checked) {
        textToCross11.style.textDecoration = "line-through";
        textToCross11.style.opacity = "20%";
        checkbtn11.style.opacity = "20%";
    }
    else {
        textToCross11.style.textDecoration = "none";
        textToCross11.style.opacity = "100%";
        checkbtn11.style.opacity = "30%";
    }
});

const checkbtn12 = document.getElementById("chkbtn12");
const textToCross12 = document.getElementById("todow6");
checkbtn12.addEventListener("change",
function () {
    if (this.checked) {
        textToCross12.style.textDecoration = "line-through";
        textToCross12.style.opacity = "20%";
        checkbtn12.style.opacity = "20%";
    }
    else {
        textToCross12.style.textDecoration = "none";
        textToCross12.style.opacity = "100%";
        checkbtn12.style.opacity = "30%";
    }
});

const checkbtn13 = document.getElementById("chkbtn13");
const textToCross13 = document.getElementById("kanbanb1");
checkbtn13.addEventListener("change",
function () {
    if (this.checked) {
        textToCross13.style.textDecoration = "line-through";
        textToCross13.style.opacity = "20%";
        checkbtn13.style.opacity = "20%";
    }
    else {
        textToCross13.style.textDecoration = "none";
        textToCross13.style.opacity = "100%";
        checkbtn13.style.opacity = "30%";
    }
});

const checkbtn14 = document.getElementById("chkbtn14");
const textToCross14 = document.getElementById("kanbanb2");
checkbtn14.addEventListener("change",
function () {
    if (this.checked) {
        textToCross14.style.textDecoration = "line-through";
        textToCross14.style.opacity = "20%";
        checkbtn14.style.opacity = "20%";
    }
    else {
        textToCross14.style.textDecoration = "none";
        textToCross14.style.opacity = "100%";
        checkbtn14.style.opacity = "30%";
    }
});

const checkbtn15 = document.getElementById("chkbtn15");
const textToCross15 = document.getElementById("kanbanb3");
checkbtn15.addEventListener("change",
function () {
    if (this.checked) {
        textToCross15.style.textDecoration = "line-through";
        textToCross15.style.opacity = "20%";
        checkbtn15.style.opacity = "20%";
    }
    else {
        textToCross15.style.textDecoration = "none";
        textToCross15.style.opacity = "100%";
        checkbtn15.style.opacity = "30%";
    }
});

const checkbtn16 = document.getElementById("chkbtn16");
const textToCross16 = document.getElementById("kanbanb4");
checkbtn16.addEventListener("change",
function () {
    if (this.checked) {
        textToCross16.style.textDecoration = "line-through";
        textToCross16.style.opacity = "20%";
        checkbtn16.style.opacity = "20%";
    }
    else {
        textToCross16.style.textDecoration = "none";
        textToCross16.style.opacity = "100%";
        checkbtn16.style.opacity = "30%";
    }
});
const checkbtn17 = document.getElementById("chkbtn17");
const textToCross17 = document.getElementById("kanbanb5");
checkbtn17.addEventListener("change",
function () {
    if (this.checked) {
        textToCross17.style.textDecoration = "line-through";
        textToCross17.style.opacity = "20%";
        checkbtn17.style.opacity = "20%";
    }
    else {
        textToCross17.style.textDecoration = "none";
        textToCross17.style.opacity = "100%";
        checkbtn17.style.opacity = "30%";
    }
});

const checkbtn18 = document.getElementById("chkbtn18");
const textToCross18 = document.getElementById("kanbanb6");
checkbtn18.addEventListener("change",
function () {
    if (this.checked) {
        textToCross18.style.textDecoration = "line-through";
        textToCross18.style.opacity = "20%";
        checkbtn18.style.opacity = "20%";
    }
    else {
        textToCross18.style.textDecoration = "none";
        textToCross18.style.opacity = "100%";
        checkbtn18.style.opacity = "30%";
    }
});
const checkbtn19 = document.getElementById("chkbtn19");
const textToCross19 = document.getElementById("kanband1");
checkbtn19.addEventListener("change",
function () {
    if (this.checked) {
        textToCross19.style.textDecoration = "line-through";
        textToCross19.style.opacity = "20%";
        checkbtn19.style.opacity = "20%";
    }
    else {
        textToCross19.style.textDecoration = "none";
        textToCross19.style.opacity = "100%";
        checkbtn19.style.opacity = "30%";
    }
});

const checkbtn20 = document.getElementById("chkbtn20");
const textToCross20 = document.getElementById("kanband2");
checkbtn20.addEventListener("change",
function () {
    if (this.checked) {
        textToCross20.style.textDecoration = "line-through";
        textToCross20.style.opacity = "20%";
        checkbtn20.style.opacity = "20%";
    }
    else {
        textToCross20.style.textDecoration = "none";
        textToCross20.style.opacity = "100%";
        checkbtn20.style.opacity = "30%";
    }
});
const checkbtn21 = document.getElementById("chkbtn21");
const textToCross21 = document.getElementById("kanband3");
checkbtn21.addEventListener("change",
function () {
    if (this.checked) {
        textToCross21.style.textDecoration = "line-through";
        textToCross21.style.opacity = "20%";
        checkbtn21.style.opacity = "20%";
    }
    else {
        textToCross21.style.textDecoration = "none";
        textToCross21.style.opacity = "100%";
        checkbtn21.style.opacity = "30%";
    }
});

const checkbtn22 = document.getElementById("chkbtn22");
const textToCross22 = document.getElementById("kanband4");
checkbtn22.addEventListener("change",
function () {
    if (this.checked) {
        textToCross22.style.textDecoration = "line-through";
        textToCross22.style.opacity = "20%";
        checkbtn22.style.opacity = "20%";
    }
    else {
        textToCross22.style.textDecoration = "none";
        textToCross22.style.opacity = "100%";
        checkbtn22.style.opacity = "30%";
    }
});
const checkbtn23 = document.getElementById("chkbtn23");
const textToCross23 = document.getElementById("kanband5");
checkbtn23.addEventListener("change",
function () {
    if (this.checked) {
        textToCross23.style.textDecoration = "line-through";
        textToCross23.style.opacity = "20%";
        checkbtn23.style.opacity = "20%";
    }
    else {
        textToCross23.style.textDecoration = "none";
        textToCross23.style.opacity = "100%";
        checkbtn23.style.opacity = "30%";
    }
});

const checkbtn24 = document.getElementById("chkbtn24");
const textToCross24 = document.getElementById("kanband6");
checkbtn24.addEventListener("change",
function () {
    if (this.checked) {
        textToCross24.style.textDecoration = "line-through";
        textToCross24.style.opacity = "20%";
        checkbtn24.style.opacity = "20%";
    }
    else {
        textToCross24.style.textDecoration = "none";
        textToCross24.style.opacity = "100%";
        checkbtn24.style.opacity = "30%";
    }
});

const checkbtn25 = document.getElementById("chkbtn25");
const textToCross25 = document.getElementById("kanbanp1");
checkbtn25.addEventListener("change",
function () {
    if (this.checked) {
        textToCross25.style.textDecoration = "line-through";
        textToCross25.style.opacity = "20%";
        checkbtn25.style.opacity = "20%";
    }
    else {
        textToCross25.style.textDecoration = "none";
        textToCross25.style.opacity = "100%";
        checkbtn25.style.opacity = "30%";
    }
});

const checkbtn26 = document.getElementById("chkbtn26");
const textToCross26 = document.getElementById("kanbanp2");
checkbtn26.addEventListener("change",
function () {
    if (this.checked) {
        textToCross26.style.textDecoration = "line-through";
        textToCross26.style.opacity = "20%";
        checkbtn26.style.opacity = "20%";
    }
    else {
        textToCross26.style.textDecoration = "none";
        textToCross26.style.opacity = "100%";
        checkbtn26.style.opacity = "30%";
    }
});

const checkbtn27 = document.getElementById("chkbtn27");
const textToCross27 = document.getElementById("kanbanp3");
checkbtn27.addEventListener("change",
function () {
    if (this.checked) {
        textToCross27.style.textDecoration = "line-through";
        textToCross27.style.opacity = "20%";
        checkbtn27.style.opacity = "20%";
    }
    else {
        textToCross27.style.textDecoration = "none";
        textToCross27.style.opacity = "100%";
        checkbtn27.style.opacity = "30%";
    }
});

const checkbtn28 = document.getElementById("chkbtn28");
const textToCross28 = document.getElementById("kanbanp4");
checkbtn28.addEventListener("change",
function () {
    if (this.checked) {
        textToCross28.style.textDecoration = "line-through";
        textToCross28.style.opacity = "20%";
        checkbtn28.style.opacity = "20%";
    }
    else {
        textToCross28.style.textDecoration = "none";
        textToCross28.style.opacity = "100%";
        checkbtn28.style.opacity = "30%";
    }
});
const checkbtn29 = document.getElementById("chkbtn29");
const textToCross29 = document.getElementById("kanbanp5");
checkbtn29.addEventListener("change",
function () {
    if (this.checked) {
        textToCross29.style.textDecoration = "line-through";
        textToCross29.style.opacity = "20%";
        checkbtn29.style.opacity = "20%";
    }
    else {
        textToCross29.style.textDecoration = "none";
        textToCross29.style.opacity = "100%";
        checkbtn29.style.opacity = "30%";
    }
});

const checkbtn30 = document.getElementById("chkbtn30");
const textToCross30 = document.getElementById("kanbanp6");
checkbtn30.addEventListener("change",
function () {
    if (this.checked) {
        textToCross30.style.textDecoration = "line-through";
        textToCross30.style.opacity = "20%";
        checkbtn30.style.opacity = "20%";
    }
    else {
        textToCross30.style.textDecoration = "none";
        textToCross30.style.opacity = "100%";
        checkbtn30.style.opacity = "30%";
    }
});
const checkbtn31 = document.getElementById("chkbtn31");
const textToCross31 = document.getElementById("kanbanc1");
checkbtn31.addEventListener("change",
function () {
    if (this.checked) {
        textToCross31.style.textDecoration = "line-through";
        textToCross31.style.opacity = "20%";
        checkbtn31.style.opacity = "20%";
    }
    else {
        textToCross31.style.textDecoration = "none";
        textToCross31.style.opacity = "100%";
        checkbtn31.style.opacity = "30%";
    }
});

const checkbtn32 = document.getElementById("chkbtn32");
const textToCross32 = document.getElementById("kanbanc2");
checkbtn32.addEventListener("change",
function () {
    if (this.checked) {
        textToCross32.style.textDecoration = "line-through";
        textToCross32.style.opacity = "20%";
        checkbtn32.style.opacity = "20%";
    }
    else {
        textToCross32.style.textDecoration = "none";
        textToCross32.style.opacity = "100%";
        checkbtn32.style.opacity = "30%";
    }
});
const checkbtn33 = document.getElementById("chkbtn33");
const textToCross33 = document.getElementById("kanbanc3");
checkbtn33.addEventListener("change",
function () {
    if (this.checked) {
        textToCross33.style.textDecoration = "line-through";
        textToCross33.style.opacity = "20%";
        checkbtn33.style.opacity = "20%";
    }
    else {
        textToCross33.style.textDecoration = "none";
        textToCross33.style.opacity = "100%";
        checkbtn33.style.opacity = "30%";
    }
});

const checkbtn34 = document.getElementById("chkbtn34");
const textToCross34 = document.getElementById("kanbanc4");
checkbtn34.addEventListener("change",
function () {
    if (this.checked) {
        textToCross34.style.textDecoration = "line-through";
        textToCross34.style.opacity = "20%";
        checkbtn34.style.opacity = "20%";
    }
    else {
        textToCross34.style.textDecoration = "none";
        textToCross34.style.opacity = "100%";
        checkbtn34.style.opacity = "30%";
    }
});
const checkbtn35 = document.getElementById("chkbtn35");
const textToCross35 = document.getElementById("kanbanc5");
checkbtn35.addEventListener("change",
function () {
    if (this.checked) {
        textToCross35.style.textDecoration = "line-through";
        textToCross35.style.opacity = "20%";
        checkbtn35.style.opacity = "20%";
    }
    else {
        textToCross35.style.textDecoration = "none";
        textToCross35.style.opacity = "100%";
        checkbtn35.style.opacity = "30%";
    }
});

const checkbtn36 = document.getElementById("chkbtn36");
const textToCross36 = document.getElementById("kanbanc6");
checkbtn36.addEventListener("change",
function () {
    if (this.checked) {
        textToCross36.style.textDecoration = "line-through";
        textToCross36.style.opacity = "20%";
        checkbtn36.style.opacity = "20%";
    }
    else {
        textToCross36.style.textDecoration = "none";
        textToCross36.style.opacity = "100%";
        checkbtn36.style.opacity = "30%";
    }
});


kanbantitle1.value = localStorage.getItem('kanbantitle1');
kanbantitle1.oninput = () => {
  localStorage.setItem('kanbantitle1', kanbantitle1.value)
};

kanbantitle2.value = localStorage.getItem('kanbantitle2');
kanbantitle2.oninput = () => {
  localStorage.setItem('kanbantitle2', kanbantitle2.value)
};

kanbantitle3.value = localStorage.getItem('kanbantitle3');
kanbantitle3.oninput = () => {
  localStorage.setItem('kanbantitle3', kanbantitle3.value)
};

kanbantitle4.value = localStorage.getItem('kanbantitle4');
kanbantitle4.oninput = () => {
  localStorage.setItem('kanbantitle4', kanbantitle4.value)
};

function openNav() {
  document.getElementById("mySidenav").style.width = "20%";
  document.getElementById("todocal").style.opacity = "99%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}