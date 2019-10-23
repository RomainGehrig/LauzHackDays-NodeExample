# Prerequisites
- [ ] A GitHub account
- [ ] A Git client
- [ ] A terminal and [`node/npm`](https://www.npmjs.com/get-npm) installed

# An example server in written in Node
Start by forking the repo to your own account. This way you can make changes to your own copy.

Then clone your _own_ repo locally with `git clone git@github.com:YourGithubAccount/WhereIsTheFood`. Go into the directory with `cd WhereIsTheFood` and install the dependencies with `npm install` (only NodeJS for the moment).

You can now run the server with the command `npm start`. To stop the server, press `CTRL+C`.

# Simple exercises:
## API:
- [ ] Save the user/text sent by the frontend in the POST body, look for the TODO in `api.js`
- [ ] Only return the last 10 comments in the API
- [ ] Return a count of the total number of comments

## Frontend:
- [ ] Refresh comments every 2 seconds instead of only when the page is loaded.
- [ ] Display the total number of comments
- [ ] Let the user set a name when posting a comment

## Backend setup:
- [ ] Add a favicon
- [ ] Install [`nodemon`](https://github.com/remy/nodemon#nodemon) as a development dependency and use it to run your server. It should reload the server when it sees a changes in one of the Javascript (backend) files.
- [ ] Install `pm2` globally on your server (with `sudo npm -g install pm2`) to start processes in the background, meaning you can close the SSH connection and the website will still work!

# More involved exercises
To implement one of theses exercises may take you less than an hour if you are familiar with it and more if you aren't. They are good exercises for hackathon projects!

- Save the comments in a database
- Add a Javascript frontend framework like VueJS / React / ...
- Create an account system so the user can login an post with their name
- Use TypeScript for the backend. Or go even further away and rewrite the backend in a different language/environment, like Scala, Go, Haskell,...

# Testing the API

To test the functionality of your API without the frontend, you can manually create a query and observe the server response. For instance, if you have installed [HTTPie](https://httpie.org/) – which I recommend as a simpler alternative to `curl` – you can test the ability to post a comment with a username using the command: (replace `localhost` with your server address if you are your remote server).

```
http --json POST localhost:8001/api/comments user="Romain" text="I've heard that pizza is coming :D"
```
