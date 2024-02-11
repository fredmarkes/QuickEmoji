// Define categories and corresponding emoji clues
const categories = {
    "Food": {
       "🍕🍔🍟": "fast food",
        "🍰🎂🍦": "dessert",
        "🥗🍅🥒": "salad",
        // Add more food-related emoji clues here
    },
    "Animals": {
        "🐶🐱🐭": "pets",
        "🐦🦆🦅": "birds",
        "🐠🐟🐡": "fish",
        // Add more animal-related emoji clues here
    },
    "Activities": {
        "⚽🏀🎾": "sports",
        "🎨🖌️🖼️": "art",
        "🎵🎸🎤": "music",
        // Add more activity-related emoji clues here
    }
    // Add more categories with emoji clues as needed
};

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
