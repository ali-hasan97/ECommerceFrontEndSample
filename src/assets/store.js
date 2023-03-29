class product{
    constructor(name,price,description){
        this.name = name;
        this.price = price;
    }
}

function store(id){
    var name = document.getElementById("title"+id).innerText;
    var price = document.getElementById(id).innerText;
    console.log(name + price);
    var prod = new product(name, price);
    localStorage.setItem(id, JSON.stringify(prod));
}