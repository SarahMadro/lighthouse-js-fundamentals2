function sayHello(name) {
  console.log('hello,' + name);
}
sayHello();
sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");

function returnSayHello(name) {
  return "Hello, " + name;
}
var greeting = returnSayHello('John');
console.log(greeting);
