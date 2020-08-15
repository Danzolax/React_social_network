import React from "react";
import styles from "./FriendsBar.module.css"
import FriendsBarItem from "./FriendsBarItem/FriendsBarItem"





const FriendBar = (props) => {
    let friendBarItems = props.state.map((i)=> <FriendsBarItem state={i}/>)
    return(
        <div className={styles.friendBar}>
            <h2>Friends</h2>
            {friendBarItems}
        </div>
    );
}

export default FriendBar;