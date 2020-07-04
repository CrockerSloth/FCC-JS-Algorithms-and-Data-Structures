function palindrome(str) {
  let parsedStr = str.replace(/[^\w]|_/g, "").toLowerCase();
  let reversedStr = parsedStr.split("").reverse().join("").toLowerCase();
  return parsedStr === reversedStr;
}

console.log(palindrome("five|\_/|four"));
