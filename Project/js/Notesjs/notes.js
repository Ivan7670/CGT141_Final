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

notetitle.value = localStorage.getItem('notetitle');
notetitle.oninput = () => {
  localStorage.setItem('notetitle', notetitle.value)
};

notespage.value = localStorage.getItem('notespage');
notespage.oninput = () => {
  localStorage.setItem('notespage', notespage.value)
};

document.getElementById("note2").innerHTML = localStorage.getItem('notetitle2')
if(localStorage.getItem('notetitle2') == null) {
  document.getElementById("note2").innerHTML = "Notes #2"
}

document.getElementById("note3").innerHTML = localStorage.getItem('notetitle3')
if(localStorage.getItem('notetitle3') == null) {
  document.getElementById("note3").innerHTML = "Notes #3"
}

document.getElementById("note4").innerHTML = localStorage.getItem('notetitle4')
if(localStorage.getItem('notetitle4') == null) {
  document.getElementById("note4").innerHTML = "Notes #4"
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}