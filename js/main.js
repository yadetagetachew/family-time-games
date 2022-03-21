let grandTotal = document.getElementById("total");
let shopList;
let shopItems = document.querySelectorAll(".shoppingItems");

//  get the item Name and Value of the item clicked

function addItem(value){
    grandTotal.value += value;
}

shopItems.forEach(function (value) {
    console.log("got shop items");
    value.addEventListener('click', function (e) {
        grandTotal.value += e.value;
        console.log("grandTotal.value");
    })
})
/*  put the clicked item into the shopping list 
    add to an array*/

