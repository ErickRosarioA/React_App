import React from 'react';
import './style/AddButton.css';
import {Link} from  'react-router-dom';
// array fuction new code in java script
//version vieja fuction nombre de la fuction return codigo html 
const AddExercie =(props)=> (
    <Link to="/insert/exercice">
    <img className="buttonClass" src='https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/add.png?alt=media&token=fbe1d973-4b4f-42d8-b76e-2c4354f6ed9d'/>
    </Link>
);

export default AddExercie;