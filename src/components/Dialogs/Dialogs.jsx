import React from "react";
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map((d) =>
        <DialogItem id={d.id} name={d.name} avatar={d.avatar}/>);

    let messagesElements = props.state.messages.map((m) =>
        <Message message={m.message}/>);

    let myMessagesElements = props.state.myMessages.map((m) =>
        <Message message={m.message}/>);

    let newMessageElement = React.createRef();
    let sendMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>{messagesElements}</div>
                <div className={styles.myMessage}>{myMessagesElements}</div>
                <div className={styles.messageInput}>
                    <textarea rows="1" cols="50" placeholder="Enter your message" ref={newMessageElement}/>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs