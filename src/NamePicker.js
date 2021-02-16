import { useState } from 'react';
import { BiEdit } from 'react-icons/bi';

function NamePicker(props) {
    const [showInput, setShowInput] = useState(false)
    const [username, setUsername] = useState(localStorage.getItem('username') || '')

    function save(){
        props.saveName(username)
        setShowInput(false)
        localStorage.setItem('username', username)
    }

    if (showInput) {
        return <div className="name-picker">

            <input className="input-name"
                value={username}
                onChange={e=> setUsername(e.target.value)}
            />

            <button className="submit-name"
                onClick={save} disabled={!username}>
                OK
            </button>
        </div>
    }

    return <div className="name-picker">
        <div className="users-name">{username}</div>

        <button className="edit-name"
            onClick={()=>setShowInput(true)}>
            <BiEdit color="white" title="edit"
                style={{minWidth:'1rem', marginRight:1}} />
        </button>

    </div>
}

export default NamePicker