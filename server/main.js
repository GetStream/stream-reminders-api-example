import dotenv from 'dotenv';
import {StreamChat} from 'stream-chat';
import express from 'express';
import bodyParser from 'body-parser';

import mail from "@sendgrid/mail";

import cors from 'cors';

dotenv.config();
mail.setApiKey(process.env.SENDGRID_API_KEY)

const client = StreamChat.getInstance(process.env.API_KEY, process.env.API_KEY_SECRET);
const app = express();

app.use(bodyParser.json());
app.use(cors());


// Set the interval in seconds for triggering reminder events
// The minimum time is 60 seconds or 1 minute
await client.updateAppSettings({reminders_interval: 60});

// Enable reminders on the "messaging" channel type
await client.updateChannelType('messaging', {
    reminders: true,
    read_events: true,
});

app.post('/stream-event', (request, response, next) => {
    if (request.body.type === "user.unread_message_reminder") {
        console.log(request.body);
        const user = request.body.user;

        const msg = {
            to: user.email,
            from: "YOUR VERIFIED SENDGRID SENDER", // Change to your verified sender
            subject: 'You have messages!',
            text:  `You have ${user.unread_count} unread messages.`,
            html: `<strong> You have ${user.unread_count} unread messages</strong>.`,
        }
        mail
            .send(msg)
            .then(() => {
                console.log('Email sent')
            })
            .catch((error) => {
                console.error(error)
            })

    } else {
        console.log(request.body.user);
        next();
    }
});


const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));