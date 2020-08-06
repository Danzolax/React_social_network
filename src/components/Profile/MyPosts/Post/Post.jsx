import React from "react";
import styles from './Post.module.css';

const Post = (props) =>{
    return(
        <div className={styles.item}>
            <img src="https://www.uni-regensburg.de/Fakultaeten/phil_Fak_II/Psychologie/Psy_II/beautycheck/english/prototypen/m_unsexy_gr.jpg" alt=""/>
            <text> {props.message}</text>
            <div>
                <span>{props.likes}</span>
                <span role="img" >💙</span>
            </div>
        </div>
    );
}

export default Post;