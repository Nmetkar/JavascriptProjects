
//Assigment 1

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


//Assigment 2

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


// Assigment 3

marksNumField = document.querySelector("#marksNum")
showMarksUL = document.querySelector("#showMarks")

marksarray = []


function addNewMarks(){
    const inputElement = document.getElementById('marksNum');
    newmarks = inputElement.value
    taskArray.push(newmarks);
    inputElement.value = ''
    console.log(taskArray);
    
}
function displayTasks(){
    showMarksUL.innerHTML = marksarray.map((t)=>`
    <li class="liclass">
    <span>${t}</span>
    </li>
    `).join('')
}

    
function calculateTotalMarks(){

     const marks = taskArray.map(Number);
     //const numberArray = stringArray.map(Number);

    console.log("inputElement1--->", marks);

     totalMarks = 0
    for(i=0;i<marks.length; i++){
       totalMarks += marks[i]
    }
     const average = totalMarks/marks.length;
    console.log('Total Marks : ', totalMarks );
    console.log('Average Marks: ', average );
}

function calculateNewMarks(){
    // const inputElement1 = document.getElementById('marksNum');
    // const marks = inputElement1.value;
   const marks = taskArray
    console.log("inputElement1--->", marks);
    highestMarks = 0

    for(i=0;i<marks.length; i++){
        if(highestMarks < marks[i]){
            highestMarks = marks[i]
        }
    }
    console.log('Highest Marks : ', highestMarks)
     calculateTotalMarks();
     calculateLowestMarks();
    }

function calculateLowestMarks(){
    let lowestMarks =  taskArray.shift();
    for(i=1;i<taskArray.length; i++){
        if(lowestMarks > taskArray[i]){
            lowestMarks = taskArray[i]
       }
    }
    console.log('lowestMarks : ', lowestMarks)
    }
