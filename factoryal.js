
const factoryal = function(n) {
    if(n === 1) {
        return 1
    } else {
        return n * factoryal(n - 1);
    }
}
 
console.log(factoryal(7));
