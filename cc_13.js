//Task 1: Base Structure Control
// See Index.Html File 

//Task 2: Adding Employee Cards Dynamically
const employeeContainer = document.getElementById("employeeContainer")//Selects the employeeContainer
const employeeCard = document.create.Element("div");//Creates the employee card
employeeCard.setAttribute("id", "employeeCard");
employeeCard.setAttribute("class", "metric-card");
const employeeName = document.createElement("h2");
employeeName.textContent = "Employee Name:";
const employeePosition = document.createElement("p");
employeePosition.textContent = "Employee's Position";
const removeButton = document.createElement("button");
removeButton.textContent = "Remove Employee";
removeButton.addEventListener("click", function() {
    employeeContainer.removeChild(employeeCard);
});//Establishes the Employee Card div element and establishes the information it will contain along with its remove button

employeeCard.appendChild(employeeName); //Appends the employee name in the card
employeeCard.appendChild(employeePosition); //Appends the employee position in the card
employeeCard.appendChild(removeButton); //Appends the remove button
employeeContainer.appendChild(employeeCard); //Appends the employeeCard and its parameters to the employeeContainer

//Task 3: Converting NodeLists to Arrays for Bulk Updates
const employeeCardNodeList = document.querySelectorAll(".metric-card"); //Selects the metric card
const arrayOfEmployeeCard = Array.from(employeeCardNodeList); //Converts the data in the card to an array
arrayOfEmployeeCard.forEach(card => { //Establishes the new design parameters for the employee card
    card.computedStyleMap.backgroundColor = "darkblue";
    card.computedStyleMap.borderRadius = "6px";
});

//Task 4: Implementing Removal of Employee Cards with Event Bubbling
employeeContainer = document.getElementById("employeeContainer"); //Selects the employee container
employeeContainer.addEventListener('click', (event)=> { //Creates the function for the click event
    if(event.target.classList.contains("metric-card")) { //Creates the perameters for the click event to function
        console.log("Employee Card Clicked"); //Logs the message displayed when the card is clicked
    }
});
employeeCard = document.querySelector("#employeeCard"); //Selects the employee card
employeeCard.addEventListener("click", (event)=> { //Establishes the click event
    event.stopPropagation(); //Prevents bubbling
    employeeContainer.removeChild(employeeCard); //Removes the employee Card upon being clicked
});

//Task 5: Inline Editing of Employee Details
employeeCard.forEach.addEventListener("dblclick", (event)=> { //Creates the click event listener
    employeeCard.forEach(createInputField("Employee Name:", "Position:")); //Creates the Input Data command while retaining original components
})
