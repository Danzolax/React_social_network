import React from "react";
import styles from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {


    let dialogsElements = props.dialogs.map((d) => <DialogItem id={d.id} name={d.name}/>);
    let messagesElements = props.messages.map((m) => <Message message={m.message}/>);

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs