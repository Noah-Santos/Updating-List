// // // array to hold the days in the 12 months
// // let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// // function getTime(){
// //     // breaks down the dates into arrays
// //     let leave = document.getElementById("departDate").innerHTML.split("-");
// //     let returns = document.getElementById("returnDate").innerHTML.split("-");
// //     // converts the array variables into numbers
// //     for(let a = 0; a < leave.length; a++){
// //         leave[a] = Number(leave[a]);
// //     }
// //     for(let b = 0; b < returns.length; b++){
// //         returns[b] = Number(returns[b]);
// //     }
// //     // creates variable for each measure of time
// //     let years, months, days;
// //     years = months = days = 0;
// //     // if the return month is lower than the leave month, adjusts years to make it up
// //     if(returns[1] < leave[1]){
// //         years += returns[0] - leave[0] - 1;
// //         months += returns[1] + (12-leave[1]);
// //         console.log("next year");
// //     // calculates the months they are gone
// //     }else{
// //         years += returns[0] - leave[0];
// //         months += returns[1] - leave[1];
// //         console.log("same year");
// //     }
// //     // if return day is lower than leave day, adjust month accordingly
// //     if(returns[2] < leave[2]){
// //         months -= 1;
// //         days += returns[2] + (monthDays[leave[2]] - leave[2]);
// //         console.log("next month");
// //     // calculates the days they are gone
// //     }else{
// //         days += returns[2] - leave[2];
// //         console.log("same month");
// //     }
// //     // creates an array to hold the time
// //     let times = [years, months, days];
// //     // returns the amount of time they are gone in the form of an array
// //     return times;
// //     // return `${years} year(s), ${months} month(s), and ${days} day(s)`;   
// // }


// // array to hold the days in the 12 months
// let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// function getTime(){
//     // breaks down the dates into arrays
//     let leave = document.getElementById("departDate").innerHTML.split("-");
//     let returns = document.getElementById("returnDate").innerHTML.split("-");
//     // converts the array variables into numbers
//     for(let a = 0; a < leave.length; a++){
//         leave[a] = Number(leave[a]);
//     }
//     for(let b = 0; b < returns.length; b++){
//         returns[b] = Number(returns[b]);
//     }
//     // creates variable for each measure of time
//     let years, months, days;
//     years = months = days = 0;
//     // if the return month is lower than the leave month, adjusts years to make it up
//     if(returns[1] < leave[1]){
//         years += returns[0] - leave[0] - 1;
//         months += returns[1] + (12-leave[1]);
//         console.log("next year");
//     // calculates the months they are gone
//     }else{
//         years += returns[0] - leave[0];
//         months += returns[1] - leave[1];
//         console.log("same year");
//     }
//     // if return day is lower than leave day, adjust month accordingly
//     if(returns[2] < leave[2]){
//         months -= 1;
//         days += returns[2] + (monthDays[leave[2]] - leave[2]);
//         console.log("next month");
//     // calculates the days they are gone
//     }else{
//         days += returns[2] - leave[2];
//         console.log("same month");
//     }
//     // creates an array to hold the time
//     let times = [years, months, days];
//     // returns the amount of time they are gone in the form of an array
//     return times;
//     // return `${years} year(s), ${months} month(s), and ${days} day(s)`;   
// }

leave = "2023-01-15";
returns = "2023-01-27";
// array to hold the days in the 12 months
let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function getTime(){
    // breaks down the dates into arrays
    // let leave = document.getElementById("departDate").innerHTML.split("-");
    // let returns = document.getElementById("returnDate").innerHTML.split("-");
        leave = leave.split("-");
    returns = returns.split("-");
    // converts the array variables into numbers
    for(let a = 0; a < leave.length; a++){
        leave[a] = Number(leave[a]);
    }
    for(let b = 0; b < returns.length; b++){
        returns[b] = Number(returns[b]);
    }
    // creates variable for each measure of time
    let years, months, days;
    years = months = days = 0;
    // if the return month is lower than the leave month, adjusts years to make it up
    if(returns[1] < leave[1]){
        years += returns[0] - leave[0] - 1;
        months += returns[1] + (12-leave[1]);
    // calculates the months they are gone
    }else{
        years += returns[0] - leave[0];
        months += returns[1] - leave[1];
    }
    // if return day is lower than leave day, adjust month accordingly
    if(returns[2] < leave[2]){
        months -= 1;
        days += returns[2] + (monthDays[leave[2]] - leave[2]);
    // calculates the days they are gone
    }else{
        days += returns[2] - leave[2];
    }
    // creates an array to hold the time
    let times = [years, months, days];
    // returns the amount of time they are gone in the form of an array
    console.log(times); 
}
getTime();