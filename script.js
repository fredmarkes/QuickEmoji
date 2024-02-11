// Define categories and corresponding emoji clues

import Oscar2023Categories from './categories.js';

const categories = {
 //   "Food": {
 //      "🍕🍔🍟": "fast food",
 //       "🍰🎂🍦": "dessert",
 //       "🥗🍅🥒": "salad",
        // Add more food-related emoji clues here
 //   },
 //   "Animals": {
    //     "🐶🐱🐭": "pets",
    //     "🐦🦆🦅": "birds",
    //     "🐠🐟🐡": "fish",
    //     // Add more animal-related emoji clues here
    // },
    // "Activities": {
    //     "⚽🏀🎾": "sports",
    //     "🎨🖌️🖼️": "art",
    //     "🎵🎸🎤": "music",
    //     // Add more activity-related emoji clues here
    // }
    // // Add more categories with emoji clues as needed
};

// Append the additional categories to the existing categories object
Object.assign(categories, Oscar2023Categories);

// Select a random category
const categoryKeys = Object.keys(categories);
const randomCategory = categoryKeys[Math.floor(Math.random() * categoryKeys.length)];

// Select a random emoji clue from the chosen category
const emojiClues = categories[randomCategory];
const emojiKeys = Object.keys(emojiClues);
const randomKey = emojiKeys[Math.floor(Math.random() * emojiKeys.length)];

// Display the selected category and emoji clue
document.getElementById('category').textContent = randomCategory;
document.getElementById('emoji-clues').textContent = randomKey;


// Function to check user's guess
document.getElementById('check-button').addEventListener('click', function() {
    const userGuess = document.getElementById('guess-input').value.trim().toLowerCase();
    const answer = emojiClues[randomKey].toLowerCase();
    const result = document.getElementById('result');

    if (userGuess ==="")
    return; 

    if (userGuess === answer) {
        result.textContent = "Correct! 🎉";
    } else {
        result.textContent = "Incorrect! Try again. 😞";
    }
});

document.getElementById('guess-input').addEventListener('click', function() {
    const result = document.getElementById('result');
    const userGuess = document.getElementById('guess-input').value.trim().toLowerCase();
    if (result.textContent === "Incorrect! Try again. 😞"){
        document.getElementById('guess-input').value = "";
        document.getElementById('result').textContent = "";
    }
});