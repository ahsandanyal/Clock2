const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggleEl = document.querySelector('.toggle');
const html = document.querySelector('html');

const days = ["Sunday", "Monday", "Tuesday", "Webnesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "Febraury", "March", "April", "May",
                 "June", "July","August", "September", "October", "November", "December"];

toggleEl.addEventListener("click", (e)=>{
    html.classList.toggle('dark');
    
    if(html.classList.contains('dark')){
        e.target.innerHTML = "Light Mode";
    }
    else{
        e.target.innerHTML = "Dark Mode";
    }
    
})


function setTime(){
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`

    timeEl.innerHTML = `${hoursForClock}:${minutes} ${seconds} ${ampm}`
    dateEl.innerHTML = `${days[day]} ${months[month]} <span clas="circle">${date}</span>`;

}


const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

setTime();
setInterval(setTime, 1000);