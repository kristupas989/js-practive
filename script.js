let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str);
console.log(meetup);
console.log('//');

let people = {
  name: 'Adam',
  lastname: 'Lambert',
  age: 38,
  isAdmin: false,
  courses: ['html','js'],
  wife: null,
};
 
 

let paverciu = JSON.stringify(people);

console.log(typeof paverciu); 
console.log(paverciu)
