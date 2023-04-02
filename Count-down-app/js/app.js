const newYears ='1 Jan 2024';
document.getElementById("new-Years").innerText = newYears;
const inputs = document.querySelectorAll("input")
function countdown(){

    const newYearsDate = new Date(newYears);
    const currentDates = new Date();

    const totalSeconds = (newYearsDate-currentDates) / 1000;
    inputs[0].value = Math.floor(totalSeconds/3600/24);
    inputs[1].value = Math.floor(totalSeconds/3600)%24;
    inputs[2].value  = Math.floor(totalSeconds/60)%60;
    inputs[3].value  = Math.floor(totalSeconds)%60;
}
countdown()

setInterval (

    ()=>{
        countdown ()
    },
    1000
)
