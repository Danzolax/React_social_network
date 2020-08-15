import React from "react"
import styles from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom"

const DialogItem = (props) => {
    return (
        <div className={styles.dialog}>
            <img src={props.avatar} alt="bla"/>
            <NavLink to={"/dialogs/" + props.id} activeClassName={styles.active}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem