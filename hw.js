​
<<<<<<< HEAD


// PART 1:  USE MAP IN THE FOLLOWING EXCERCISES //

// A) write a function called swapCase that takes a string of words and uses .map and your newly written capitalize()
// function to return a string where every other word is in all caps.
// Hint: look up Array.prototype.map on MDN and see what arguments the .map callback can take.
// ex: swapCase('hello stranger , what do we have today? ') // => " HELLO stranger , WHAT do WE have TODAY ?"
=======
>>>>>>> 217dced5555b51a4659734bf7eb6ef268108f463
var print = (x) => {return console.log(x)}
var swapCase = function(string) {
  var string = string.split('')
  string = string.map(string => string.toUpperCase())
  string = string.join('')
  return string;
};

swapCase('hello stranger , what do we have today?')

​
<<<<<<< HEAD
// B) Write a function shiftLetters that takes a string and uses .map to return an encoded string with each letter shifted down the
// alphabet by one. Hint: Use Look up the JS functions String.fromCharCode() and String.charCodeAt() .
// see if you can use Ascii code to acomplish this
// ex. shiftLetters('hello') // => 'ifmmp'
// ex. (shiftLetters('abcxyz') // => "bcdyz{"
=======

>>>>>>> 217dced5555b51a4659734bf7eb6ef268108f463
var name = ['moe'];



try {
  function to_code(input){
  var tem =[]
  input.forEach(function(e){
    e = e.split('')
    e.forEach(function(elem){
      var code = elem.charCodeAt(elem)
      tem.push(code)

    })
  })
  tem=tem.join();
  console.log(tem);

}
to_code(name)


}

catch(error){
  console.log('hummm try This XD');
  function to_code(input){
  input = input.split('')
  var tem =[]
  input.forEach(function(e){
    e = e.split('')
    e.forEach(function(elem){
      var code = elem.charCodeAt(elem)
      tem.push(code)

    })
  })
  tem=tem.join();
  console.log(tem);
  return tem

}
console.log(to_code(name))

var q = to_code(name)
function from_code(input){
  var tem =[]
  input.forEach(function(e){
    e = e.split('')
    e.forEach(function(elem){
      var code = elem.fromCharCode(elem)
      tem.push(code)
    })
  })
 tem=tem.join();
 console.log(tem);
}
 console.log(from_code(q))


}




// PART 2: USE FOREACH IN THE FOLLOWING EXCERCISES

<<<<<<< HEAD
// A) Build a Deck
// Use a forEach() loop within another forEach() loop to build an array representing a deck of cards. A deck consists of 52 cards - 13 ranks in each of 4 suits.
// Then, display a list of every card in the deck. (Hint: Each element of the array should read something like "ace of spades" or "4 of hearts").
// The start of your output should look something like this:
// - ace of clubs
// - 2 of clubs
// - 3 of clubs
// - 4 of clubs
// - 5 of clubs
// - 6 of clubs
// - 7 of clubs
// - 8 of clubs
// - 9 of clubs
// - 10 of clubs
// - jack of clubs
// - queen of clubs
// - king of clubs
// - ace of diamonds
// - 2 of diamonds
// - 3 of diamonds
var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

suits.forEach(function(index,key){
  console.log(`Start with ${index} -- ${key}`);
  values.forEach(function(card,ind){
    console.log(` ${index+1} of ${card}`)

  })
})



// B) Word Play
// Create a form where users may enter a sentence.
// Turn that sentence into an array using the split method.
// Then, loop through this array to build a new array out of every word in the sentence that is 3 or more characters in length.
// Finally, reverse the order of the new array, join it back together into a string, and display it to the user.

=======

var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

suits.forEach(function(index,key){
  console.log(`Start with ${index} -- ${key}`);
  values.forEach(function(card,ind){
    console.log(` ${index+1} of ${card}`)

  })
})




>>>>>>> 217dced5555b51a4659734bf7eb6ef268108f463
let input = 'hello moe world mac'
var temp = []
var wordPlay = (x)=>{
  var word = x.split(' ')
  word.forEach(function(sent){
    if (sent.length == 3){
      sent = sent.split('')
      sent = sent.reverse()
      sent = sent.join('')
      console.log(sent);
      return sent

    }


  })
}

wordPlay(input)
