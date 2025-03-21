Scenario 1: Basic setTimeout
console.log('First');

setTimeout(() => {
  console.log('Second');
}, 0);

console.log('Third');
Scenario 2: Nested setTimeout
setTimeout(() => {
  console.log('First');
  setTimeout(() => {
    console.log('Second');
  }, 0);
}, 0);

console.log('Third');
Scenario 3: Long running operation
function longOperation() {
  for (let i = 0; i < 1000000000; i++) {
    // Some heavy computation
  }
  return 'Operation complete';
}

console.log('Start');

setTimeout(() => {
  console.log(longOperation());
}, 0);

console.log('End');
//Scenario 4: Multiple setTimeout with Different Delays
console.log("Start");

setTimeout(() => {
  console.log("A");
}, 3000);

setTimeout(() => {
  console.log("B");
}, 1000);

setTimeout(() => {
  console.log("C");
}, 2000);

console.log("End");


//Scenario 5: Changing the Timeout Delay Dynamically
console.log("Start");

let delay = 2000;
setTimeout(() => {
  console.log("Hello");
  delay = 1000;
}, delay);

setTimeout(() => {
  console.log("World");
}, delay);

console.log("End");


//Bonus Scenario: Promises and setTimeout
//NOTE: We have not learned about Promises yet but we will come next week. 
//Feel free to try and tackle this bonus scenario if you'd like. 
//Also feel free to read up a bit on JavaScript Promises, again, only if you'd like. 
//We'll talk about it in an official capacity come next week. 
//Hint to understanding this scenario: Remember how I said that technically the queue is made up of two queues? 
//A regular task queue and a micro-task queue? Understanding this scenario will require understanding of the micro-task queue. 
//Feel free to dig deeper only if you'd like.

console.log('First');

Promise.resolve().then(() => console.log('Second'));

setTimeout(() => console.log('Third'), 0);

console.log('Fourth');