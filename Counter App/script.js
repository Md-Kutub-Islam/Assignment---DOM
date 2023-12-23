// Getting the element 
const decrementButton = document.getElementById("decrementButton")
const incrementButton = document.getElementById("incrementButton")
const displaValue = document.getElementById("displayValve")
const resetButton = document.getElementById("resetbutton")
console.log(decrementButton);
console.log(incrementButton);
console.log(displaValue);
console.log(resetButton);

// Decrement Button 
decrementButton.addEventListener("click", () => {
    const value = Number(displaValue.innerText)
    if(value > 0){
        displaValue.innerText = value - 1
    }
    else{
        alert("Negative value not allowed")
    }
})

// INcrement Button 
incrementButton.addEventListener("click", () => {
    const value = Number(displaValue.innerText);
    if(value >= 10){
        alert("10+ values are not allowed")
    }
    else{
        displaValue.innerText = value + 1
    }
})

// Reset button 
resetButton.addEventListener('click', () => {
    displaValue.innerText = 0
})