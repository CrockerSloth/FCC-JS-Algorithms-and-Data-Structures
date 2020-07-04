function rot13(str) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let decoded = "";
  let regex = /[A-Z]/;
  for (let i = 0; i < str.length; i++) {
    if (regex.test(str[i])) {
      let n = (alphabet.search(str[i]) + 13) % 26;
      console.log(n);
      decoded = decoded.concat(alphabet[n]);
    } else {
      decoded = decoded.concat(str[i]);
    }
  }
  return decoded;
}

console.log(rot13("SERR YBIR?"));
