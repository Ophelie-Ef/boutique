import React from 'react';
import './Panier.css';

const Panier = (props) => {
    return (
        <div className='backgroundPanier'>
            <div className='panier'>
                <div className='close' onClick={props.handleDisplayPanier}>X</div>
                <h2>Vos achats :</h2>
                
            </div>
        </div>
    )
};

export default Panier;