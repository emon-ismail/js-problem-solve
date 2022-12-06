// ***********************Number 1********************************
function radianToDegree(radians) {
    if (typeof radians !== 'number') {
        return "please enter a number"
    }
    let pi = Math.PI;
    radians = radians * (180 / pi);
    return radians.toFixed(2);
}
console.log(radianToDegree(199));

// *************** end ******


// *********Number 2**********
let array = "index.js";
function isJavaScriptFile(array) {
     if (typeof array !== 'string') {
         return "please enter a string value";
    }
    if (array.endsWith(".js")) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isJavaScriptFile(array));

//************** */ number3**********

function oilPrice(dieselPrice, petrolPrice, octanePrice) {

    if (typeof dieselPrice !== 'number' || typeof petrolPrice !== 'number' || typeof octanePrice !== 'number') {
        return "please enter a number"
    }

    const dieselPricePerLitter = 114;
    const petrolPricePerLitter = 130;
    const octanePricePerLitter = 135;

    let seasonalDieselPricePerLitter = dieselPricePerLitter * dieselPrice;
    let seasonalPetrolPricePerLitter = petrolPricePerLitter * petrolPrice;
    let seasonaloctanePricePerLitter = octanePricePerLitter * octanePrice;

    let sum = seasonalDieselPricePerLitter + seasonalPetrolPricePerLitter + seasonaloctanePricePerLitter;


    return sum;

}

console.log(oilPrice(30, 67, 10));


//****************** */ number4************

function publicBusFare(person) {

    const reservedBus = 50;
    const microBus = 11;
    multi = person % reservedBus;    //for reserved bus
    mult2 = multi % microBus;            //for microbus
    publicBus = mult2 * 250;
    if (typeof person !== 'number') {
        return "please enter a number"
    }

    return publicBus;
}
console.log(publicBusFare(70));


//************* */ number 5*********


function isBestFriend(friend1, friend2 ) {
    if (typeof friend1 !== 'object' && friend2 !=="object") {
           return "please enter a object value";
        }


    if(friend1.name == friend2.friend && friend1.friend==friend2.name){
       return true;
        }
        else{
            return false;

    }
}

console.log(isBestFriend({
    name: "emon",
    friend: "sohan"
    
},
{
    name: "sohan",
    friend: "emon"
   
}))
