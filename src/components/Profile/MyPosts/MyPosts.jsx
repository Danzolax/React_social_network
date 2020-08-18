import React from "react"
import styles from './MyPosts.module.css'
import Post from "./Post/Post"





const MyPosts = (props) => {
    let postsElements = props.posts.map((p) => <Post message={p.message} likes={p.likes}/>)
    let newPostElement = React.createRef()
    let onAddPost = () =>{
        props.addPost()
    }

    let onPostChange = () =>{
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={styles.postsBlock}>
            <div>
                <h3 className={styles.header}>My Posts</h3>
                <div>
                    <div>
                        <textarea onChange={onPostChange} ref={newPostElement} cols="30" rows="5" value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={onAddPost}>add post</button>
                    </div>
                </div>
            </div>
            <div className={styles.post}>
                {postsElements}
            </div>
        </div>

    );
}

export default MyPosts;
