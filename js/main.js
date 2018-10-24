
function printAb(a,b) {
    
    if (a === 20 || b === 20) {
        return 'true';
    } else if ((a + b) <= 20) {
        return'true';
    } else {
        return 'false';
    }
}

let result = printAb(16, 2);
console.log(result);
