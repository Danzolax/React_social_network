const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let store = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            posts: [
                {id: 1, message: "My first post", likes: 4},
                {id: 2, message: "My second post", likes: 3},
                {id: 3, message: "My third post", likes: 8},
            ],
            newPostText: "",
        },
        sidebar: {
            friendsBar: [
                {name: "Egorov", avatar: "https://sun9-55.userapi.com/c850636/v850636328/12b136/sX_yKODuCjA.jpg"},
                {name: "Zhilin", avatar: "https://sun9-34.userapi.com/c855728/v855728894/3c1b8/5Fr0nlCIrDQ.jpg"},
                {name: "Zolotarev", avatar: "https://sun9-25.userapi.com/c624421/v624421012/31334/pdUeIYpFK0c.jpg"},
            ],
        },
    },
    _callSubscriber() {
        console.log("state was changed")
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState(){
        return this._state
    },

    dispatch(action){
        if (action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likes: 0,
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        }
        else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.body
            this._callSubscriber(this._state)
        }
        else if (action.type === UPDATE_NEW_MESSAGE_BODY){
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber(this._state)
        }
        else if (action.type === SEND_MESSAGE){
            let body = {
                id: 4,
                message : this._state.dialogsPage.newMessageBody
            }
            this._state.dialogsPage.messages.push(body)
            this._state.dialogsPage.newMessageBody = ''
            this._callSubscriber(this._state)
        }
    },
}

export const addPostActionCreator = () => ({ type: ADD_POST})
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, body: text})
export const sendMessageCreator = () => ({ type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, body: text})


export default store
window.store = store