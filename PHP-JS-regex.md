PHP/JS - Regex explained 

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#es6



RedirectMatch 301 
^/(why-join|about-us|our-locations|our-stories|vacancies)/?(.*)?$ /


^ = beginning of string = https://nameofsite.com

/(*|*|*|*|*)/ = anything after first and before second slash  = /contact/

?(.*)?$ / = Optional matches anything before the end of string






RedirectMatch 301 ^/testimonials/(.+)/?$ /our-stories

^ = beginning of string = https://nameofsite.com

/string/ = match anything after first and before second slash

(.+) = match any character in a group

/?$ = After the slash Optional matches anything before the end of string

+ = appears 1 or More times in a row
Match Characters that Occur One or More Times ( the character or pattern has to be present consecutively.)
e.g. /s+/g; - Mississippi

- Match Characters that Occur Zero or More Times  = 
/Aa*/ - Aaaaaaaaaaaaaaaarrrgh! 

Find Characters with Lazy Matching 

/<.*?>/ = "<h1>Winter is coming</h1>"

 
Check For Mixed Grouping of Characters
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin D. Roosevelt|Eleanor Roosevelt)/; // Change this line
let result = myRegex.test(myString); // Change this line


Use Capture Groups to Search and Replace
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);

 access capture groups in the replacement string with dollar signs ($).


Find any img tag
<img(.*)\/>

<img - match these string 

(.*) = any characters and matches previous token of starting tag

\/> - closing tag


 /regexPAttern/ i = Ignore Cases for regex 

 /regexPAttern/g = Look for multiple matches  

. - wildcard =  match any character
e.g. 
Let exampleStr = “ I had fun learning this logic”;
Let Regex = “/.un/“;
Let result = Regex.test(exampleStr);

/[regexPAttern]/gi = find any of follow characters 

e.g. 
Let exampleStr = “ Beware of bugs in the above code; I have only proved it correct, not tried it.”;
Let Regex = “/[aeiou]/gi“;
Let result = Regex.match(exampleStr);

let alphabetRegex = /[a-z]/gi; // Match All alphabet
let selectedAlphabetRegex = /[h-s2-6]/gi; // Match Selected ranged go Letters and numbers 


/^regexPattern/  = neglect character(s) in Regex Pattern
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line


/+regexPattern/ig. = find multiple occurrance of character; 
let difficultSpelling = "Mississippi";
let myRegex = /s+/ig; // Change this line
let result = difficultSpelling.match(myRegex);

Set of Characters not to match = negated character sets


Match Characters that Occur Zero or More Times 
let result =“Aaaaaaaaaaaaaaaarrrgh!”(/Aa*/);
let result =“”Aaaaaaaaaaaaaaaarrrgh!(/A([a{0,}])*/);



Find Characters with Lazy Matching
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);


Find One or More Criminals in a Hunt

"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"


let reCriminals = /C+/; // Change this line


URL [ip] - - ([.*])

^www.warp.co.uk
 - - ([.*]). /  - - ([\w\W])
 - - (\[.*\]) “[A-Z{1,4}] 



Match Single Characters Not Specified
/[^aeiou0-9]/gi; = match characters that are not a vowel or number
