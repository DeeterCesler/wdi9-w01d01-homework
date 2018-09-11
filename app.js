/* Part 1
1. interpolation - when you insert an element into a string of text. e.g. console.log("my name is " + name)
concatentation - when you join two strings or elements together, sometimes as a new element. e.g. console.log("my name is " + "deeter")

2. DRY - don't repeat yourself. It's important for maintainability, scalability, computer load, and clean code. 
Loops are one way this works.

3. Declaring a variable means it now exists. Assigning value is giving that variable meaning.

4. default to using const until the interpreter says it doesn't make sense

5. a directory with child directories within it

6. type in "man " + whatever command you want to know more about

7. type in a letter of what you want, hit tab, and it can autocomplete whatever file or directory you're looking for

*/

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' === 'Name');
// console.log(a < b < c);
// console.log(a + a < d);
// console.log(e === 'Kevin');
// console.log(48 == '48')

// declare variable "letters"
let letters = "A";
// declares variable i
let i = 0;

//begins while loop, which will run if i is less than 20
while (i < 20) {
    //letters will add an A to its string
    letters += "A";
    //i will increase by one
	i++;
}

//I believe this will log a string with 20 "A"s in a row
console.log(letters);

//that's what happened


// 1. for loops contains its own syntax for next iteration, while loops need you to include it in the code block. for loops can also be more precise
// they are both similar as they can essentially perform the same operation
// 2. 
for(i=0; i < 1000; i++){
    console.log(i);
}

// 3. 
// The first part of the control statement is: the initiator that begins the conditions of the loop
// The second part of the control statement is: the actual loop that says run while this is true
// The third part of the control statement is: the iterator that will hopefully end the loop

// 4.
for(i=999l i >= 0; i--){
    console.log(i)
}

// 5.
for(i=1; i <=10; i++){
    console.log("The value of i is: " + i + " of 10")
}