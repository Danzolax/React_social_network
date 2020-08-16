import React from "react";
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";


const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map((d) =>
        <DialogItem id={d.id} name={d.name} avatar={d.avatar}/>);

    let messagesElements = props.dialogsPage.messages.map((m) =>
        <Message message={m.message}/>);

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator());
    }

    let onMessageChange = (event) => {
        let text = event.target.value;
        props.dispatch(updateNewMessageBodyCreator(text))
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>{messagesElements}</div>
                <div className={styles.messageInput}>
                    <div>
                        <textarea placeholder="Enter your message" onChange={onMessageChange} rows="1" cols="50"
                                  value={props.dialogsPage.newMessageBody}
                                  />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs