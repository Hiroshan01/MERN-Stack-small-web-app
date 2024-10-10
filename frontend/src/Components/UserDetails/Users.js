import React, { useEffect, useState } from 'react';
import axios from "axios";
import User from '../AddUser/User';
import Nav from '../Nav/Nav';

const URL = "http://localhost:5000/users";

const fetchhandler = async () => {
    return await axios.get(URL).then((res) => res.data);
}

function Users() {
    const [users, setUser] = useState([]);

    useEffect(() => {
        fetchhandler().then((data) => setUser(data.users));
    }, []);

    return (
        <div>
            <Nav/>
            <h1>Users Details Display</h1>
            <div>
                {users && users.map((user, i) => (
                    <div key={i}> {/* Use 'i' as the key */}
                        <User user={user} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Users;
