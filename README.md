# An example server in written in Node
Install by cloning the repo and then `npm install` to install the dependencies (only NodeJS for the moment)

Run the code with `npm start`

# Simple exercises:
## Backend:
- [ ] Save the user/text sent by the frontend in the POST body, look for the TODO in `api.js`
- [ ] Only return the last 10 comments in the API
- [ ] Return a count of the total number of comments

## Frontend:
- [ ] Refresh comments every 2 seconds instead of only when the page is loaded.
- [ ] Display the total number of comments
- [ ] Let the user set a name when posting a comment

# More involved exercises
To implement one of theses exercises may take you less than an hour if you are familiar with it and more if you aren't. They are good exercises for hackathon projects!

- Add a Javascript frontend framework like VueJS / React / ...
- Save comments in a database
- Create an account system so the user can login an post with their name
- Use TypeScript for the backend. Or go even further away and rewrite the backend in a different language/environment, like Scala, Go, Haskell,...

# Testing the API

To test the functionality of your API without the frontend, you can manually create a query and observe the server response. For instance, if you have installed [HTTPie](https://httpie.org/) – which I recommend as a simpler alternative to `curl` – you can test the ability to post a comment with a username using the command: (replace `localhost` with your server address if you are your remote server).

```
http --json POST localhost:8001/api/comments user="Romain" text="I've heard that pizza is coming :D"
```
