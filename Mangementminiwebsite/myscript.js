const newTasks = [
    {
        id: 101,
        name: "Wake up earlier",
        description: "Set your alarm to go off a quarter of an hour before you normally get up. This extra 15 minutes will help make your morning less stressful, and you will be able to have a more organized and productive day.",
        iscomplete: "false",
    },
    {
        id: 102,
        name: "Read the newspaper",
        description: "Keeping up with world events will stimulate your mind and help you to gain new perspectives.",
        iscomplete: "false",
    },
    {
        id: 103,
        name: "Clean out your email",
        description: "Delete all of your spam emails and the ones you don’t need. Decluttering will make you more organized while helping you to keep on top of work.",
        iscomplete: "false",
    },
    {
        id: 104,
        name: "Have a quick tidy-up",
        description: "If you have a few spare minutes, it will barely feel like tidying, but your mind will thank you for making the environment tidier and more pleasant.",
        iscomplete: "false",
    },
    {
        id: 105,
        name: "Take a walk",
        description: "Being outside will raise your mood and it can calm you down if you are feeling stressed or worried.",
        iscomplete: "false",
    },  
];

tasks = [];

const addNewTasks = document.querySelector("#tname")
const addDis = document.querySelector("#tdescription")

function addNewTask(){

}

function deleteTask(){

}

function updateTask(){

}

function renderTasks(){
    addproductsElmt.innerHTML = productsRender.map
    (()=>`
                 <tr>
                    <th scope="row">${i}</th>
                    <td>${tname}</td>
                    <td>${tdescription}</td>
                    <td><button class="btn btn-danger"></button></td>
                </tr>
    
    `).join("");
}