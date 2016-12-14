var getPercent = function () { return 2; };
var getBonus = function (value, tax) {
    if (value === void 0) { value = 10; }
    if (tax === void 0) { tax = value * 0.1 * getPercent(); }
    console.log(value + tax);
    console.log(arguments.length);
};
getBonus(undefined, 40);
getBonus(undefined);
//# sourceMappingURL=lession10.js.map