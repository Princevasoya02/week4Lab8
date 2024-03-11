console.log("Good Morning");

console.log("Exercise 1");

const array0 = [1, 4, 9, 16];
// Pass a function to map
const map0 = array0.map(function(x) 
{return x * 3});
console.log(map0);

console.log("Exercise 2");
const numbers = [4, 9, 16, 25];
const map2 = numbers.map(Math.sqrt);
console.log(map2);

console.log("Exercise 3");
const array1 = [1, 4, 9, 16];
const map3 = array1.map(function(x) {
  return x * 2;
});
console.log(map3);

console.log("Exercise 4");
const celsiusTemperatures = [0, 10, 20, 30, 40];
const fahrenheitTemperatures = celsiusTemperatures.map(function(celsius) {
  return (celsius * 9/5) + 32;
});
console.log(fahrenheitTemperatures);


console.log("Exercise 5");
const fruits = ["apple", "banana", "cherry", "date"];
const uppercaseFruits = fruits.map(function(fruit) {
  return fruit.toUpperCase();
});
console.log(uppercaseFruits);


console.log("Exercise 6");
const products = [
    { id: 1, name: "Product A", price: 10 },
    { id: 2, name: "Product B", price: 20 },
    { id: 3, name: "Product C", price: 30 }
  ];
  const productNames = products.map(function(product) {
    return product.name;
  });
  console.log(productNames);

  console.log("Exercise 7");
  const sentences = ["Hello World", "How are you?", "I am fine."];
const words1 = sentences.map(function(sentence) {
  return sentence.split(" ");
});
console.log(words1);

//console.log("Exercise 8");
//const names = ["John", "Jane", "Bob", "Alice"];
//const listItems = names.map(function(name) {
 // return <li>{name}</li>;
//});
//console.log(listItems);


console.log("Exercise 9");
const words2 = ["apple", "banana", "cherry", "date"];
const lengths = words2.map(function(words2) {
  return words2.length;
});
console.log(lengths);

console.log("Exercise 10");
const dates = [new Date("2022-01-01"), new Date("2022-02-02"), new Date("2022-03-03")];
const formattedDates = dates.map(function(date) {
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
});
console.log(formattedDates);


console.log("Exercise 11");
function getFullName(item) {
    return [item.firstname, item.lastname].join(" ");
  }
  
  const persons = [
    {firstname: "Malcom", lastname: "Reynolds"},
    {firstname: "Kaylee", lastname: "Frye"},
    {firstname: "Jayne", lastname: "Cobb"}
  ];
  
  const map1 = persons.map(getFullName);
  console.log(map1);
