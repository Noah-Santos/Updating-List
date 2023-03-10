class list {
    constructor(firstName, lastName, birth, departCity, arriveCity, departDate, returnDate, id, cost, meal, drink, age, time, bags, extras) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birth = birth;
        this.departCity = departCity;
        this.arriveCity = arriveCity;
        this.departDate = departDate;
        this.returnDate = returnDate;
        this.id = id;
        this.cost = cost;
        this.meal = meal;
        this.drink = drink;
        this.age = age;
        this.time = time;
        this.bags = bags;
        this.extras = extras;
    }
}
 
//array for passenger objects
passengers = []
// array of required ids
let requiredIDs = ["firstName", "lastName", "birth", "departCity", "arriveCity", "departDate", "returnDate"];
// array of food option ids
let foodIDs = ["chicken", "fish", "vegetarian"];
// array of extra add on options ids
let checkBoxesID = ["legRoom", "window", "headphones", "extraMeal"];
// id number
let count = 1003;

// creating 3 passengers
let noah = new list("Noah", "Santos", "2006-06-26", "Phoenix", "San Francisco", "2023-06-26", "2023-06-30", 1000, 330, "chicken", false, 16, 1, "legRoom");
let andrew = new list("Andrew", "Murphy", "2006-03-28", "Phoenix", "New York", "2023-03-15", "2023-09-24", 1001, 330, "vegetarian", false, 16, 1, "legRoom window");
let john = new list("John", "Rotolante", "2005-07-19", "Phoenix", "Houstan", "2024-01-01", "2024-01-15", 1002, 350, "fish", false, 17, 2, "legRoom headPhones");
passengers.push(noah)
passengers.push(andrew);
passengers.push(john);
 
function addToList() {
    // starting cost of ticket
    let cost = 300;
    // can passenger drink alcohol
    let drink = false;
    // number of checkboxes selected
    let checkBoxes = 0;
    // creates variable to hold chosen food
    let meal;
    // checks to see if required info is filled in
    let required = 0;
    // gets the extras that they selected
    let extras = ""
    // array of required values
    let requireValue = [];
    // adds values of required information to array
    for(let i = 0; i <requiredIDs.length; i++){
        requireValue.push(document.getElementById(requiredIDs[i]).value);
        // adds 1 for every required information filled
        if(document.getElementById(requiredIDs[i]).value != "") required++;
    }
    let bags = document.getElementById("bags").value;
    // checks to see how many extra features were selected
    for(let y = 0; y< checkBoxesID.length; y++){
        if(document.getElementById(checkBoxesID[y]).checked){
            checkBoxes++;
            extras += checkBoxesID[y] + " ";
        }
    }
    // finds the id of the food chosen
    for(let f = 0; f< foodIDs.length; f++){
        if(document.getElementById(foodIDs[f]).checked)meal = foodIDs[f];
    }
    // calculates cost of ticket
    cost += 20*bags + 10*checkBoxes;
    // creates object if requried info is filled out
    if (required == 7) {
        let age = getAge();
        if(age>21)drink = true;
        let time = getTime();
        // passes descriptors to object constructor
        let temp = new list(requireValue[0], requireValue[1], requireValue[2], requireValue[3], requireValue[4], requireValue[5], requireValue[6], count, cost, meal, drink, age, time, bags, extras);
        // creates new id
        count++;
        // resets required values array
        for(let x = 0; x <requiredIDs.length; x++){
            document.getElementById(requiredIDs[x]).value = "";
        }
        // resets bags
        document.getElementById("bags").value = "";
        // resets checkBoxes
        for(let z = 0; z <checkBoxesID.length; z++){
            document.getElementById(checkBoxesID[z]).checked = false;
        }
        // resets meal
        for(let c = 0; c <foodIDs.length; c++){
            document.getElementById(foodIDs[c]).checked = false;
        }
        // adds the created object to the array
        passengers.push(temp);
    }else{
        alert("Please fill in all of the required information.");
    }
    console.log(passengers);
}

// function to get passengers current age
function getAge(){
    // gets time and date from computer
    let currentDate = new Date();
    // gets the current day, month, and year
    let curDay = currentDate.getDay();
    let curMonth = currentDate.getMonth();
    let curYear = currentDate.getFullYear();
    // gets date of birth and splits it and turns values into numbers
    let birthDay = document.getElementById("birth").value.split("-");
    for(let f = 0; f < birthDay.length; f++){
        birthDay[f] = Number(birthDay[f]);
    }
    // checks to see if their birthday happened
    if(curMonth >= birthDay[1]){
        return curYear - birthDay[0] + 1;
    }else if(curMonth == birthDay[1]){
        if(curDay >= birthDay[2]){
            return curYear - birthDay[0] + 1;
        }
    }else{
        return curYear - birthDay[0];
    }
}

// array to hold the days in the 12 months
let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function getTime(){
    // breaks down the dates into arrays
    let leave = document.getElementById("departDate").value.split("-");
    let returns = document.getElementById("returnDate").value.split("-");
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
    let times = `${years} years, ${months} months, ${days} days`;
    // returns the amount of time they are gone in the form of an array
    return(times); 
}

// prints the list of passengers
function print() {
    space = "";
    for (let i = 0; i < passengers.length; i++) {
        space += `<div><span>${passengers[i].id} </span><text>${passengers[i].firstName} ${passengers[i].lastName}</text></div>`
    }
    document.getElementById("printSpace").innerHTML = space;
}

// gets the passenger that the user inputed
function search(){
    let continues = false;
    // holds index of searched passenger
    let index = 0;
    // getsi input and splits the data
    let name = document.getElementById("searchBar").value;
    let fName = name.split(" ");
    // loops through passenger array
    for(let s = 0; s < passengers.length; s++){
        // checks values to find the index
        if(fName.length > 1){
            if(passengers[s].firstName == fName[0] && passengers[s].lastName == fName[1]){
                index = s;
                continues = true;
            }
        }else if(fName.length == 1){
            if(passengers[s].id == Number(fName[0])){
                index = s;
                continues = true;
            }
        }else{
            alert("That user has not been found");
            
            document.getElementById("searchBar").value ="";
            break;
        }
    }
    if(continues){
        // makes info pannel visible
        document.getElementById("information").style.visibility="visible";
        // holds info to put on info page
        let passInfo = "";
        // holds the passenger object
        let person = passengers[index]
        // loops though to add all information of passenger
        for(let key in person){
            passInfo += `<div><informations>${key}: ${person[key]}</informations></div>`;
        }
        // adds info to page
        document.getElementById("information").innerHTML += passInfo;
        // clears search bar
    }
    document.getElementById("searchBar").value ="";
}

// hides the info page and clears it
function closes(){
    document.getElementById("information").style.visibility="hidden";
    document.getElementById("information").innerHTML = "<button onclick='closes()' class='closePage'>Close</button>";
}

// work in progress
// function populate() {
//     var select = document.getElementById("selectNumber");
//     select.innerHTML = `<option>Choose a number</option>`
//     for (var i = 0; i < arr.length; i++) {
//         select.innerHTML += `<option value = "${arr[i].firstName}">${arr[i].firstName}</option>`
//     }
// }
 
 
 


