// function to get passengers current age
function getAge(){
    // gets time and date from computer
    let currentDate = new Date();
    // console.log(currentDate);
    // splits the current date into 2 pieces
    let time = currentDate.split("T");
    // gets rid of the second half of the array
    time.pop();
    // splits what is left of current date into its years, months, and days
    time.split("-");
    // changes all values to numbers
    for(let d = 0; d < time.length; d++){
        time[d] = Number(time[d]);
    }
    // gets date of birth and splits it and turns values into numbers
    let birthDay = document.getElementById("birth").ariaValueMax.split("-");
    for(let f = 0; f < birthDay.length; f++){
        birthDay[f] = Number(birthDay[f]);
    }
}
getAge();