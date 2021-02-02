import { useState } from 'react';
import './App.css';
import TextInput from './Textinput';

function App() {
  const [messages,setMessages] = useState([{text:'hello'}])
  return <div className="App">
    
    <header className="header">
      <div className="logo" />
      CHATTER
    </header>

    <div className="message">
      {messages[0].text}
    </div>

    <TextInput 
      send={(t)=> setMessages([{text:t}])}
    />

  </div>
}
export default App;