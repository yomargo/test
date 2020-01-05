var num = Number(prompt("Type your number"))
var sum = 0

if (isNaN(num)){
  alert("Please enter valid number")
} else {
  for(i = 0; i <= num; i++) {
    if(i % 2 !== 0) {
      sum += i
      }  
    }
}

console.log(sum)