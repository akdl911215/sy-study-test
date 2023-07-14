const user1 = {
  name: "Lee",
  address: {
    city: "Seoul",
  },
};

const user2 = Object.assign({}, user1);
console.log(user1 === user2);
console.log("user2 :  ", user2);

user2.name = "Kim";
console.log("user1 : ", user1);
console.log("user2 : ", user2);

const person = {
  name: "Lee",
  age: null,
};
console.log(person.age2);
