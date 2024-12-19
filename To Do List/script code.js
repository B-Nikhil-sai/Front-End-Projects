let Inp=document.querySelector('#task');
let Sbtn=document.querySelector('#sbtn');
let Listele=document.querySelector('#task-list-el');
let TaskCard=document.getElementById('task-card');

// localStorage.clear();

let ToDoList= JSON.parse(localStorage.getItem('Tasks')) ?? [];

Sbtn.addEventListener('click',function(e)
{
    e.preventDefault()
    let Task=Inp.value;
    Inp.value='';
    ToDoList.push(Task);
    localStorage.setItem('Tasks',JSON.stringify(ToDoList));
    addTask();
});


// Displaying Task on Todolist
function addTask(){

        if(ToDoList.length>0)
        {
            TaskCard.classList.remove('hidden');
            let empstr='';

            for(let i=0;i<ToDoList.length;i++)
            {
                empstr +=`<div class="list-group-item m-2 p-3 btn btn-outline-secondary" >
                            <p class='float-start'>${ToDoList[i]}</p>
                            <span class="float-end">
                                <i class="bi bi-pen btn" onclick="editfun(${i})"></i>
                                <i class="bi bi-trash3-fill btn" onclick="deletefun(${i})"></i>
                            </span>
                        </div>`; 
            }
            Listele.innerHTML=empstr;
        }
    }
addTask();

// Deleteing Task
function deletefun(ind)
{
    ToDoList.splice(ind,1);
    localStorage.setItem('Tasks',JSON.stringify(ToDoList));
    addTask();
}

// Editing Tasks
function editfun(ind)
{
    Inp.value=ToDoList[ind];
    deletefun(ind);
}

// Two Bugs
// 1. After Editing Tasks the task it will appear in the 0th index.
// 2. After deleting the last task the list section wont dissapear until the page is refreshed.