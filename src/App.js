import { useState } from 'react'
import './App.css'
import TextInput from './Textinput'
import Message from './Message'
import NamePicker from './NamePicker'
import {db, useDB} from './db'

function App() {
  //const [messages,setMessages] = useState([])
  const messages = useDB()
  const [username, setUsername] = useState(localStorage.getItem('username') || '')

  return <div className="App">
    
    <header className="header">
      <div className="logo" />
      Chatter

      <NamePicker saveName={setUsername}/>

    </header>

    <main className="view-messages">

      {messages.map((m,i)=> {
        const isMe = m.name===username
        return <Message key={i} {...m} isMe={isMe}/>
      })}
      
    </main>

    <TextInput 
      //send={(t)=> setMessages([{text:t, name:username, date:new Date()}, ...messages])}
      send={(t)=> db.send({text:t, name:username, date:new Date()})}
    />

  </div>
}
export default App;