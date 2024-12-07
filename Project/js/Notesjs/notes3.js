topnavtext1.value = localStorage.getItem('topnavtext1');
topnavtext1.oninput = () => {
  localStorage.setItem('topnavtext1', topnavtext1.value)
};

topnavtext2.value = localStorage.getItem('topnavtext2');
topnavtext2.oninput = () => {
  localStorage.setItem('topnavtext2', topnavtext2.value)
};


function openNav() {
  document.getElementById("mySidenav").style.width = "20%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

notetitle3.value = localStorage.getItem('notetitle3');
notetitle3.oninput = () => {
  localStorage.setItem('notetitle3', notetitle3.value)
};

notespage3.value = localStorage.getItem('notespage3');
notespage3.oninput = () => {
  localStorage.setItem('notespage3', notespage3.value)
};

document.getElementById("note4").innerHTML = localStorage.getItem('notetitle4')
if(localStorage.getItem('notetitle4') == null) {
  document.getElementById("note4").innerHTML = "Notes #4"
}

document.getElementById("note1").innerHTML = localStorage.getItem('notetitle')
if(localStorage.getItem('notetitle') == null) {
  document.getElementById("note1").innerHTML = "Notes #1"
}

document.getElementById("note2").innerHTML = localStorage.getItem('notetitle2')
if(localStorage.getItem('notetitle2') == null) {
  document.getElementById("note2").innerHTML = "Notes #2"
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
