import React from "react"
import styles from './Users.module.css'

const Users = (props) => {

    if(props.users.length === 0){
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://sun2-3.userapi.com/c855128/v855128129/1fef77/VBLarYUiu-Q.jpg',
                followed: true,
                fullName: 'Dmitriy',
                status: 'hello bitches',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 2,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/John_Cena_2012.jpg',
                followed: false,
                fullName: 'Jhon',
                status: 'yo',
                location: {city: 'New York', country: 'USA'}
            },
            {
                id: 3,
                photoUrl: 'http://loveopium.ru/content/2011/04/4e5747a57833_E209/31.jpg',
                followed: true,
                fullName: 'Allah',
                status: 'bless ukraine!!!',
                location: {city: 'Donbass', country: 'Ukraine'}
            },
        ])
    }

    return (
        <div>
            {
                props.users.map((u) => <div key={u.id}>
                    <span>
                        <div className={styles.avatar}>
                            <img src={u.photoUrl} alt="ssss"/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div><div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                           <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;