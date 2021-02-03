import { useState } from 'react';
import { FiSend } from 'react-icons/fi';

function TextInput(props) {
    const [text, setText] = useState('');

    function sendMessage(){
        if(text==='') return
        props.send(text)
        setText('')
    }

    function keyPressed(e) {
        if(e.key==='Enter'){
            sendMessage()
        }
    }

    return <footer className="text-input">
        <input 
            placeholder="Let's Chat!"
            value={text}
            onChange={e=> setText(e.target.value)}
            onKeyPress={keyPressed}
            className="input-bar"
        />
        <button
            className ="send-btn" 
            onClick={sendMessage} disabled={!text}>
            <FiSend color="white" title="send"
                style={{minWidth:'1rem', marginRight:1}} />
        </button>
    </footer>
}

export default TextInput