import React, {FC} from 'react';
import {UserListType} from "../../types";

import styles from "./userList.module.scss"

const UserList: FC<UserListType> = ({users}) => {
    return (
        <div className={styles.list}>
            {users.map(item => (
                <div key={item.id} className={styles.item}>
                    {item.id}. {item.name} live in city {item.address.city} on street {item.address.street}
                </div>
            ))}
        </div>
    );
};

export default UserList;