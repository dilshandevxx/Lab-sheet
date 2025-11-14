const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);

// Add a new fruit
fruits.push("Pineapple");

// Remove the second fruit ("Banana")
fruits.splice(1, 1);

console.log("Array length:", fruits.length);
console.log("Updated Fruits:", fruits);

// Using for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Using forEach()
fruits.forEach((fruit) => {
  console.log(fruit);
});

// Task 2.1: Transforming Arrays

const numbers = [2, 5, 8, 10, 12];

const doubled = numbers.map((n) => n * 2);
const greaterThanSix = numbers.filter((n) => n > 6);
const sum = numbers.reduce((total, n) => total + n, 0);

console.log(doubled);
console.log(greaterThanSix);
console.log(sum);

// Task 2.2

console.log(numbers.includes(8));
console.log(numbers.indexOf(10));
console.log(numbers.sort((a, b) => a - b));

// 3. Objects – Basics
// Task 3.1: Creating and Accessing Objects

const student = {
  name: "Kavindu",
  age: 21,
  faculty: "Computing",
  subjects: ["Web Development", "Database Systems", "Programming"],
};

console.log(student.name);
console.log(student.faculty);

// Add new property
student.year = 2025;

// Update age
student.age = 22;

// Print subjects
student.subjects.forEach((sub) => console.log(sub));

// 4. Nested Objects and Arrays
// Task 4.1: Array of Objects

const students = [
  { name: "Kavindu", age: 21, faculty: "Computing" },
  { name: "Nimesha", age: 22, faculty: "Engineering" },
  { name: "Dinuka", age: 23, faculty: "Business" },
];

// Print names
students.forEach((s) => console.log(s.name));

// Filter students older than 21
const olderStudents = students.filter((s) => s.age > 21);

// Map to get faculty list
const faculties = students.map((s) => s.faculty);

console.log(olderStudents);
console.log(faculties);

// task 4.2

const classroom = {
  className: "IT2025",
  teacher: "Mr. Perera",
  students: [
    { name: "Kavindu", age: 21 },
    { name: "Nimesha", age: 22 },
    { name: "Dinuka", age: 23 },
  ],
};

console.log(classroom.teacher);

// Add new student
classroom.students.push({ name: "Sanjula", age: 20 });

// Print all student names
classroom.students.forEach((s) => console.log(s.name));

//Task 5

const products = [
  { name: "Keyboard", price: 2500, qty: 2 },
  { name: "Mouse", price: 1500, qty: 3 },
  { name: "Monitor", price: 22000, qty: 1 },
];

const totalValue = products.reduce((total, item) => {
  return total + item.price * item.qty;
}, 0);

console.log("Total Product Value:", totalValue);
