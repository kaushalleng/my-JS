// condition 01
let score = 9696

console.log(typeof score); // number
console.log(typeof (score)); // number


// condition 02
let score2 = "9696"

console.log(typeof score2); // number

// conversion for condition 02
let valueInNumber2 = Number(score2) // capital letter is must for conversion like number => Number, string => String etc.
console.log(valueInNumber2); // 9696 {this is a number}


// condition 03
let score3 = "9696kk"

// conversion for condition 03
let valueInNumber3 = Number(score3) // score3 is converted in number Successfully but value is 'NaN'
console.log(valueInNumber3); //NaN {not a number}


// list of converted values
/*
9696 => It is already number value but we don't know so, I will Check or Convert
"9696" => 9696 {String to Number}
"9696kk" => NaN {It is string but that have contain alphabets so converted in Number, but value will be NaN}
null => 0 Zero {this is dangerous for TEMPATURE values and etc.}
undefined => NaN
true => 1; false => 0 {boolean}
*/



// other conversion

// 1 => true; 0 => false
// "" => false
// "kaushal" => true