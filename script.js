// Array of emoji clues and corresponding answers
const emojiClues = {
    "🍕🍔🍟": "fast food",
    "📚🏫🎓": "school",
    "🎥🍿🎬": "movie",
    "🎄🎁🎅": "Christmas"
};

// Select random emoji clue and display it
const emojiKeys = Object.keys(emojiClues);
const randomKey = emojiKeys[Math.floor(Math.random() * emojiKeys.length)];
document.getElementById('emoji-clues').textContent = randomKey;

// Function to check user's guess
document.getElementById('check-button').addEventListener('click', function() {
    const userGuess = document.getElementById('guess-input').value.trim().toLowerCase();
    const answer = emojiClues[randomKey].toLowerCase();
    const result = document.getElementById('result');
    
    if (userGuess === answer) {
        result.textContent = "Correct! 🎉";
    } else {
        result.textContent = "Incorrect! Try again. 😞";
    }
});
