import { productivityQuotes } from "../assets/quotes";

export function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

export function getRandomQuote() {
  return productivityQuotes[getRandomNumber(productivityQuotes.length)];
}
