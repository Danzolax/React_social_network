import React from "react";
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div className={styles.background}>
                <img
                    alt="bla"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.w3schools.com%2Fhowto%2Fimg_snow_wide.jpg&f=1&nofb=1"
                />
            </div>
            <div>ava + descr</div>
            <MyPosts />

        </div>
    );
};

export default Profile;
