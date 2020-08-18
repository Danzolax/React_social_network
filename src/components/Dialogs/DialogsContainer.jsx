import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState()

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (text) => {
        props.store.dispatch(updateNewMessageBodyCreator(text))
    }

    return (<Dialogs sendMessage={onSendMessageClick}
                     updateNewMessageBody={onNewMessageChange}
                     dialogsPage={state.dialogsPage}/>)
}

export default DialogsContainer