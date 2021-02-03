import { useState } from 'react';
import './App.css';
import TextInput from './Textinput';
import Message from './Message';

function App() {
  const [messages,setMessages] = useState([])
  return <div className="App">
    
    <header className="header">
      <div className="logo" />
      Chatter
    </header>

    <main className="view-messages">

      {messages.map((m,i)=> {
        return <Message key={i} {...m} />
      })}
      
    </main>

    <TextInput 
      send={(t)=> setMessages(
        [{text:t}, ...messages]
      )}
    />

  </div>
}
export default App;