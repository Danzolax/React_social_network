import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import dialogsReducer from "./dialogsReducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)
        this._state.sidebar = sidebarReducer(this._state.sidebar,action)
        this._callSubscriber(this._state)
    },
}





export default store
window.store = store