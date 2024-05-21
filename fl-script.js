const currentDate = document.querySelector(".c-current-date");
const daysTag = document.querySelector(".c-days");
const prevNextIcon = document.querySelectorAll(".c-icons span");


// getting new date, current year, and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

// default watering interval
let wateringInterval = 5;

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(); // gets first day (0 - 6) of the week/month 
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(); // get last date of the month -> +1 makes it "next month", 0 is the day *before* the first day of "next month"
    let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(); // gets last day (0 - 6) of the week/month 
    let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // get last date of last month -> 0 is the day *before* the first day of "this month"
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) { // subtracts the first day (0 - 6) from the length of the month, add 1 for 0 index
        liTag += `<li class="c-inactive">${lastDateofLastMonth - i +1}<div class=wateringCanIcon-placeholder></div></li>`;  
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // i increments from 1 up to the last day of the month
        // adding c-active class to li if the current date, month, and year are matched
        const currentDate = new Date();
        const isToday = (i === currentDate.getDate() && currMonth === currentDate.getMonth() && currYear === currentDate.getFullYear()) ? "c-active" : "";
        // watering indicator
        const wateringDate = (i % wateringInterval === currentDate.getDate() % wateringInterval) ? `<img src="images/wateringCan.svg" alt="Watering can icon" width="20" height="20">` : "<div class=wateringCanIcon-placeholder></div>";
        liTag += `<li class="${isToday}">${i}${wateringDate}</div></li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) { // i increments from last day of month (0) to fill leftover days of the week
        liTag += `<li class="c-inactive">${i - lastDayofMonth +1}<div class=wateringCanIcon-placeholder></div></li>`; 
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`
    daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if (currMonth < 0 || currMonth > 11) { // if current month is out of range
            // create a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear(); // update current year with new date year
            currMonth = date.getMonth(); // update current month with new date month
        } else { // else pass new Date as date value
            date = new Date();
        }
        renderCalendar();
    });
});

const updateWateringInterval = (interval) => {
    wateringInterval = interval;
    renderCalendar();
}

const plantName = document.querySelector("#plant-Name");

const animateWateringCan = () => {
    wateringCan.classList.add("animate");
    wateringCan.addEventListener("animationend", () => {
        wateringCan.classList.remove("animate");
    }, { once: true });
}

const animateWaterFlow = () => {
    waterFlow.style.display = "block"; // Show the water element
    waterFlow.classList.add("animate");
    waterFlow.addEventListener("animationend", () => {
        waterFlow.classList.remove("animate");
    }, { once: true });
}

const updatePlantImage = (src) => {
    plantImage.src = src;
    plantImage.classList.add("active");
}

const showPlantName = (name) => {
    plantName.textContent = name;
    plantName.classList.add("visible");
};

document.getElementById("intervalSnake").addEventListener("click", () => {
    updateWateringInterval(5);
    animateWateringCan();
    animateWaterFlow();
    updatePlantImage("./images/snakeplant.svg");
    showPlantName("Snake Plant")
});

document.getElementById("intervalFL").addEventListener("click", () => {
    updateWateringInterval(9);
    animateWateringCan();
    animateWaterFlow();
    updatePlantImage("./images/fiddleleaf.svg");
    showPlantName("Fiddle-Leaf Fig")
});

document.getElementById("intervalAloe").addEventListener("click", () => {
    updateWateringInterval(11);
    animateWateringCan();
    animateWaterFlow();
    updatePlantImage("./images/aloe.svg");
    showPlantName("Aloe Vera")
});

