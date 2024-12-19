let Startbtn = document.getElementById('start');
let Stopbtn = document.getElementById('stop');
let restartbtn = document.getElementById('restart');

let mind=document.getElementById('min');
let secd=document.getElementById('sec');
let msecd=document.getElementById('msec');

let min=0,sec=0,msec=0;

function main(a)
{
    let timer1=setInterval(function(a){ 
        msec+=1;
        msecd.innerText=msec;
        if (msec==100)
        {
            sec+=1;
            secd.innerText=sec;
            msec=0;
            if (sec==60)
            {
                sec=0;
                min+=1;
                mind.innerText=min;
            }                
        }
    },10);
    // clearInterval(timer1);
}

Startbtn.addEventListener('click',function()
{
    let res=main();
})

Stopbtn.addEventListener('click',function Main(){

})

restartbtn.addEventListener('click',function(){
    
    min=0,sec=0,msec=0;
    msecd.innerText=msec;
    secd.innerText=sec;
    mind.innerText=min;
    main(1);
})
