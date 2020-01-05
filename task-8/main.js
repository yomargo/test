var str = "Привет, Мир!"
var sum = 0

for(i = 0; i < str.length; i++) {
  var x = str.charCodeAt(i)
  sum += x
}

console.log(sum)