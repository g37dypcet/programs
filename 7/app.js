// var timt = "Time taken by warnc function";
// //function1
// console.log("Log function for displaying data");

// //function2
// console.error(new Error('New Error has happened')); 

// //function3
// console.time(timt);

// //function4
// function warnc(x) { 
//     console.warn(`today is ${x} POE`); 
// }  
// const x = 'APL'; 
// warnc(x); 

// //function5
// console.timeEnd(timt);

// //function6
// console.trace();


console.table(
    [
        {
            'name':'shivma',
            'college':'dypcet'
        },

        {
            'name' :'rushi',
            'college' :'dypcet'
        }
    ]
)

const name = 'John';
const age = 30;
console.info('User: %s, Age: %d', name, age);


console.log('simple msg');

console.warn('warn message');


console.error('error message')

console.group('Group 1');
console.log('Message 1');
console.log('Message 2');
console.groupEnd();
