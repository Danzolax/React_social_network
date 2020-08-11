import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
    let postsElements = props.posts.map((p) => <Post message={p.message} likes={p.likes}/>)
    return (
        <div className={styles.postsBlock}>
            <div>
                <h3 className={styles.header}>My Posts</h3>
                <div>
                    <div>
                        <textarea id="" cols="30" rows="5"/>
                    </div>
                    <div>
                        <button>add post</button>
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
