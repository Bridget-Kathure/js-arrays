
//Find the last element of the following arrays.arr1 = [3,7,34,90,12]arr2 = [true, "green", "where",12,56]
let arr1 = [3,7,34,90,12]
console.log('last element', arr1.slice(-1));
let arr2 = [true, "green", "where",12,56]
console.log('last item', arr2.slice(-1));

//Write a JS program that will join the following array elements into a string myPets = ["Cow", "Bird", "Snake", "Dog"];
let myPets = ["Cow", "Bird", "Snake", "Dog"];
let newPets = myPets.toString();
console.log({newPets})

// write a JS script to sort the following array itemsvar arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
let arr3 = [-5,9,5,3,2,-3,6,8,4,1]
arr3.sort((num1,num2)=> num1-num2);
console.log('ascending',arr3)
arr3.sort((num1,num2)=> num2-num1);
console.log('descending',arr3);


// Write a program to remove duplicates from the following array.
//Console the array without duplicates, and
//console another array that only contains the duplicates
let arr = ["boy", "man", "girl","school", "girl", "woman"];
let theNames = [];
let duplicates = [];
arr.forEach(name =>{
    if (!theNames.includes(name)) {
        theNames.push(name);
    }
    else(duplicates.push(name));
});
console.log({theNames});
console.log({duplicates});


// Write a JS script to search for the following word "way" inthe array, If the word
// is present, console it else console "the search word was not found"
let arr5 = ["the","way","x",4]
const text = "way";
const textIndex = arr5.indexOf(text);
if (text==arr5[1]){console.log({text})}
else {console.log("the search was not found")}

//Write a JS script to sort the following string:let word = "renniw"
let word = "renniw";
let newWord = function(word){
    return word.split('').sort().join('');
};
console.log(newWord(word))

//Using an array of fruits with length 10 , insert 'Tomato' at the 5th index 
let fruits = ["mango","guava","banana","apple","pineapple","pawpaw","passionfruit","lemon","watermelon","orange"];
fruits.splice(5,1,"tomato");
console.log({fruits})