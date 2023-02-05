type Name = string;
type Age = number;
type User = { name: Name, age: Age };


// restrict the object type.
const user: User = { name: 'John', age: 30 };
const useObject: Object = { name:"Pepe", age: 50, altura: 12, ruedas: 4, material: true};