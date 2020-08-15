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
            myMessages: [
                {id: 1, message: "sada"},
                {id: 2, message: "fghs"},
                {id: 3, message: "fgwqr"},

            ],
        },
        profilePage: {
            posts: [
                {id: 1, message: "My first post", likes: 4},
                {id: 2, message: "My second post", likes: 3},
                {id: 3, message: "My third post", likes: 8},
            ],
            newPostText: "Zolax",
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
    getState(){
        return this._state
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likes: 0,
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
}



export default store
window.store = store