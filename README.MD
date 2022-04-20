<p align="center">
  <img src="https://user-images.githubusercontent.com/25674767/164322697-1a9cf483-08bf-4034-ac66-d813f150da82.gif" alt="UnreadReminders" />
</p>


## Quick Links

- [Register](https://getstream.io/chat/trial/) to get an API key for Stream Chat
- [Tutorial](https://getstream.io/chat/)
- [Chat UI Kit](https://getstream.io/chat/ui-kit/)

## Repo Overview 😎

Stream Reminders is an example project built to demo Stream's newest API.

This project contains two projects, a server implementation `server` and a minimal web frontend `client.`

This application listens for reminder events triggered by Stream's backend and sends an email to the associated user via SendGrid when the event is triggered.

## Requirements 🛠

Before running this project, please ensure you do the following:

- ReactJS 18 and above
- NodeJS and Npm
- Ngrok for HTTP forwarding
- An account with Stream and SendGrid

## Steps to Run Locally 🧑‍💻👩‍💻

- Create a `.env` file for both the server and the client as shown below:
    - Client

        ```jsx
        REACT_APP_API_KEY=
        REACT_APP_NASH_TOKEN=
        REACT_APP_TESS_TOKEN=
        ```

    - Server

        ```jsx
        PORT=
        API_KEY=
        API_KEY_SECRET=
        SENDGRID_API_KEY=
        ```

- Run `npm install --save` in both the `server` and `client` directories
- Open `main.js` under the `server` directory and replace the text “`YOUR VERIFIED SENDGRID SENDER`” with a verified SendGrid email.
- Run the server by executing `npm start` in the `server` directory
- Obtain a public Ngrok URL for your server port but executing `ngrok http YOUR_PORT`
- On Stream’s project dashboard, paste your public Ngrok URL
- Run the client by changing directories to `client` and running `npm start`

> 💡 For testing, you can run two different identities by using `USER='nash' npm start` or `USER='tess' npm start`

- Happy Hacking 🎉

<br/>

## What is Stream?

Stream allows developers to rapidly deploy scalable feeds and chat messaging with an industry-leading 99.999% uptime SLA guarantee. With Stream’s chat components, developers can quickly add chat to their app for a variety of use-cases:

- Livestreams like Twitch or Youtube
- In-Game chat like Overwatch or Fortnite
- Team style chat like Slack
- Messaging style chat like Whatsapp or Facebook’s messenger

