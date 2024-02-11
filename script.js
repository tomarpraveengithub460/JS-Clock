let hour = document.querySelector(".hour");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let dndinfo = document.querySelector(".dndinfo");
function updateTime() {
    const date = new Date();
    hour.innerHTML = date.getHours().toString().padStart(2,'0');
    minutes.innerHTML = date.getMinutes().toString().padStart(2,'0');
    seconds.innerHTML = date.getSeconds().toString().padStart(2,'0');
    dndinfo.innerHTML=date.toString().split(" ").splice(0,4).join(" ")
    
    // Calculate the time until the next full second
    const delay = 1000 - (date.getMilliseconds());
    
    // Call updateTime again, adjusting for the delay to try and sync updates with the start of each new second
    setTimeout(updateTime, delay);
}

document.addEventListener('DOMContentLoaded', function() {
    updateTime(); // This still runs immediately on DOMContentLoaded
});

const date2 = new Date();
console.log(date2.toString().split(" ").splice(0,4).join(" "));
