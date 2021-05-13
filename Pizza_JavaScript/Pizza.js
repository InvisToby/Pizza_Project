function getReceipt() {
    //This initializes our string so it can get passed from function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>"; //creates variable 'text1' which will print "You Ordered" in heading 3 format 
    var runningTotal = 0; //Variable 'runningTotal' = the total price
    var sizeTotal = 0; //creates Variable 'sizeTotal' for the price of the Pzza size
    var sizeArray = document.getElementsByClassName("size"); //gets the size of the Pizza from ClassName 'Size'
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza") { //if user lects this size 
        sizeTotal = 6; //it wil be this much
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    } else if (selectedSize === "4 Bite Size Pizza") {
        sizeTotal = 18;
    }
    runningTotal = sizeTotal;//Variable 'runningTotal' = the total price of the size e.g. Medium pizza + 10
    console.log(selectedSize+" = £"+sizeTotal+".00"); //size will = £(sizetotal) =.00 eg. Small pizza = £8.00
    console.log("size text1: "+text1); //you ordered + the size of pizza 
    console.log("subtotal: £"+runningTotal+".00"); //will = this price the runnign total
    //these variables will get passed on to each function
    getTopping(runningTotal,text1);
};

function getTopping(runningTotal,text1) { // will display you ordered such and such
    var toppingTotal = 0; //Variable 'toppingTotal' for topping 90at start)
    var selectedTopping = []; //variable Array of Topping options
    var toppingArray = document.getElementsByClassName("toppings"); //variable to get the topping by class name toppings
    for (var j = 0; j < toppingArray.length; j++) { //Loop through each item in the array (of toppings)
        if (toppingArray[j].checked) { //if topping in array is checked in check box (checks if checkbox is checked)
            selectedTopping.push(toppingArray[j].value); //push adds value
            console.log("selected topping item: ("+toppingArray[j].value+")"); //displays the selected topping (e.g peperoni) and adds value in console log
            text1 = text1+toppingArray[j].value+"<br>"; //text 1 = text1 and add whatever the topping that is selected 
        }
    }
    
    var toppingCount = selectedTopping.length; //variable toppingCount is the selected topping
    if (toppingCount > 1) { //if topping greater then 1
        toppingTotal = (toppingCount - 1); //take away one, 'get 1 topping free'
    } else {
        toppingTotal = 0; //else 0
    }
    runningTotal = (runningTotal + toppingTotal); //takes the runnign total (of the pizza) and adds the topping price as well £1
    console.log("total selected topping items: "+toppingCount); //shows how many toppings were selected in console log
    console.log(toppingCount+" topping - 1 free topping = "+"£"+toppingTotal+".00"); //shows how many toppings, then prints topping - 1 free topping, and now equals nex 'total topping'
    console.log("topping text1: "+text1); //displays <h3>You Ordered:</h3>Personal Pizza<br>Olives<br>Pepperoni<br>
    console.log("Purchase Total: "+"£"+runningTotal+".00"); //shows in console log the 'running total' 
    document.getElementById("showText").innerHTML=text1; //shows what you ordered in the id="show text" div
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>£"+runningTotal+".00"+"</strong></h3>"; //shows/prints Total: £0.00 (whatever runnign total is) in BOLD, in the id="totalPrice" div
};