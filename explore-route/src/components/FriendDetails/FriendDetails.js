import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    return (
        <div>
            <h1>Details about: {friend.name}</h1>
            <h2>Call him/her: {friend.phone}</h2>
        </div>
    );
};

export default FriendDetails;