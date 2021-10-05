var content = document.getElementById("content");

window.onload = function(e){ 
  hideAllPages()
  var homePage = document.getElementById("home-page");
  // console.log(homePage)
  homePage.style.display = "block";
  document.getElementById("home").classList.add("active");
}

function hideAllPages(){
    for (let i = 0; i < content.children.length; i++) {
        content.children[i].style.display = "none";
    }
    var all_li = document.querySelectorAll("#sidebar ul li");
    for (let i = 0; i < all_li.length; i++) {
        if (all_li[i].classList == "active") {
            all_li[i].className = "";
        }
    }
}


function showPage(event){
    var $id = event.currentTarget.getAttribute("data-target")
    hideAllPages()
    document.getElementById($id).style.display = "block";
    event.currentTarget.classList.add("active");
}


const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});
document.getElementById("close-visibility-modal").addEventListener("click", function() {
  document.querySelector(".modal.is-visible").classList.remove(isVisible);
});

document.getElementById("close-verify-modal").addEventListener("click", function() {
  document.querySelector(".modal.is-visible").classList.remove(isVisible);
});



document.addEventListener("keyup", e => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});


function followClickButton(target){
  var fLeftButton = document.getElementById("f-left");
  var fRightButton = document.getElementById("f-right");
  if(target.classList.contains("Nselected")){
    target.classList.remove("Nselected");
    target.classList.add("selected");
    if (target.id == 'f-right'){
      fLeftButton.classList.remove("selected")
      fLeftButton.classList.add("Nselected")
    }else{
      fRightButton.classList.remove("selected")
      fRightButton.classList.add("Nselected")
    }
  }
}

function followPage(evt, folName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("fol");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("f-btn");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" selected", "");
  }
  document.getElementById(folName).style.display = "block";
  evt.currentTarget.className += " selected";
}

var send_message_ele = document.getElementById("send-message-failed");
send_message_ele.addEventListener("click", function() {
  document.getElementById("message-page").style.display = "none";
  document.getElementById("message-send-fail-page").style.display = "block";
});


const search_btn = document.getElementById("search-id");
search_btn.addEventListener("click", function(){
  window.location.replace(window.location.origin+"/qtropy/search.html");
});

function closeModal(){
  document.querySelector(".modal.is-visible").classList.remove(isVisible);
}
