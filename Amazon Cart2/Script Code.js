let item1={ id:101, Name:'Iphone', Img:'./images/iphone.jfif', Price:'99,999',Qty:1}
let item2={ id:102, Name:'Ipod', Img:'./images/ipod.jpg', Price:'10,000',Qty:1}
let item3={ id:103, Name:'Samsung', Img:'./images/samsung.jfif', Price:'59,999',Qty:1}
let item4={ id:104, Name:'Rolex', Img:'./images/watch.jfif', Price:'45,499',Qty:1}

// localStorage.clear();

// let Items= localStorage.getItem('Products') ? JSON.parse(localStorage.getItem('Products')) : [item1,item2,item3,item4];

let Items= JSON.parse(localStorage.getItem('Products')) ?? [item1,item2,item3,item4];
localStorage.setItem('Products',JSON.stringify(Items));

let Itemsection=document.getElementById('Product-section')

function Display()
{
    Items=JSON.parse(localStorage.getItem('Products'));
    let empstr=``;
    Items.forEach(function(val,ind)
    {
        empstr += `<div class="col-3">
                        <div class="card"> 
                            <div class="card-header">
                                <img src="${val.Img}" alt="Image Not Found">
                            </div>
                        
                            <div class="card-body text-center">
                            
                                <h2 class="card-title fw-bold mb-2">${val.Name}</h2>
                                <p class="text-success my-1" id="stock-p">Stock Available</p>
                                <p class="fs-4 my-1">&#8377 ${val.Price}</p>

                                <div class="quantity">
                                    <i class="bi bi-plus-circle-fill fs-5" onclick="Quantity(${ind},'add')"></i>  
                                    <h4 class="px-3" id="qty">${val.Qty}</h4>
                                    <i class="bi bi-dash-circle-fill fs-5" onclick="Quantity(${ind},'sub')"></i>
                                </div>
                            </div>
                        </div>
                    </div>`;
    });
    Itemsection.innerHTML = empstr;
}
Display();


function Quantity(ind,op)
{
    let Totalqty=Items[ind].Qty;
    if (op=='add') ++Totalqty;
    else --Totalqty;
    Items[ind].Qty=Totalqty;
    localStorage.setItem('Products',JSON.stringify(Items));
    Display();
}