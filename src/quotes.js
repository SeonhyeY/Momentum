const quotes = [
  {
    quote: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
  },
  {
    quote: 'Be the change that you wish to see in the world.',
    author: 'Mahatma Gandhi',
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: 'Albert Einstein',
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: 'Robert Frost',
  },
  {
    quote:
      'The future belongs to those who believe in the beauty of their dreams.',
    author: 'Eleanor Roosevelt',
  },
  {
    quote:
      'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
    author: 'Ralph Waldo Emerson',
  },
  {
    quote:
      'The only thing necessary for the triumph of evil is for good men to do nothing.',
    author: 'Edmund Burke',
  },
  {
    quote: 'The only true wisdom is in knowing you know nothing.',
    author: 'Socrates',
  },
  {
    quote: 'It does not matter how slowly you go as long as you do not stop.',
    author: 'Confucius',
  },
  {
    quote:
      'Success is not final, failure is not fatal: It is the courage to continue that counts.',
    author: 'Winston Churchill',
  },
];

const quote = document.querySelector('.quote__text');
const author = document.querySelector('.quote__author');
const quoteIndex = Math.floor(Math.random() * quotes.length);

quote.innerHTML = quotes[quoteIndex].quote;
author.innerHTML = quotes[quoteIndex].author;
