import { productivityQuotes } from "../assets/quotes";

export function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

export function getRandomQuote() {
  return productivityQuotes[getRandomNumber(productivityQuotes.length)];
}

export function getFirstLetters(str, numLetters) {
  try {
    const words = str.trim().split(/\s+/);

    const firstLetters = words.map((word) => word[0].toUpperCase()).join("");

    return firstLetters.slice(0, numLetters).toUpperCase();
  } catch (error) {
    console.error(error.message);
    return "";
  }
}
