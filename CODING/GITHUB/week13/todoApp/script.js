var addTaskButton=document.getElementById('addTaskButton');
const taskListArray=[];
var counter=0;
class TaskList{
    taskName;
    taskDate;
    taskDescription;
    constructor(x,y,z){
        this.taskName=x;
        this.taskDate=y;
        this.taskDescription=z;
        this.index=counter;
    }
    addTask(){
  
        counter++;
    }

}
addTaskButton.addEventListener('click',function(){
    var taskName=document.getElementById('taskName');
    var taskDate=document.getElementById('taskDate');
    var taskDescription=document.getElementById('taskDescription');
    var task= new TaskList(taskName.value,taskDate.value,taskDescription.value);
    task.addTask();
    taskListArray.push(task);
    console.log(taskListArray);
    document.querySelector('main').innerHTML='';
    displayDetials();

})
function displayDetials(){

    let i=0;
    for(i=0;i<taskListArray.length;i++){
        document.querySelector('main').innerHTML+=` <div class="container border border-success rounded mx-auto my-2 bg-light">
        <h4>${taskListArray[i].taskName}</h4>
        <p class="text-muted">${taskDate.value}</p>
        <p>${taskDescription.value}</p>
        <div class="text-center">
            <span><i class="bi bi-pencil-square" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editMe(${i})"></i></span><span> <i class="bi bi-trash3-fill" onclick="deleteMe(${i})"></i></span>
        </div>
    </div>`;
    }
}
// this.htmlOfCode=` <div class="container border border-success rounded mx-auto bg-light">
// <h4>${taskName.value}</h4>
// <p class="text-muted">${taskDate.value}</p>
// <p>${taskDescription.value}</p>
// <div class="text-center">
//     <span><i class="bi bi-pencil-square" onclick="editMe()"></i></span><span> <i class="bi bi-trash3-fill" onclick="deleteMe()"></i></span>
// </div>
// </div>`
function deleteMe(i){
    taskListArray.splice(i,1);
    document.querySelector('main').innerHTML='';
    displayDetials();
}
function editMe(i){
    document.getElementById('btnAdd').setAttribute('data-bs-toggle','modal')
    taskName.value=taskListArray[i].taskName;
    taskDate.value=taskListArray[i].taskDate;
    taskDescription.value=taskListArray[i].taskDescription;

    taskListArray.splice(i,1,task);
    console.log(taskListArray);
    document.querySelector('main').innerHTML='';
    displayDetials();
}
function cleanMe(){
    taskName.value='';
    taskDate.value='';
    taskDescription.value='';
}