/*
//parameter is declared at time of function
function greet (name, lastName) {
    console.log('hello ' + name + ' ' + lastName);
}
//vian is an argument   argument is the value
greet('vian', 'charbonneau');
*/
let hour = 22;
if (hour >= 6 && hour < 12) {
    console.log('Morning!');
}
else if (hour >= 12 && hour < 18) {
    console.log('afternoon!');
}
else
    console.log('evening!');
