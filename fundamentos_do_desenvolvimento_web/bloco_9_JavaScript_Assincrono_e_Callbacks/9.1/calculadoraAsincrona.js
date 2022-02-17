const asyncSum = (a, b, callback) => {
    setTimeout(() => {
    console.log(callback(a, b));
    }, 500);
};

const somar = (a, b) => a + b;

asyncSum(10, 10, somar);
console.log("Aeh");