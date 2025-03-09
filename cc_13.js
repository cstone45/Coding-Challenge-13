//Task 1: Base Structure Control
// See Index.Html File 

//Task 2: Adding Employee Cards Dynamically
const employeeContainerById = document.getElementById("employeeContainer")
const employeeCard = create.Element("div");
employeeCard.setAttribute("id", "employeeCard");
employeeCard.setAttribute("class", "metric-card");
employeeCard.innerHTML = "<h2>Employee Name:</h2><p>Employees Position:</p>";
<button onclick="removeEmployeeItem('Employee')">Remove Employee</button>;
employeeContainer.appendChild(employeeCard);

//Task 3: Converting NodeLists to Arrays for Bulk Updates
const employeeCard = document.querySelector("#employeeCard");
const arrayOfEmployeeCard = Array.from(employeeCardNodeList);
employeeCardArray.forEach(card => {
    background-color: dark Blue;
    border-radius: 6px;
})

//Task 4: Implementing Removal of Employee Cards with Event Bubbling
const employeeContainer= document.getElementById("employeeContainer");
const employeeCard = document.querySelector("#employeeCard");
employeeContainer.addEventListener('click', () => {
    console.log('Employee Card Clicked');
})
employeeCard.addEventListener('click', () => {
    console.log(removeChild(employeeContainer));
    stopPropagation();
});