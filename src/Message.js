function Message(props){
    return <div className="message-row"
        style={{justifyContent:props.isMe ? 'flex-end':'flex-start'}}>
        <div className="message">
            <div className="message-sender">
                {props.name}
            </div>
            {props.text}
        </div>
    </div>
}

export default Message