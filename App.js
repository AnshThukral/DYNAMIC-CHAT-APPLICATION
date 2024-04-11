
import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = 'c1d36644-d8fb-4226-86de-f35d78c18637';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      onConnect={(creds) => console.log(creds)}
                    onFailAuth={(props) => console.log(props)}
                    onNewChat={(chat) => console.log(chat)}
                    onEditChat={(chat) => console.log(chat)}
                    onDeleteChat={(chat) => console.log(chat)}
                    //onNewMessage={(chatId, message) => console.log(chatId, message)}
                    onEditMessage={(chatId, message) => console.log(chatId, message)}
                    onDeleteMessage={(chatId, message) => console.log(chatId, message)}
                    onDisconnect={() => console.log("Disconnected from chat")}
                    onUserJoin={(user) => console.log(`${user.username} joined the chat`)}
                    onUserLeave={(user) => console.log(`${user.username} left the chat`)}
                    onMessageReceived={(chatId, message) => console.log(`New message received in chat ${chatId}:`, message)}
                    onMessageSent={(chatId, message) => console.log(`Message sent in chat ${chatId}:`, message)}
                    onTypingStart={(chatId, user) => console.log(`${user.username} started typing in chat ${chatId}`)}
                    onTypingStop={(chatId, user) => console.log(`${user.username} stopped typing in chat ${chatId}`)}
                    onError={(error) => console.error("Error occurred:", error)}
                    onConnectionEstablished={() => console.log("Connection to chat server established")}
                    onConnectionLost={() => console.log("Connection to chat server lost")}
                    onReconnectAttempt={() => console.log("Attempting to reconnect to chat server")}
                    onReconnectSuccess={() => console.log("Successfully reconnected to chat server")}
                    onReconnectFailed={() => console.log("Failed to reconnect to chat server")}
                    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
                    onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;

