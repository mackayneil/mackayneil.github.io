//Nav//
//function openNav() {
//  document.getElementById("main-nav").style.width = "75%";
//}

//function closeNav() {
//  document.getElementById("main-nav").style.width = "0%";
//}

function myFunction() {
  var x = document.getElementById("main-nav");
  if (x.style.display === "grid") {
    x.style.display = "none";
  } else {
    x.style.display = "grid";
  }
} 


//Contact me//
function openContact() {
  document.getElementById("contact-form").style.height = "100%";
}

function closeContact() {
  document.getElementById("contact-form").style.height = "0%";
}


//Modal//
var btn = document.querySelectorAll("button.modal-button");

var modals = document.querySelectorAll('.modal');

var spans = document.getElementsByClassName("close");

for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}

for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}


