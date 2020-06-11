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

class GetPersons {
    constructor() {
        let persons = [
            new Person("Maria", "Peterson", "22", "mp@gmail.com"),
            new Person("lexicon"),
            new Person("Safa", "Laarson", "25"),
            new Person("Peter", "Json", "24", "pt@live.com")
        ]
    }
}
let persons = new GetPersons();