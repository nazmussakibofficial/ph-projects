import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../../components/Header/Header';
import User from './User/User';

const About = () => {
    const users = useLoaderData();
    return (
        <div>
            {users.map(user => <User key={user.id} user={user}></User>)}
        </div>
    );
};

export default About;