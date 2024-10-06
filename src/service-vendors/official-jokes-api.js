// This function fetches jokes from the official-jokes-api. Total Number of jokes fetched is equal to the number passed to it as parameter.

async function getJokes(num) {
  console.log("Fetching Jokes from Jokes API");

  let link = `https://official-joke-api.appspot.com/jokes/random/${num || 2}`;
  console.log(link);
  let response = await fetch(link);
  let data = await response.json();
  let jokes = new Array();
  for (let i = 0; i < data.length; i++) {
    jokes.push(data[i].setup + " " + data[i].punchline);
  }
  return jokes;
}

export default getJokes;
