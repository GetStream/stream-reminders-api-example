import React, {useEffect, useState} from 'react';
import {StreamChat} from 'stream-chat';
import {
    Chat,
    Channel,
    ChannelHeader,
    ChannelList,
    LoadingIndicator,
    MessageInput,
    MessageList,
    Thread,
    Window,
} from 'stream-chat-react';

import 'stream-chat-react/dist/css/index.css';

const tessToken = process.env.REACT_APP_TESS_TOKEN;
const nashToken = process.env.REACT_APP_NASH_TOKEN;
const runningUser = process.env.USER;

const filters = {type: 'messaging', members: {$in: [runningUser === 'nash' ? 'nash' : 'tess']}};
const sort = {last_message_at: -1};

const App = () => {
    const [chatClient, setChatClient] = useState(null);

    useEffect(() => {
        const initChat = async () => {
            const client = StreamChat.getInstance(process.env.REACT_APP_API_KEY);

            if (process.env.USER === 'nash') {
                await client.connectUser(
                    {
                        id: 'nash',
                    },
                    nashToken,
                );
            } else {
                await client.connectUser(
                    {
                        id: 'tess',
                        email: "tess@getstream.io"
                    },
                    tessToken,
                );
            }
            setChatClient(client);
        };

        initChat();
    }, []);


    if (!chatClient) {
        return <LoadingIndicator/>;
    }


    return (
        <Chat client={chatClient} theme='messaging light'>
            <ChannelList filters={filters} sort={sort}/>
            <Channel>
                <Window>
                    <ChannelHeader/>
                    <MessageList/>
                    <MessageInput/>
                </Window>
                <Thread/>
            </Channel>
        </Chat>
    );
};

export default App;