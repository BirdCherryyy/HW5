let arr = [
    {
        Name : 'Milk',
        Price : 80
    },

    {
        Name : 'Water',
        Price : 48
    },

    {
        Name : 'Bread',
        Price : 38
    }
];

Array.prototype.sum = function (prop) {
    let total = 0
    for ( let i = 0, _len = this.length; i < _len; i++ ) {
        total += this[i][prop]
    }
    return total
}

var newP = document.createElement("p");
if (arr.sum("Price") <= 0){
    newP.innerHTML = "Козина пуста";
}
else{
    newP.innerHTML = "В корзине: " + String(arr.length) + " товара на сумму: " + String(arr.sum("Price")) + " рублей";
}
list.appendChild(newP);
