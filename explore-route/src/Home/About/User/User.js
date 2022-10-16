import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
    return (
        <div>
            Name:{user.name}
            Email:{user.email}
            Username: <Link to={`/user/${user.id}`}>{user.username}</Link>
        </div>
    );
};

export default User;