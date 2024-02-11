// Define categories and corresponding emoji clues

import Oscar2023Categories from './categories.js';

let score = 0;
let highScore =  localStorage.getItem('highScore') || 0;

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


var emojiClues, emojiKeys, randomKey;

function UpdateCategory() {
// Select a random category
const categoryKeys = Object.keys(categories);
const randomCategory = categoryKeys[Math.floor(Math.random() * categoryKeys.length)];

// Select a random emoji clue from the chosen category
emojiClues = categories[randomCategory];
emojiKeys = Object.keys(emojiClues);
randomKey = emojiKeys[Math.floor(Math.random() * emojiKeys.length)];

// Display the selected category and emoji clue
document.getElementById('category').textContent = randomCategory;
document.getElementById('emoji-clues').textContent = randomKey;

}

// Set focus on the user guess input field when the page loads
document.addEventListener('DOMContentLoaded', function() {
    UpdateCategory();
    document.getElementById('guess-input').focus();
    document.getElementById('high-counter').textContent = `HighScore: ${highScore}`;

});


function updateScore() {
    score++;
    document.getElementById('pointer-counter').textContent = `Score: ${score}`;
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('highScore', highScore); 
        document.getElementById('high-counter').textContent = `HighScore: ${highScore}`;
    }
}

function resetScore() {
    score = 0;
    document.getElementById('pointer-counter').textContent = `Score: ${score}`;
}



// Function to check user's guess
document.getElementById('check-button').addEventListener('click', function() {
    const guessInput = document.getElementById('guess-input');
    const userGuess = guessInput.value.trim().toLowerCase();
    const answer = emojiClues[randomKey].toLowerCase();
    const result = document.getElementById('result');
    const checkButton = document.getElementById('check-button');

    if (checkButton.textContent ==="Reset"){
        resetScore();
        document.getElementById('check-button').textContent = "Check Guess";
        guessInput.disabled = false;
        guessInput.value = "";
        result.textContent = "";
        UpdateCategory();
        document.getElementById('guess-input').focus();
        return;
    }

    if (userGuess ==="")
    {
        // Add animation class to input field
        guessInput.classList.add('shake');
        // Remove animation class after animation ends
        guessInput.addEventListener('animationend', function() {
            guessInput.classList.remove('shake');
        });
        document.getElementById('guess-input').focus();
        return;
    }

    if (userGuess === answer) {
        UpdateCategory();
        updateScore();
        guessInput.value = "";
    } else {
        result.textContent = "Incorrect! Try again. 😞";
        document.getElementById('check-button').textContent = "Reset";
        document.getElementById('guess-input').disabled = true;
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

