let Likesbtn=document.getElementById('likes-btn');
let Dislikesbtn=document.getElementById('dislikes-btn');

let Total_likes=JSON.parse(localStorage.getItem('likes'));
let Total_dislikes=JSON.parse(localStorage.getItem('dislikes'));
let Total_Votes=JSON.parse(localStorage.getItem('Total'));

// localStorage.clear()

Likesbtn.addEventListener('click',function(){
    Total_likes+=1;
    localStorage.setItem('likes',JSON.stringify(Total_likes));
    document.getElementById('likes-display').innerHTML = `${Total_likes}`;
    Total();
});

Dislikesbtn.addEventListener('click',function(){
    Total_dislikes+=1;
    localStorage.setItem('dislikes',JSON.stringify(Total_dislikes));
    document.getElementById('dislikes-display').innerHTML = `${Total_dislikes}`;
    Total();
});

function Total()
{
    Total_Votes+=1;
    localStorage.setItem('Total',JSON.stringify(Total_Votes));
    document.getElementById('Totalvotes').innerHTML=`Total: ${Total_Votes}`;    
}