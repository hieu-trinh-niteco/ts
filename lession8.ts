var calculateSlary = function(){
    return 100000;
}

let calculateSlaryArrow = (bonus: number, tax: number) => 200000 + bonus - tax;

console.log(calculateSlary());
console.log(calculateSlaryArrow(100000, 1000));