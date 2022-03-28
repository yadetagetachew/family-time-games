// let grandTotal = Number(document.getElementById("total"));
// let shopList;
// let shopItems = document.querySelectorAll(".card");

//  get the item Name and Value of the item clicked

function addItem(gValue){

    console.log(gValue);

    let grandTotal = document.getElementById("total");

    console.log(grandTotal.innerText);

    total.innerText = Number(grandTotal.innerText) + Number(gValue);

    console.log(total);    
}
/*  put the clicked item into the shopping list 
    add to an array*/

