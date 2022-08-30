// ARRAY OF FAMOUS QUOTES
const quotes = [
    {
        name: "Isaac Newton",
        quote: "I seem to have been only like a boy playing on the seashore, and diverting myself in now and then finding a smoother pebble or a prettier shell than ordinary, whilst the great ocean of truth lay all undiscovered before me."
    },

    {
        name: "Albert Einstein",
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
    },

    {
        name: "Fred Hoyle",
        quote: "Life cannot have had a random beginning ... The trouble is that there are about 2000 enzymes, and the chance of obtaining them all in a random trial is only one part in 10^40,000, an outrageously small probability that could not be faced even if the whole universe consisted of organic soup."
    },

    {
        name: "Georg C. Lichtenberg",
        quote: " It is strange that only extraordinary men make the discoveries, which later appear so easy and simple."
    },

    {
        name: "Nicolaus Copernicus",
        quote: "There may be babblers, wholly ignorant of mathematics, who dare to condemn my hypothesis, upon the authority of some part of the Bible twisted to suit their purpose. I value them not, and scorn their unfounded judgment."
    },

    {
        name: "John Archibald Wheeler",
        quote: "There is no law except the law that there is no law."
    },

    {
        name: "Stephen Jay Gould",
        quote: "We pass through this world but once. Few tragedies can be more extensive than the stunting of life, few injustices deeper than the denial of an opportunity to strive or even to hope, by a limit imposed from without, but falsely identified as lying within."
    }, 

    {
        name: "Thomas Chrowder Chamberlin",
        quote: "Falsity in intellectual action is intellectual immorality."
    },

    {
        name: "Subrahmanyan Chandrasekhar",
        quote: "The black holes of nature are the most perfect macroscopic objects there are in the universe: the only elements in their construction are our concepts of space and time."
    }, 

    {
        name: "Isaac Asimov",
        quote: "The saddest aspect of life right now is that gathers knowledge faster than society gathers wisdom."
    },

    {
        name: "Albert Eintein",
        quote: "Science without religion is lame, religion without science is blind."
    },

    {
        name: "Charles Darwin",
        quote: "A man who dares to waste one hour of time has not discovered the value of life."
    },

    {
        name: "Marie Curie",
        quote: "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less."
    },

    {
        name: "Galileo Galilei",
        quote: "You cannot teach a man anything; you can only help him discover it in himself."
    },

    {
        name: "Isaac Newton",
        quote: "If I have seen further it is by standing on the shoulders of Giants."
    },

    {
        name: "Stephen Hawking",
        quote: "One, remember to look up at the stars and not down at your feet. Two, never give up work. Work gives you meaning and purpose and life is empty without it. Three, if you are lucky enough to find love, remember it is there and don't throw it away."
    }
]

// REFERNCES FOR DOM MANIPULATION
const quoteBtn = document.querySelector('#quote-btn');
const quote = document.querySelector('#quote');
const quoteAuthor = document.querySelector('#quote-author');

quoteBtn.addEventListener('click', () => {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    // console.log(quotes[randomNumber]);
    quote.innerHTML = quotes[randomNumber].quote;
    quoteAuthor.innerHTML = quotes[randomNumber].name;
})