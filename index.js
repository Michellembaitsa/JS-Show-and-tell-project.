var x = (function motorbike() {
        var brands = ["Suzuki gixxer", "Apache rtr", "Kawasaki ninja", "KTM duke"];
        console.log(brands[0]); //I only want to print out the first element.
    })
    () //immediately invoked function expression.

var suzuki_gixxer = { //Giving properties to the object I chose from the lit.
    company: "Suzuki",
    make: "Gixxer",
    year: 2014,
    color: "Black",
    specification: function() { //I only want to print out the make and year from this method.
        console.log(this.make + " " + this.year);
    }
}
suzuki_gixxer.specification()

var price = 15000;
if (price > 10000) { //conditional statement.
    let price = 30000; //let implies the price can not be changed within this scope.
    price *= 10;
    console.log(price);
} else {
    console.log("Amount not enough");
}

const brand = { //getter and setter methods.
    Model: "S150",
    get getModel() {
        return this.Model;

    },
    set setModel(newModel) {
        this.Model = newModel;
    }


};

brand.newModel = "S250";
console.log(brand.newModel)

var account_balance = 500000;
var amount = price; // I used the previously assigned price.(global scope)

if (account_balance >= price) {
    console.log("You can buy the motorbike!");
} else {
    console.log("Sorry, not this time!");
}