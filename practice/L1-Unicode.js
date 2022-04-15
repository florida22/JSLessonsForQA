/* https://dmitripavlutin.com/what-every-javascript-developer-should-know-about-unicode/#:~:text=Most%20JavaScript%20engines%20use%20UTF-16%20encoding%2C%20so%20let%27s,encoded%20using%20a%20single%20code%20unit%20of%2016-bit

Unicode provides a unique number for every character, no matter what the platform, no matter 
what the program, no matter what the language. The latest version 14.0 (published in September
     2021) provides codes for 144,697 characters.

Abstract character (or character) is a unit of information used for the organization, control,
or representation of textual data

Code point is a number assigned to a single character.
Code points are numbers in the range from U+0000 to U+10FFFF.

U+<hex> is the format of code points, where U+ is a prefix meaning Unicode and <hex> is a 
number in hexadecimal. For example, U+0041 and U+2603 are code points.

https://www.fileformat.info/info/charset/UTF-16/list.htm

Remember that a code point is a simple number. And that's how you  should think about it. 
*/

let smallLetter = "a";
console.log(smallLetter === "\u0061");
console.log(smallLetter.length);

let message = "hello";
let message1 = "\u0068\u0065\u006c\u006c\u006f"
console.log(message === message1);
console.log(message.length, message1.length);


/*
Plane is a range of 65,536 (or 1000016) contiguous Unicode code points from U+n0000 up to 
U+nFFFF, where n can take values from 016 to 1016
The whole set of Unicode code points is split into 17 planes:

Basic Multilingual Plane (MBP) - up to 4 hexadecimal digits, basic latin, cirillik, greek),
Plane 0 contains code points from U+0000 to U+FFFF
***Astral Planes - astral code points,  5 or 6 digits in hexadecimal: U+ddddd or U+dddddd
Plane 1 contains code points from U+10000 to U+1FFFF
Plane 2 contains code points from U+20000 to U+2FFFF
...
Plane 16 contains code points from U+100000 to U+10FFFF.
*/

/*
Ok, the Unicode characters, code points, and planes are abstractions.
But now let's see how Unicode is implemented at the physical, hardware level.
A computer at the memory level doesn't use code points or abstract characters. 
It needs a physical way to represent Unicode code points: the code units.

Code unit is a bit sequence used to encode each character within a given encoding form.
In other words, the character encoding translates the Unicode code points to unique 
code unit sequences.

Popular encodings are UTF-8, UTF-16 and UTF-32.

Most JavaScript engines use UTF-16 encoding, so let's detail into UTF-16.

UTF-16 (the long name: 16-bit Unicode Transformation Format) is a variable-length encoding:

Code points from BMP are encoded using a single code unit of 16-bit
Code points from astral planes are encoded using two code units of 16-bit each.

Suppose you want to save to hard drive LATIN SMALL LETTER A character a. Unicode tells you 
that LATIN SMALL LETTER A abstract character maps to U+0061 code point.

Now let's ask UTF-16 encoding how U+0061 should be transformed. The encoding specification
says that for BMP code point take its hexadecimal number U+0061 and store it into one 
code unit of 16-bit: 0x0061.(0x = hex)

As you can see, code points from BMP fits into a single 16-bit code unit

Now let's study a complex case. Suppose you want to encode GRINNING FACE character 😀.
 This character maps to U+1F600 code point, from an astral plane.
\u{1F600}  U+1F600
*/
let emoji = "\u{1F600}";
let emoji1 = "😀";
console.log(emoji.length); // 2
 
/*
Because astral code points require 21 bits to save the information, UTF-16 says that 
you need two code units of 16-bit. The code point U+1F600 is split into so-called 
surrogate pair: 0xD83D (high-surrogate code unit) and 0xDE00 (low-surrogate code unit).

ES2015 specification mentions that source code text is expressed using Unicode (version 5.1 
and above). The source text is a sequence of code points from U+0000 to U+10FFFF. 
The way source code is stored or interchanged is not relevant to ECMAScript specification,
but usually is encoded in UTF-8 (the preferred encoding for the web).

I recommend keeping the source code text with characters from Basic Latin Unicode block 
(or ASCII). Characters outside ASCII should be escaped. This will ensure fewer problems 
when comes to encoding.

Internally, at the language level, ECMAScript 2015 provides an explicit definition what 
strings are in JavaScript:

The String type is the set of all ordered sequences of zero or more 16-bit unsigned integer
values ("elements") up to a maximum length of 253-1 elements. The String type is generally
used to represent textual data in a running ECMAScript program, in which case each element
in the String is treated as a UTF-16 code unit value.

Every element of a string is interpreted by the engine as a code unit. The way a string is
rendered does not provide a deterministic way to decide what code units (that represent 
code points) it contains. See the following example:
*/
console.log('cafe\u0301'); // => 'café'
console.log('café');       // => 'café'

const smile = '\uD83D\uDE00';
console.log(smile);        // => '😀'
console.log(smile.length); // => 2
const letter = 'e\u0301';
console.log(letter);        // => 'é'
console.log(letter.length); // => 2

console.log("\u0048\u0065\u006c\u006c\u006f\u0020\u0051\u0041\u0020\u0079\u006f\u0075\u0020\u0061\u0072\u0065\u0020\u0067\u0072\u0065\u0061\u0074\u0021")






/*'cafe\u0301' and 'café' literals have slightly different code units, but both are rendered 
the same sequence of symbols café.

The length of a String is the number of elements (i.e., 16-bit values) within it. [...] 
Where ECMAScript operations interpret String values, each element is interpreted as a 
single UTF-16 code unit.

As you know from surrogate pairs and combining marks above chapters, some symbols need 
2 or more code units to be represented. So you should take precautions when counting 
the number of characters or accessing characters by index: */




/*smile string contains 2 code units: \uD83D (high-surrogate) and \uDE00 (low-surrogate). 
Since the string is a sequence of code units, smile.length evaluates to 2. 
Even if rendered smile has only one symbol '😀'.

The same scenario happens with letter string. The combining mark U+0301 applies to the 
previous character and the rendered result is one symbol 'é'. However letter contains 
2 code units, thus letter.length is 2.

My advice: always think of string in JavaScript as a sequence of code units. The way 
string is rendered on the screen cannot say clearly what code units it contains.
*/