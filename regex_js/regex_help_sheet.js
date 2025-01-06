/**
 * Using Test MEthod
 */

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); 


/**
 * Using string literal MEthod
 */


let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; 
let waldoRegexresult = waldoRegex.test(waldoIsHiding);


/**
 * Match a Literal String with Different Possibilities
 * | = OR operator
 */

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; 
let petRegexresult = petRegex.test(petString);


/**
 * Ignore Case While MAtching
 * i = case insenstive meaning  regardless of lower or uppercase
 */
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; 
let ignoreCaseResult = fccRegex.test(myString);


/*
Extract Matches
.match() finds actual matches in the string given
*/
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let extractMatchResult = extractStr.match(codingRegex); 


/*
Find More Than the First Match
g = global to help search / extract pattern more than once
*/

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; 
let globalMatchresult = twinkleStar.match(starRegex); 


/*
Match Anything with Wildcard Period
The wildcard character . will match any one character
*/

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let wildcardMatchResult = unRegex.test(exampleStr);


/**
 * Match Single Character with Multiple Possibilities
 * [match characters within the classes]
 */
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let singlCharacterWithMultiplePossibilitiesresult = quoteSample.match(vowelRegex);


/**
 * Match Letters of the Alphabet
 * - help define range e.g. [a-m] all lowercse letter between a to m
 */
let matchLettersOfTheAlphabetQuoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-zA-Z]/gi;
let letterRangeresult = matchLettersOfTheAlphabetQuoteSample.match(alphabetRegex); 

/*
Match Numbers and Letters of the Alphabet
*/
let matchNumbersAndLettersOfTheAlphabetquoteSample = "Blueberry 3.141592653s are delicious.";
let matchNumbersAndLettersOfTheAlphabetRegex = /[h-s2-6]/ig;
let matchNumbersAndLettersOfTheAlphabetRegexResult = matchNumbersAndLettersOfTheAlphabetquoteSample.match(matchNumbersAndLettersOfTheAlphabetRegex);

/**
 * 
 * Match Single Characters Not Specified
 * ^ = negated character set 
 */
let negatedQuoteSample = "3 blind mice.";
let negatedmyRegex = /[^aeiou0-9]/gi;
let negatedRegexresult = negatedQuoteSample.match(negatedmyRegex); 

/**
 * Match Characters that Occur One or More Times
 * + check if character/pattern are present consecutively e.g s+ = ss or a+ == aabc
 */

let difficultSpelling = "Mississippi";
let multipleCharactersOccuringMoreThanOnceRegex = /s+/g; 
let multipleCharactersOccuringMoreThanOnceRegexresult = difficultSpelling.match(multipleCharactersOccuringMoreThanOnceRegex);
/**
 * 
 */

/**
 * 
 */