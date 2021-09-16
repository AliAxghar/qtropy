var content = document.getElementById("content");

window.onload = function(e){ 
    hideAllPages()
    var homePage = document.getElementById("home-page");
    console.log(homePage)
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


document.addEventListener("keyup", e => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});