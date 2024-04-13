var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//Import HTML elements into variables.
const Display = document.getElementById("display");
const JokeButton = document.getElementById("jokeBtn");
const url = "https://icanhazdadjoke.com";
// Fetch Joke -
// Display the fetched joke
// Onload - display random joke
if (JokeButton) {
    JokeButton.addEventListener("click", () => {
        getJoke();
    });
}
getJoke();
function getJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url, {
            headers: {
                Accept: "application/json"
            }
        });
        if (!response.ok) {
            throw new Error(`Could not find joke: ${response.status}`);
        }
        const jokeData = yield response.json();
        if (Display) {
            Display.innerText = jokeData.joke;
        }
    });
}
export {};
