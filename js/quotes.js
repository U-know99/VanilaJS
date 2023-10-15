const quotes = [
  {
    quote: "이봐, 해봤어?",
    author: "정주영",
    image: "img/0.jpeg",
  },
  {
    quote: "See you on the next one. Bye Bye",
    author: "Nicolas Serrano Arevalo",
    image: "img/4.jpeg",
  },
  {
    quote: "언제나 감사하고 싸랑합니다",
    author: "Nicolas Serrano Arevalo",
    image: "img/3.jpeg",
  },
  {
    quote: "Don't for get to eat kimchi",
    author: "Nicolas Serrano Arevalo",
    image: "img/1.jpeg",
  },
  {
    quote: "화성 갈끄니까~~~!",
    author: "Elon Musk",
    image: "img/2.jpeg",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const authorImage = document.querySelector("#author-image");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
authorImage.src = todaysQuote.image;
console.log(author);
console.log(authorImage);
