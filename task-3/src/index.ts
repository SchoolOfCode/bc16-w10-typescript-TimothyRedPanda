//Import HTML elements into variables.
const Display : HTMLElement | null = document.getElementById("display");
const JokeButton : HTMLElement | null = document.getElementById("jokeBtn");
const url : string = "https://icanhazdadjoke.com"
// Fetch Joke -

// Display the fetched joke
// Onload - display random joke
if (JokeButton) {
    JokeButton.addEventListener("click", () => {
        getJoke()
    });
}

getJoke()

async function getJoke() {
    const response = await fetch(url, {
        headers: {
            Accept: "application/json"
        }
    })
    if (!response.ok) {
        throw new Error(`Could not find joke: ${response.status}`);
    }
    const jokeData = await response.json();
    if(Display){
        Display.innerText = jokeData.joke;
    }
}
