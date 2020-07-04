function convertToRoman(num) {

  let val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let rom = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]

  let str = "";
  let remainder = num;
  for (let i = 0; i < val.length; i++) {
    for (let j = 0; j < Math.floor(remainder / val[i]); j++) {
      str = str.concat(rom[i]);
    }
    remainder = remainder % val[i]; 
  }
  return str;
}

console.log(convertToRoman(124));
