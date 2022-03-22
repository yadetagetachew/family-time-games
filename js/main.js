let grandTotal = Number(document.getElementById("total"));
let shopList;
let shopItems = document.querySelectorAll(".card");

//  get the item Name and Value of the item clicked

function addItem(gValue){
    
    console.log(gValue);
    let result = Number(grandTotal);
    let gVar = Number(gValue);
    console.log(typeof gVar)
    grandTotal = result + gVar;
    console.log(typeof grandTotal);
    console.log(grandTotal);    

}

// shopItems.forEach(function (value) {
//     console.log(value);
//     value.addEventListener('click', function (e) {
//         grandTotal.value += e.value;
//         console.log("grandTotal.value");
//     })
// })
/*  put the clicked item into the shopping list 
    add to an array*/

