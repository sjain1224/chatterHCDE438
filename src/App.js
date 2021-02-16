import { useState } from 'react'
import './App.css'
import TextInput from './Textinput'
import Message from './Message'
import NamePicker from './NamePicker'
import {db, useDB} from './db'
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Wrap () {
  return <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/:room" component={App} />
    </Switch>
  </BrowserRouter>
}

function App(props) {

  const room = props.match.params.room || 'home'

  //const [messages,setMessages] = useState([])
  const messages = useDB(room)
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
      send={(t)=> db.send({text:t, name:username, date:new Date(), room})}
    />

  </div>
}
export default Wrap;