import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            <div>
                My posts
                <div>
                    <textarea  id="" cols="30" rows="5"/>
                    <button>add post</button>
                </div>
            </div>
            <div className="posts">
                <Post message="My first post" likes="4" />
                <Post message="My second post" likes="1" />
            </div>
        </div>

    );
}

export default MyPosts;
