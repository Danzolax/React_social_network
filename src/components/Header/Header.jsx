import React from "react";
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <img
                src="http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19759.png"
                alt=""
            />
        </header>
    );
};

export default Header;
