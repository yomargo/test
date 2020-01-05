var num = Number(prompt("Type the number of hours"))

if (isNaN(num)) {
  console.log("Please enter valid number")
}

alert(num * 3600)