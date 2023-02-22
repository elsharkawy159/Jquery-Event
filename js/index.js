// Aside and Singer Section
let asideOpener = document.querySelector(".asideOpener");
let SideCloser = document.querySelector("aside i");
let singerNumb = document.querySelectorAll(".singer");
let singerParag = document.querySelectorAll(".singer p");
let singerItem = document.querySelectorAll(".singerItem");

// Event Time
let daysEl = document.querySelector(".days h2");
let hoursEl = document.querySelector(".hours h2");
let minutesEl = document.querySelector(".minutes h2");
let secondsEl = document.querySelector(".seconds h2");

// Text-Area Counter
let textarea = document.querySelector(".textarea");
let counter = document.querySelector(".counter");



// ASIDE
asideOpener.addEventListener("click", function() {
    $("aside").animate({"width" : "250px"},500)
})
SideCloser.addEventListener("click", function() {
    $("aside").animate({"width" : "0px"},500)
})

// SINGER
for (let i = 0; i < singerItem.length; i++) {
    singerItem[i].addEventListener("click", function(e) {
        $(singerParag[i]).slideToggle(500);
        console.log(singerParag[i]);
    })
    
    
}


// Event Time
// Set the date we're counting down to
var countDownDate = new Date("Dec 31, 2023").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
    var now = new Date().getTime();
    
  // Find the distance between now and the count down date
    var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    daysEl.innerHTML = (days + " Days")
    hoursEl.innerHTML = (hours + " Hours")
    minutesEl.innerHTML = (minutes + " Minutes")
    secondsEl.innerHTML = (seconds + " Seconds")

  // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
    }
}, 500);

// Text-Area Counter

textarea.addEventListener("input", function(){

    counter.innerHTML = $(textarea).attr("maxlength") - textarea.value.length
    if (counter.innerHTML == 0) {
        counter.classList.add("text-danger")
        counter.innerHTML = "Max Characters"
    }else{
        counter.classList.remove("text-danger")
    }
}


)

