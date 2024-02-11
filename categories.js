const categories = {
    "Best Picture": {
        "🇺🇸📚🎬": "American Fiction",
        "🩺🍂🍁": "Anatomy of a Fall",
        "👸🎀💄": "Barbie",
        "🚗🔙🎥": "The Holdovers",
        "🔫🌸🌕": "Killers of the Flower Moon",
        "🎼🎹🎶": "Maestro",
        "👨‍🔬💣👩‍🔬": "Oppenheimer",
        "🕰️👤👥": "Past Lives",
        "💰📉🎭": "Poor Things",
        "🚷🎢🔍": "The Zone of Interest"
    },
    "Best Actor in a Leading Role": {
        "🎭🎹👨‍🦱": "Bradley Cooper in Maestro",
        "🎭👨🏾🤵": "Colman Domingo in Rustin",
        "🎭🚗🔙": "Paul Giamatti in The Holdovers",
        "🎭👨‍🔬💣": "Cillian Murphy in Oppenheimer",
        "🎭🇺🇸📚": "Jeffrey Wright in American Fiction"
    },
    "Best Actress in a Leading Role": {
        "🎭🏊‍♀️🌊": "Annette Bening in Nyad",
        "🎭🔫🌸": "Lily Gladstone in Killers of the Flower Moon",
        "🎭🩺🍂": "Sandra Hüller in Anatomy of a Fall",
        "🎭🎼👩‍🦱": "Carey Mulligan in Maestro",
        "🎭💰📉": "Emma Stone in Poor Things"
    },
    "Best Actor in a Supporting Role": {
        "🎭🇺🇸📚": "Sterling K. Brown in American Fiction",
        "🎭🔫🌸🌕": "Robert De Niro in Killers of the Flower Moon",
        "🎭👨‍🔬💣": "Robert Downey Jr. in Oppenheimer",
        "🎭👱‍♂️👸🎀": "Ryan Gosling in Barbie",
        "🎭💰📉": "Mark Ruffalo in Poor Things"
    },
    "Best Actress in a Supporting Role": {
        "🎭👩‍🔬💣": "Emily Blunt in Oppenheimer",
        "🎭🎨💜": "Danielle Brooks in The Color Purple",
        "🎭👸🎀": "America Ferrera in Barbie",
        "🎭🏊‍♀️🌊": "Jodie Foster in Nyad",
        "🎭🚗🔙": "Da'Vine Joy Randolph in The Holdovers"
    },
    "Best Animated Feature Film": {
        "🧑‍👦🦢🎬": "The Boy and the Heron",
        "🔥💧🌍": "Elemental",
        "🧑‍🎤👹💥": "Nimona",
        "🤖💭💤": "Robot Dreams",
        "🕷️🕸️🌀": "Spider-Man: Across the Spider-Verse"
    },
    "Best Cinematography": {
        "🤴🎥👑": "El Conde",
        "🔫🌸🌕": "Killers of the Flower Moon",
        "🎹🎥🎼": "Maestro",
        "🔬💣🎥": "Oppenheimer",
        "💰📉🎥": "Poor Things"
    },
    "Best Costume Design": {
        "👸🎀👗": "Barbie",
        "🔫🌸🌕": "Killers of the Flower Moon",
        "👑🎩🇫🇷": "Napoleon",
        "👨‍🔬💣👩‍🔬": "Oppenheimer",
        "💰📉👗": "Poor Things"
    },
    "Best Directing": {
        "🩺🍂🎬": "Anatomy of a Fall",
        "🔫🌸🌕🎬": "Killers of the Flower Moon",
        "👨‍🔬💣🎬": "Oppenheimer",
        "💰📉🎬": "Poor Things",
        "🚷🎢🎬": "The Zone of Interest"
    },
    "Best Documentary Feature Film": {
        "🇺🇬🍇🎬": "Bobi Wine: The People’s President",
        "🕰️🧠🎬": "The Eternal Memory",
        "👩‍👧‍👧‍👧🎬": "Four Daughters",
        "🐯🔫🎬": "To Kill a Tiger",
        "2️⃣0️⃣📅🇺🇦": "20 Days in Mariupol"
    },
    "Best Documentary Short Film": {
        "📚🚫🎬": "The ABCs of Book Banning",
        "✂️🎬": "The Barber of Little Rock",
        "🏝️🔄🎬": "Island in Between",
        "🔧🏭🎬": "The Last Repair Shop",
        "👵👵🎬": "Nǎi Nai & Wài Pó"
    },
    "Best Film Editing": {
        "🩺🍂🎞️": "Anatomy of a Fall",
        "🚗🔙🎞️": "The Holdovers",
        "🔫🌸🌕🎞️": "Killers of the Flower Moon",
        "👨‍🔬💣🎞️": "Oppenheimer",
        "💰📉🎞️": "Poor Things"
    },
    "Best International Feature Film": {
        "🛳️👨‍✈️🎬": "Io Capitano",
        "🏖️😎🎬": "Perfect Days",
        "❄️🏔️🎬": "Society of the Snow",
        "👩‍🏫🏫🎬": "The Teachers' Lounge",
        "🚷🎢🎬": "The Zone of Interest"
    },
    "Best Makeup and Hairstyling": {
        "👵🏼💄💇": "Golda",
        "🎹💄💇": "Maestro",
        "👨‍🔬💣💇": "Oppenheimer",
        "💰📉💄💇": "Poor Things",
        "❄️🏔️💄💇": "Society of the Snow"
    },
    "Best Music (Original Score)": {
        "🇺🇸📚🎼": "American Fiction",
        "🏺🔑🎼": "Indiana Jones and the Dial of Destiny",
        "🔫🌸🌕🎼": "Killers of the Flower Moon",
        "👨‍🔬💣🎼": "Oppenheimer",
        "💰📉🎼": "Poor Things"
    },
    "Best Music (Original Song)": {
        "\"🔥\"👩‍🍳🎶": "\"The Fire Inside\" from Flamin' Hot",
        "\"👱‍♂️\"🎀🎶": "\"I'm Just Ken\" from Barbie",
        "\"🎻\"🎶": "\"It Never Went Away\" from American Symphony",
        "\"🔫🌸🌕\"🎶": "\"Wahzhazhe (A Song For My People)\" from Killers of the Flower Moon",
        "\"👸\"🎀🎶": "\"What Was I Made For?\" from Barbie"
    },
    "Best Production Design": {
        "👸🎀🏰": "Barbie",
        "🔫🌸🌕🏰": "Killers of the Flower Moon",
        "👑🎩🏰": "Napoleon",
        "👨‍🔬💣🏰": "Oppenheimer",
        "💰📉🏰": "Poor Things"
    },
    "Best Animated Short Film": {
        "💌🐖🎬": "Letter to a Pig",
        "9️⃣5️⃣🧠🎬": "Ninety-Five Senses",
        "👮‍♂️🎖️🎬": "Our Uniform",
        "🐘🎬": "Pachyderme",
        "☮️🎸🎬": "War Is Over! Inspired by the Music of John & Yoko"
    },
    "Best Live Action Short Film": {
        "🕰️😱🎬": "The After",
        "🛡️🦸‍♂️🎬": "Invincible",
        "🛡️👨‍🚀🎬": "Knight of Fortune",
        "🔴⚪🔵🎬": "Red, White and Blue",
        "📚🍬😊🎬": "The Wonderful Story of Henry Sugar"
    },
    "Best Sound": {
        "🎨👩‍🎨🔊": "The Creator",
        "🎹🎶🔊": "Maestro",
        "🕵️‍♂️🚁🔊": "Mission: Impossible – Dead Reckoning Part One",
        "👨‍🔬💣🔊": "Oppenheimer",
        "🚷🎢🔊": "The Zone of Interest"
    },
    "Best Visual Effects": {
        "🎨👩‍🎨✨": "The Creator",
        "🦖➖1️⃣🎬": "Godzilla Minus One",
        "🌌🦸‍♂️3️⃣🎬": "Guardians of the Galaxy Vol. 3",
        "🕵️‍♂️🚁1️⃣🎬": "Mission: Impossible – Dead Reckoning Part One",
        "👑🎩🏰": "Napoleon"
    },
    "Best Writing (Adapted Screenplay)": {
        "🇺🇸📚📝": "American Fiction",
        "👸🎀📝": "Barbie",
        "👨‍🔬💣📝": "Oppenheimer",
        "💰📉📝": "Poor Things",
        "🚷🎢📝": "The Zone of Interest"
    },
    "Best Writing (Original Screenplay)": {
        "🩺🍂📝": "Anatomy of a Fall",
        "🚗🔙📝": "The Holdovers",
        "🎼📝": "Maestro",
        "📅❄️📝": "May December",
        "🕰️👤📝": "Past Lives"
    }
};

export default categories;
