"use strict";
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
const magicianNames = ["Vikral aur Gabraal", "Shakalaka", "Hamoon Jadugar", "Harry Potter", "Ainak Wala Jin", "Aladin"];
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    const greatMagicians = magicians.map(magician => `the Great ${magician}`);
    return greatMagicians;
}
const greatMagicianNames = make_great(magicianNames);
console.log("Orignal Magicians:");
show_magicians(magicianNames);
console.log("\nGreat Magicians:");
show_magicians(greatMagicianNames);
