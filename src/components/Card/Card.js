import React from 'react';
import './Card.css';

const Card = (props) => (
  <div className="Card">
    <img src={"./assets/img/"+props.article.img} alt={props.article.name} />
    <div className='triche'>
      <span className='nom'>{props.article.name}</span>
      <span className='prix'>{props.article.price} €</span>
    </div>
    <div className='descr'>{props.article.description}</div>
    <div className='qte'>Disponibles : {props.article.qte}</div>
    <p className='cardButton'><button className='buy' onClick={()=>props.decrementQte(props.article.id)}>Buy Now !</button></p>
  </div>
);

export default Card;
