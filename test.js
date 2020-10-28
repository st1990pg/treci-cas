export default class User {
<<<<<<< HEAD
  constructor(testName, testage) {
    this.testName = name;
    this.testage = age;
  }

  returnUser() {
    console.log('ovo je test' + this.testName + this.testage);
=======
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  returnUser() {
    console.log(this);
>>>>>>> newBranch
  }
}
