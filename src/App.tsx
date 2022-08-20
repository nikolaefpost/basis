import React, {useEffect, useState} from 'react';
import Card from "./components/card";
import {CardVariant,  UserType} from "./types";

import styles from "./app.module.scss"
import UserList from "./components/userList";
import axios from "axios";


const App:React.FC = () =>{

    const [users, setUsers] = useState<UserType[]>()

    const fetchUsers = async () => {
      try {
          const response = await axios.get<UserType[]>("https://jsonplaceholder.typicode.com/users")
          setUsers(response.data)
      }
      catch(e) {
          console.log(e)
      }
    }

    useEffect(()=>{
        fetchUsers()
    }, [])
  return (
    <div className={styles.content}>
        <Card width="300px" variant={CardVariant.primary}>
            <h2>My card</h2>
        </Card>
        {users && <UserList users={users}/>}
    </div>
  );
}

export default App;