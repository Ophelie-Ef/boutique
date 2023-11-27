import React from 'react';
import './ListMenu.css';
import Panier from '../Panier/Panier';

const ListMenu = (props) => {
  return (
    <ul className="ListMenu">
      {
        props.sendEntries.map((value, index) => {
          return (
            <li
              onClick={
                value.entry === "Panier" ? props.handleDisplayPanier : null
              }
              key={index} >{value.entry}</li>
          )
        })
      }
    </ul>
  )
};

export default ListMenu;