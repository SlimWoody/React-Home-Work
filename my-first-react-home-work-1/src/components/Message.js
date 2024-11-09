import '../style/Message.css'
function Message({userName, message}) {
    return ( 
        <div className='message__box'>
            <h2 className="message__title">Привет {userName}</h2>
            <p className="message__text">{message}</p>
        </div>
    );
}

export default Message;