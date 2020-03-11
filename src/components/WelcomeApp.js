import React from 'react'
import './style/Welcome.css';
function Welcome(props){
    return(
        <div className="container">
            <div className="Fitness-User-Info">
                <h1>{props.username}</h1>
                <p>Este es un mensaje para el user app</p>
            </div>        
        </div>
    )
}

export default Welcome;