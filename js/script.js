// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt="";
    // Get the Value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if number is valid
    if (isNaN(num) || num.toString().length == 0 || num<0 || num>100000 || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 0 and 100000.`;
    } else {
        txt += `You have entered the number ${num}. <p>`;
        txt += `Sum of multiples of 3 or 5 below ${num} is ${multiplesOf3and5(num)}.`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

/*

    Function to get Sum of Multiples of 3 or 5
    below a certain number.

    For example sum of multiples of 3 or 5 below 10 is 23.

*/
function multiplesOf3and5(number) {
    if (number < 3) return 0;
    let total = 0;
    for (let i=3;i<number;i++) {
        if (i%3==0 || i%5==0) total += i;
    }
    return total;
}

// Function to clear information
function clearInfo() {
    let txt="";
    document.getElementById("numinfo").innerHTML = txt;
}