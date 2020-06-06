import React from 'react';
import styles from './Users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, photoUrl: 'https://bm.img.com.ua/nxs/img/prikol/images/large/1/2/308321_879389.jpg', followed: false, fullName: 'Alexey', status: 'I am a front-end Reac.js developer', location: { city: 'Charkov', country: 'Ukraine' } },
            { id: 2, photoUrl: 'https://bm.img.com.ua/nxs/img/prikol/images/large/1/2/308321_879389.jpg', followed: true, fullName: 'Jaryck', status: 'I am a medic', location: { city: 'Pinsk', country: 'Belarus' } },
            { id: 3, photoUrl: 'https://bm.img.com.ua/nxs/img/prikol/images/large/1/2/308321_879389.jpg', followed: false, fullName: 'Kostick', status: 'I am a good boy', location: { city: 'Charkov', country: 'Ukraine' } },
            { id: 4, photoUrl: 'https://bm.img.com.ua/nxs/img/prikol/images/large/1/2/308321_879389.jpg', followed: true, fullName: 'Nastya', status: 'I am a good girl', location: { city: 'Charkov', country: 'Ukraine' } },
        ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) } } >Unfollow</button >
                            : <button onClick={() => { props.follow(u.id) } } >Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;