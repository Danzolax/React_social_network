const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogs: [
        {
            id: 1,
            name: "Egorov",
            avatar: "https://sun9-55.userapi.com/c850636/v850636328/12b136/sX_yKODuCjA.jpg"
        },
        {id: 2, name: "Zhilin", avatar: "https://sun9-34.userapi.com/c855728/v855728894/3c1b8/5Fr0nlCIrDQ.jpg"},
        {
            id: 3,
            name: "Zolotarev",
            avatar: "https://sun9-25.userapi.com/c624421/v624421012/31334/pdUeIYpFK0c.jpg"
        },
    ],
    messages: [
        {id: 1, message: "yosssssssssssssssssss"},
        {id: 2, message: "hi"},
        {id: 3, message: "dude"},
    ],
    newMessageBody: "",
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body
            }
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}],
            }
        }
        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, body: text})

export default dialogsReducer