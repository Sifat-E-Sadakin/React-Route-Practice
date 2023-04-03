import React from 'react';
import './FriendList.css'
import { Link } from 'react-router-dom';

const FriendList = (props) => {
    
    let {name, email, id}= props.list
    return (
        <div >
            <div className='friends'>

            <h3>{name}</h3>
            <h4>{email}</h4>
            <Link to={`/infos/${id}`}>Info</Link>
            </div>
            
            
        </div>
    );
};

export default FriendList;