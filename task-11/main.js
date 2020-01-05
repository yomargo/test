var input = prompt("Type your number")
var num = parseInt(input)
var result = 0

if(input.endsWith('h')) {
  result = num * 3600
} else if(input.endsWith('d')) {
  result = num * 86400
} else if(input.endsWith('w')){
  result = num * 604800
} else if(input.endsWith('m')){
  result = num * 2592000
}

console.log(result)