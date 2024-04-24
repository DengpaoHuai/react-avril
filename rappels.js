function addition(a, b) {
  //this
  return a + b;
}

// retour explicite
const additionFn = (a, b) => {
  return a + b;
};
// retour implicite
const additionFn2 = (a, b) => "calcul correctement réalisé";

const returnObjFn = (a, b) => ({
  a: a,
  b: b,
});

const demoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

demoArray.forEach((element) => {
  console.log(element);
});

const getData = async () => {
  const results = await fetch("https://swapi.py4e.com/api/planets/");
  const response = await results.json();
  return response;
};

//callback = fonction qui prend en paramètre une autre fonction
fetch("https://swapi.py4e.com/api/planets/")
  .then((results) => {
    return results.json();
  })
  .then((data) => {
    console.log(data);
  });

fetch("https://swapi.py4e.com/api/planets/")
  .then((results) => results.json())
  .then((data) => console.log(data));

let demoPerson = {
  name: "Luke Skywalker",
  age: 19,
  isJedi: true,
  address: {
    planet: "Tatooine",
    city: "Mos Eisley",
  },
};
/*
const name = demoPerson.name;
const age = demoPerson.age;
const addres = demoPerson.address;
*/

const { name: person_name, age, address } = demoPerson;

console.log(person_name, age, address);

let arrayDemo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [toto, _, ...titi] = arrayDemo;
console.log(titi);

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];

const array3 = [array1, ...array2];
console.log(array3);

let myname = "Boubacar";
console.log(`Hello World ${myname}`);
