import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FriendList from '../FriendList/FriendList';
import './Friends.css'

const Friends = () => {
    let data = useLoaderData();
    console.log(data);
    return (
        <div >
            <div >
            {
                
                data.map(d=> <FriendList list={d} key={d.id} ></FriendList> )
            }

            </div>
           
        </div>
    );
};

export default Friends;