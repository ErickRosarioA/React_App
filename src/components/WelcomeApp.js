import React from 'react'
import './style/Welcome.css';

const Welcome = (props)=> (
    <div className="container">
    <div className="Fitness-User-Info">
        <h1>{props.username}</h1>
        <p>Aplicacion para Tecnicas de Ejercicie.</p>
    </div>        
</div>
);
export default Welcome;