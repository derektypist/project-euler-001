# Project Euler 001 - Multiples of 3 and 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3,5,6 and 9.  The sum of these multiples is 23.  The aim is to find the sum of all the multiples of 3 or 5 below a certain number `n`.  Information is at [Project Euler 001](https://projecteuler.net/problem=1).

## UX

**Getting Started**

Enter a whole number between 0 and 100000 and click on the Submit Button.  You will see the number that you have entered, as well as the sum of the multiples of 3 or 5 below that number, unless you have made an invalid input.  Click on the Reset Button to clear that information or to start again.

**User Stories**

As a user, I expect to get an error message, if I do any of:

    - Entering a number, but it is not an integer
    - Entering a number less than 0 or greater than 100000
    - Entering text (e.g. bus)
    - Not enter anything in the input field

As a user, I expect the function `multiplesOf3and5(10)` to return a number.
As a user, I expect the function `multiplesOf3and5(49)` to return 543.
As a user, I expect the function `multiplesOf3and5(1000)` to return 233168.
As a user, I expect the function `multiplesOf3and5(8456)` to return 16687353.
As a user, I expect the function `multiplesOf3and5(19564)` to return 89301183.

**Information Architecture**

The parameter `number` is an integer between 0 and 100000.  The function `multiplesOf3and5(number)` returns an integer.

## Features

Allows the user to enter a number as well as seeing the sum of multiples of 3 or 5 below that number.  For example, if the number was 10, the sum of multiples of 3 or 5 below 10 is 23.  Performs checks on valid user input.  If the input is not valid, an error message is displayed.

## Technologies

Uses HTML5, CSS3, JavaScript, Bootstrap 5.1.3 and Google Fonts.

## Testing

Ensure all user stories have been met.
