// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt="";
    // Get the Value of the Input Field
    let number = document.getElementById("mynumber").value;
    // Check if number is valid
    if (isNaN(number) || number.toString().length == 0 || number<0 || num>100000 || !Number.isInteger(Number(number))) {
        txt += `Invalid Input.  Please enter a whole number between 0 and 100000.`;
    } else {
        txt += `You have entered the number ${number}. <p>`;
        txt += `Sum of multiples of 3 or 5 below ${number} is ${multiplesOf3and5(number)}.`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

// Function to get the sum of multiples of 3 or 5 below a certain number
function multiplesOf3and5(number) {
    return Array(number).fill(0).map((e,i) => i).filter((i) => i%3==0 || i%5==0).reduce((p,c) => p+c, 0);
}

// Function to clear information
function clearInfo() {
    let txt="";
    document.getElementById("numinfo").innerHTML = txt;
}