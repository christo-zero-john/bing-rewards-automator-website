Create a project plan for Bing Search automator website with reference to the chrom extension @https://chromewebstore.google.com/detail/eanofdhdfbcalhflpbdipkjjkoimeeod . The website works like this.

- Some user goes to the website.
- The website has an iframe that is loaded with the bing search results for some search term.
- The user has already logged in to his microsoft account in the browser, hence the iframe also has his login information.
- The search term is derived from official-joke-api, which gives some random jokes.
- There are two input boxes search count and search delay with minimum value of: search count- 1 search delay - 10 seconds.
- When a user clicks on the start button in the website, the automator starts.
- The automator runs in the background and performs the following tasks:
  - It selects the search count and search delay value entered by the user.
  - It fetches `search count` number of jokes from official-joke-api and converts them to search terms.
  - It changes the src of the iframe to the bing search results page for the search term.
  - It waits for the `search delay` time (in seconds), and continues the loop, for all the jokes fetched.
  - It also counts the number of points accumulated, and displays the same on the top right corner of the website.
  - The user can click on the start button again to start the automator again.

Tools used:
`Front end`: react, tailwind
`Backend`: No backend needed.
