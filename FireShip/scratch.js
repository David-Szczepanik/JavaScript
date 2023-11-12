
const animal = {
  dna: 123,
  legs: {
    front: 2, back: 2
  },
  sleep(){
    console.log('zzz')
  }
};

const p1 = Object.getPrototypeOf(animal)
console.log(p1)
let a = 5;
console.log(a**2);
console.log(a);
