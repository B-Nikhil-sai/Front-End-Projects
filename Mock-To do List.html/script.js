let Add_btn=document.querySelector('#addbtn');
let Sel1=document.querySelector('#sel1');
let Sel2=document.querySelector('#sel2');
let Row=document.querySelector('.row')

let ToDoList= JSON.parse(localStorage.getItem('List-tasks')) ?? [];
// localStorage.clear()

let checkboxid=101;

Add_btn.addEventListener('click',function(e)
{    
    e.preventDefault();
    let v1=Sel1.value;
    let v2=Sel2.value;
    ToDoList.push((v2+' '+v1+' '+checkboxid));
    checkboxid++;
    localStorage.setItem('List-tasks',JSON.stringify(ToDoList));
    addTask();
});

function addTask()
{
    ToDoList=JSON.parse(localStorage.getItem('List-tasks'));
    let empty_str='';
    ToDoList.forEach(function(val,ind)
    {   
        a1=val.split(' ');
        empty_str +=`<div class="col-4 cols">
                        <div class="card">
                            <div class="card-header head">
                                <input  type="checkbox" id="checkbox${a1[2]}" onclick="ischecked(${ind},${a1[2]})">
                                <p class="${a1[3]}">${a1[0]} ${a1[1]}</p>
                                <i class="bi bi-x-lg" onclick="del(${ind})"></i>
                            </div>
                        </div>
                    </div>`;
    })
    Row.innerHTML=empty_str;
}
addTask();

function del(ind)
{
    ToDoList.splice(ind,1);
    localStorage.setItem('List-tasks',JSON.stringify(ToDoList));
    addTask();
}

function ischecked(ind,Id)
{
    let Itemdetails=ToDoList[ind].split(' ');
    let boxid=document.querySelector(`#checkbox${Id}`);
    
    if (boxid.checked ==true)
    {
        Itemdetails[3]='line';
        ToDoList[ind]=`${(Itemdetails.join(' '))}`;
    }
    else 
    {
        Itemdetails.splice(3,1);
        ToDoList[ind]=`${(Itemdetails.join(' '))}`;
    }
    
    localStorage.setItem('List-tasks',JSON.stringify(ToDoList));
    addTask();
    Total();
}
    
function Total()
{
    let count=0;
    ToDoList.forEach(function(val)
    {
        if(val.split(' ')[3]=='line')
        {
            count++;
        }
        let Completedtasks=count*(100/ToDoList.length);
        document.querySelector('#total').innerHTML=`Total Added Items : ${ToDoList.length} <p>Percentage:${Completedtasks}%</p>`;
    })
}
Total();