function telephoneCheck(str) {
  let countryCodeCheck = /^[1]/;
  let regex = [/^[1]*\s*\d{3}[-]\d{3}[-]*\d{4}/, 
               /^[1]*\s*[(]\d{3}[)]\s*\d{3}-\d{4}/,
               /^[1]*\s*\d\s\d{3}[-|\s]*\d{3}[-|\s]*\d{4}/,
               /^[1]*\s*\d{10}/]
  for (let i = 0; i < regex.length; i++) {
    if (regex[i].test(str) === true) {
      let length = str.match(/\d/g).join("").length;
      if (length === 11) {
        if (str[0] === "1") {
          return true;
        }
      } else {
        return true;
      }
    }
  }
  return false;
}

console.log(telephoneCheck("1 555 555 5555"));
