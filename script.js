// 0006. Extract duplicate numbers from an array

const numbers = [1, 2, 5, 5, 6, 7 ,7 ,8 ];

const duplicate = numbers.filter(function(value, index, array){
    return array.indexOf(value) !== index
});

console.log(duplicate);




// 0007. Find Out how many times a word is used in 1 sentence & Position

const Sentence = "Hey, My name is Shawn. I am a Frontend React JS Developer. I have no experience with React JS."

const matches = Sentence.match(/React/gi);

const accurances = matches ? matches.length : 0;

let position = Sentence.search(/React/i);
position = position >= 0 ? position : "Not Found!";

console.log(accurances);
console.log(position);





// 0008. Find out the postion of Word/Character from a lenear function;


function lenearSearch(arr, val){

    const length = arr.length;
    for(let i = 0; i < length; i++){
        if(arr[i] === val){
            return i;
        }
    }

    return "Not Found!"
}

console.log(lenearSearch(['a', 'b', 'c', 'f', 'd', 'c'], 'c'));






// 0009. Find out the longest string of an array


function longestNames(names){
    let longestWord = '';

    for (name of names){
        if(name.length > longestWord.length){
            longestWord = name;
        }
    }

    return [longestWord, names.indexOf(longestWord)];
}

console.log(longestNames(['Shawn', 'Asif', 'Fardeen', 'Riyad', 'Ashik', 'Riaz']))





// 0010. Find Out which numbers from 1 to 100 are divisible by 3 and 5 and which numbers are divisible by both 3 and 5.


function fizzBuzz(numbers){
    for(let i = 1; i <= 100; i++){
        if(i % 15 === 0){
            console.log(`${i} is fizzBuzz`);
        }
        else if(i % 3 === 0){
            console.log(`${i} is fizz`);
        }
        else if(i % 5 === 5){
            console.log(`${i} is Buzz`);
        }
        else{
            console.log(i)
        }
    }
}

fizzBuzz(100);