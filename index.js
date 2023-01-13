class list {
    constructor(firstName, lastName, birth, departCity, arriveCity, departDate, returnDate, id, cost, meal) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birth = birth;
        this.departCity = departCity;
        this.arriveCity = arriveCity;
        this.departDate = departDate;
        this.returnDate = returnDate;
        this.id = id;
        this.cost = cost;
        this.meal = meal
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
let count = 1000;

 
function addToList() {
    // starting cost of ticket
    let cost = 300;
    // number of checkboxes selected
    let checkBoxes = 0;
    // creates variable to hold chosen food
    let meal;
    // checks to see if required info is filled in
    let required = 0;
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
        if(document.getElementById(checkBoxesID[y]).checked)checkBoxes++;
    }
    // finds the id of the food chosen
    for(let f = 0; f< foodIDs.length; f++){
        if(document.getElementById(foodIDs[f]).checked)meal = foodIDs[f];
    }
    // calculates cost of ticket
    cost += 20*bags + 10*checkBoxes;
    // creates object if requried info is filled out
    if (required == 7) {
        let temp = new list(requireValue[0], requireValue[1], requireValue[2], requireValue[3], requireValue[4], requireValue[5], requireValue[6], count, cost, meal);
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
 
function print() {
    space = "";
    for (let i = 0; i < passengers.length; i++) {
        space += `<div><span>${passengers[i].id}</span>${passengers[i].firstName} ${passengers[i].lastName}</div>`
    }
    document.getElementById("printSpace").innerHTML = space;
}
 
// work in progress
// function populate() {
//     var select = document.getElementById("selectNumber");
//     select.innerHTML = `<option>Choose a number</option>`
//     for (var i = 0; i < arr.length; i++) {
//         select.innerHTML += `<option value = "${arr[i].firstName}">${arr[i].firstName}</option>`
//     }
// }
 
