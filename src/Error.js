import React from 'react';
import { Button } from 'react-bootstrap';

const Error = () => {
    return (
        <div>
            <center>
            <h3>Hoops vous faites erreur</h3>
            <Button variant='warning' onClick={()=>window.location="/"}>Home</Button>
            </center>
        </div>
    );
};

export default Error;