

//Tables

createTableField = document.querySelector("#createRow")

array = [1,2,3,4,5,6,7,8,9,10]

function createTable(){
    createTableField.innerHTML = array.map((x, i)=>`
                                <tr>
                                    <td>${x}</td>
                                    <td>${x*2}</td>
                                    <td>${x*3}</td>
                                    <td>${x*4}</td>
                                    <td>${x*5}</td>
                                    <td>${x*6}</td>
                                    <td>${x*7}</td>
                                    <td>${x*8}</td>
                                    <td>${x*9}</td>
                                    <td>${x*10}</td>
                                </tr>

    
    `).join(' ')
}
createTable()


// To Do List Manager 

taskNameField = document.querySelector("#taskName")
showTasksUL = document.querySelector("#showTasks")

taskArray = []

function deleteTask(i){
    console.log(i)
    taskArray.splice(i, 1)
    displayTasks();

}

function displayTasks(){
    showTasksUL.innerHTML = taskArray.map((t, index)=>`
    <li class="liclass">
    <span>${t}</span>
    <button class='btn btn-warning' onclick='deleteTask(${index})'>Delete</button>
    </li>
    `).join('')
}

function addNewTask(){
    newTask = taskNameField.value
    taskArray.push(newTask);
    taskNameField.value = ''
    console.log(taskArray);
    displayTasks()
}

function clearAllTasks(){
    taskArray = [];
    console.log(taskArray);
    displayTasks()
}

// Student Marks Calculator
let marks = [];

function addMark() {
    const mark = parseFloat(document.getElementById("markInput").value);
    if (!isNaN(mark)) {
        marks.push(mark);
        document.getElementById("markInput").value = "";
        alert(`Mark ${mark} added!`);
    } else {
        alert("Please enter a valid number.");
    }
}

function calculateMarks() {
    if (marks.length === 0) {
        alert("No marks entered.");
        return;
    }
    const total = marks.reduce((sum, m) => sum + m, 0);
    const average = (total / marks.length).toFixed(2);
    const highest = Math.max(...marks);
    const lowest = Math.min(...marks);

    document.getElementById("marksResult").innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Total Marks: <strong>${total}</strong></li>
            <li class="list-group-item">Average Marks: <strong>${average}</strong></li>
            <li class="list-group-item">Highest Mark: <strong>${highest}</strong></li>
            <li class="list-group-item">Lowest Mark: <strong>${lowest}</strong></li>
        </ul>
    `;
}

function resetMarks() {
    marks = [];
    document.getElementById("marksResult").innerHTML = "";
    document.getElementById("markInput").value = "";
}

// Search in an Array
let fruits = ["Mango", "Apple", "Banana", "Orange", "Kiwi"];

function searchArray() {
    const searchValue = document.getElementById("searchInput").value.trim().toLowerCase();
    const foundIndex = fruits.findIndex(item => item.toLowerCase() === searchValue);

    if (foundIndex !== -1) {
        document.getElementById("searchResult").innerHTML = `
            <p class="alert alert-success">Found: <strong>${fruits[foundIndex]}</strong></p>
        `;
    } else {
        document.getElementById("searchResult").innerHTML = `
            <p class="alert alert-danger">No matches found</p>
        `;
    }
}

// ---------- Filter Even and Odd Numbers ----------
let numbersArray = [];

function addNumber() {
    const num = parseInt(document.getElementById("numberInput").value);
    if (!isNaN(num)) {
        numbersArray.push(num);
        document.getElementById("numberInput").value = "";
        alert(`Number ${num} added!`);
    } else {
        alert("Please enter a valid number.");
    }
}

function showEven() {
    const evens = numbersArray.filter(num => num % 2 === 0);
    document.getElementById("evenNumbers").value = evens.join(", ");
}

function showOdd() {
    const odds = numbersArray.filter(num => num % 2 !== 0);
    document.getElementById("oddNumbers").value = odds.join(", ");
}

function clearNumbers() {
    numbersArray = [];
    document.getElementById("evenNumbers").value = "";
    document.getElementById("oddNumbers").value = "";
    document.getElementById("numberInput").value = "";
}

// ---------- Sort Names Alphabetically ----------
let namesArray = [];

function addName() {
    const name = document.getElementById("nameInput").value.trim();
    if (name) {
        namesArray.push(name);
        document.getElementById("nameInput").value = "";
        displayNames();
    } else {
        alert("Please enter a valid name.");
    }
}

function sortNames() {
    namesArray.sort((a, b) => a.localeCompare(b));
    displayNames();
}

function resetNames() {
    namesArray = [];
    displayNames();
}

function displayNames() {
    document.getElementById("nameList").innerHTML = namesArray.join(", ");
}
