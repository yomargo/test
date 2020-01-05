var str = "abcde"

console.log(str[0], str[1], str[4])

for(i = 0; i < str.length; i++) {
  if (str[i] === "a") {
    console.log("I know this letter")
  }
  if (str[i] === "b") {
    console.log("I know this letter")
  }
  if (str[i] === "e") {
    console.log("I know this letter")
  }
}