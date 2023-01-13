class list {
    constructor(firstName, lastName, birth, departCity, arriveCity, departDate, returnDate, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birth = birth;
        this.departCity = departCity;
        this.arriveCity = arriveCity;
        this.departDate = departDate;
        this.returnDate = returnDate;
        this.id = id;
    }
}

//array for passenger objects
passengers = []
// array of required ids
let requiredIDs = ["firstName", "lastName", "birth", "departCity", "arriveCity", "departDate", "returnDate"];
// array of extra add on options
let checkBoxesID = ["legRoom", "window", "headphones", "extraMeal"];
let count = 1000;
let cost = 300;

let checkBoxes = 0;
 
function addToList() {
    // checks to see if required info is filled in
    let required = 0;
    // array of required values
    let requireValue = [];
    // adds values of required information to array
    for(let i = 0; i <requiredIDs.length; i++){
        requireValue.push(document.getElementById(requireIDs[i]).value);
        // adds 1 for every required information filled
        if(document.getElementById(requireIDs[i]).value != ""){
            required++;
        }
    }
    // let firstName = document.getElementById("firstName").value;
    // let lastName = document.getElementById("lastName").value;
    // let birth = document.getElementById("birth").value;
    // let departCity = document.getElementById("departCity").value;
    // let arriveCity = document.getElementById("arriveCity").value;
    // let departDate = document.getElementById("departDate").value;
    // let returnDate = document.getElementById("returnDate").value;
    let bags = document.getElementById("bags").value;
    if(document.getElementById("legRoom").checked) checkBoxes++;
    if(document.getElementById("window").checked) checkBoxes++;
    if(document.getElementById("headphones").checked) checkBoxes++;
    if(document.getElementById("extraMeal").checked) checkBoxes++;
    // console.log(checkBox1);
    cost += 20*bags;
    // creates object if requried info is filled out
    if (required == 7) {
        let temp = new list(requireValue[0], requireValue[1], requireValue[2], requireValue[3], requireValue[4], requireValue[5], requireValue[6], count);
        count++;
        // resets required values array
        for(let x = 0; x <requiredIDs.length; x++){
            document.getElementById(requireIDs[x]).value = "";
        }
        passengers.push(temp);
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("birth").value = "";
        document.getElementById("departCity").value = "";
        document.getElementById("arriveCity").value = "";
        document.getElementById("departDate").value = "";
        document.getElementById("returnDate").value = "";
        document.getElementById("bags").value = "";
        cost = 300;
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
 
