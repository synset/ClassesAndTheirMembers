class Person {
  constructor(firstname, lastname, age, email) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.age = age;
    this.email = email;
    this.toString();
  }

  toString() {
    console.log(`${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`);
  }

}

let pers = new Person('Maria', 'Petterson', 22, 'mp@gmail.com');
console.log(pers);