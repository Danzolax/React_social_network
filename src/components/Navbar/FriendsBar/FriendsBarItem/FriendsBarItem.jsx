import React from "react";
import styles from "./FriendsBarItem.module.css"

const FriendsBarItem = (props) => {
    return (
        <div className={styles.item}>
            <img src={props.state.avatar} alt="bla"/>
            <div>{props.state.name}</div>
        </div>
    );
}

export default FriendsBarItem;