// // function to get passengers current age
// function getAge(){
//     // gets time and date from computer
//     let currentDate = new Date();
//     // console.log(currentDate);
//     // splits the current date into 2 pieces
//     let time = currentDate.split("T");
//     // gets rid of the second half of the array
//     time.pop();
//     // splits what is left of current date into its years, months, and days
//     time.split("-");
//     // changes all values to numbers
//     for(let d = 0; d < time.length; d++){
//         time[d] = Number(time[d]);
//     }
//     // gets date of birth and splits it and turns values into numbers
//     let birthDay = document.getElementById("birth").ariaValueMax.split("-");
//     for(let f = 0; f < birthDay.length; f++){
//         birthDay[f] = Number(birthDay[f]);
//     }
//     if(birthDay[0] >= time[0] && birthDay[1] >= time[1] && birthDay[2] >= time[2]){
//         return birthDay[0] - time[0];
//     }else{
//         return birthDay[0] - time[0] - 1;
//     }
// }
getAge();
let date2 = new Date(2013, 10, 2);
console.log(String(date2));
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function getAge(){
    // gets time and date from computer
    let currentDate = new Date();
    // console.log(currentDate);
    // gets the current day, month, and year
    let curDay = currentDate.getDay();
    let curMonth = currentDate.getMonth();
    let curYear = currentDate.getFullYear();
    console.log(curMonth);
    console.log(curDay);
    console.log(curYear);
    // console.log(currentDate);
    // splits the current date into 2 pieces
    // let timeHolder = currentDate.split(" ");
    // // console.log(timeHolder);
    // // creates new array to hold month, day, and year
    // let time = [];
    // time.push(timeHolder[1]);
    // time.push(timeHolder[2]);
    // time.push(timeHolder[3]);
    // // changes the month to a number
    // for(let g = 0; g <months.length; g++){
    //     if(time[0] == months[g]){
    //         time[0] = g;
    //         break;
    //     }
    // }
    // console.log(time);
    
}
getAge();

// function to get passengers current age
function getAge(){
    // gets time and date from computer
    let currentDate = new Date();
    // gets the current day, month, and year
    let curDay = currentDate.getDay();
    let curMonth = currentDate.getMonth();
    let curYear = currentDate.getFullYear();
    // gets passengers birthday and gets the year, month, and day
    let birthday = document.getElementById("birth").value;
    let birthDay = birthday.getDay();
    let birthMonth = birthday.getMonth();
    let birthYear = birthday.getFullYear();
    // checks to see what age the passenger is
    if(curMonth > birthMonth){
        return curYear - birthYear;
    }else if(curMonth == birthMonth){
        if(curDay >= birthDay){
            return curYear - birthYear;
        }
    }else{
        return curYear - birthYear - 1;
    }
}