import React from "react";
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMyMessageActionCreator, updateNewMyMessageTextActionCreator} from "../../redux/state";


const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map((d) =>
        <DialogItem id={d.id} name={d.name} avatar={d.avatar}/>);

    let messagesElements = props.dialogsPage.messages.map((m) =>
        <Message message={m.message}/>);

    let myMessagesElements = props.dialogsPage.myMessages.map((m) =>
        <Message message={m.message}/>);

    let newMessageElement = React.createRef();
    let sendMessage = () => {
        props.dispatch(addMyMessageActionCreator());
    }

    let onMessageChange = () =>{
        let text = newMessageElement.current.value
        props.dispatch(updateNewMyMessageTextActionCreator(text))
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
                    <textarea onChange={onMessageChange} rows="1" cols="50" value={props.dialogsPage.newMyMessageText} ref={newMessageElement}/>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs