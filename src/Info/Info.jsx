import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Infos = () => {
    let info = useLoaderData();
    console.log(info);
    let {name}= info

    let navigate = useNavigate();

    let goBack= ()=>{
        navigate(-1);
    }
    

    return (
        <div>
            <h2>Friend info</h2>
            <h2>{name}</h2>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
};

export default Infos;