function main(numOne, numTwo){

        // Only change code below this line
        var numOne = parseInt(numOne);
        var numTwo = parseInt(numTwo);
        var product = parseFloat(numOne * numTwo);
        // Only change code above this line

    return product;
}

console.log(main(2.5, 2.0)); // change this line
console.log(main(5.5, 5.5)); // change this line
console.log(main(100.25, 43.20)); // change this line

module.exports = main;