let getPercent = () => 2;

let getBonus = function(value =10, tax = value * 0.1 * getPercent()){
    console.log(value + tax);
    console.log(arguments.length);
}

getBonus(undefined , 40);
getBonus(undefined);
