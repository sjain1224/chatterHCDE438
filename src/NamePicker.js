import { useState } from 'react';
import { GrCheckmark } from 'react-icons/gr';
import { BiEdit } from 'react-icons/bi';

function NamePicker() {
    const [showInput, setShowInput] = useState(false)
    const [username, setUsername] = useState('')

    if (showInput) {
        return <div className="name-picker">

            <input className="input-name"
                value={username}
                onChange={e=> setUsername(e.target.value)}
            />

            <button className="submit-name"
                onClick={()=>setShowInput(false)} disabled={!username}>
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