let Emp1={id:101,ename:'Nikhil Sai B',gender:'Male',sal:10000,email:'nikhil@gmail.com',comp:'A'}
let Emp2={id:102,ename:'Rajyalakshmi B',gender:'Female',sal:100000,email:'Raji@gmail.com',comp:'B'}
let Emp3={id:103,ename:'Ravi Sankar B',gender:'Male',sal:100000,email:'Ravi@gmail.com',comp:'C'}
let Emp4={id:104,ename:'Manohar B',gender:'Male',sal:1000,email:'Manohar@gmail.com',comp:'D'}
let Emp5={id:105,ename:'Marekka B',gender:'Female',sal:10000,email:'Marekka@gmail.com',comp:'E'}

let Emp=[Emp1,Emp2,Emp3,Emp4,Emp5];

Emp.forEach(function(val)
{
    let str=val.ename;
    let un=str.toUpperCase().split(' ').map(name=>name[0]).join('');
    val['UserName']=un;
})

let allemp=document.getElementById('btn1')
let maleemp=document.getElementById('btn2')
let femaleemp=document.getElementById('btn3')
let Search=document.getElementById('serach-box')

let Tbody=document.getElementById('tablebody')


allemp.addEventListener('click',function()
{
    let empstr='';
    for(let i of Emp)
    {
        empstr += main(i);
    }
    Tbody.innerHTML = empstr; 
})


maleemp.addEventListener('click',function()
{
    let empstr='';
    for(let i of Emp)
    {
        if(i.gender=='Male')
        {
            empstr += main(i);
        }
    }
    Tbody.innerHTML = empstr;
    
})



femaleemp.addEventListener('click',function()
{
    let empstr='';
    for(let i of Emp)
    {
        if(i.gender=='Female')
        {
            empstr += main(i);
        }
    }
    Tbody.innerHTML = empstr;
})



Search.addEventListener('keydown',function(e)
{
    let sval=e.key;
    let empstr='';
    for(let i of Emp)
    {
        if(i.ename[0]==sval.toUpperCase().trim())
        {
            empstr += main(i);
        }
    }
    Tbody.innerHTML = empstr;
})


function main(i)
{
    return `<tr>
                <th>${i.id}</th>
                <th>${i.ename}</th>
                <th>${i.gender}</th>
                <th>${i.sal}</th>
                <th>${i.email}</th>
                <th>${i.comp}</th>
            </tr>`
}

