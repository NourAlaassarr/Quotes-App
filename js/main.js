var QuoteArray = [
    {
        "Quote": "“Be yourself; everyone else is already taken.”",
        "Author": "Oscar Wilde"
    },
    {
        "Quote": "“So many books, so little time.”",
        "Author": "Frank Zappa"
    },
    {
        "Quote": "“A room without books is like a body without a soul.”",
        "Author": "Marcus Tullius Cicero"
    },
    {
        "Quote": "“You only live once, but if you do it right, once is enough.”",
        "Author": "Mae West"
    },
    {
        "Quote": "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        "Author": "Dr. Seuss"
    }
];

function GenerateQuote() {
    var Cartoona = `<h2 class=" fw-medium">${QuoteArray[Math.floor(Math.random() * QuoteArray.length)].Quote}</h2>
    <h4 class=" fw-medium">--${QuoteArray[Math.floor(Math.random() * QuoteArray.length)].Author}</h4>`;
    document.getElementById("Quote").innerHTML = Cartoona;
}