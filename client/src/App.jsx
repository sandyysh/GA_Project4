import React from 'react';
import {StreamChat} from 'stream-chat';
import {ChannelActionProvider, ChannelList, Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { ChannelListContainer, ChannelContainer, Auth } from './components';
import './App.css';

const apiKey = 'x5gdjkq4b3hn'

const client = StreamChat.getInstance(apiKey);

const authToken= false; 

const App = () => {

  if(!authToken) return <Auth />

  return (
    <div className='app_wrapper'>
        <Chat client = {client} theme='team light'>
            <ChannelListContainer
            
            />
            <ChannelContainer

            />
        
        </Chat>
    </div>
  )
}

export default App
