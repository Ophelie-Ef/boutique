import React from 'react';
import BoutiqueContext from '../../contexts/BoutiqueContext';
import './Achat.css';

const Achat = (props) => {
    let id = props.id;
    const boutiqueContext = React.useContext(BoutiqueContext);
    let article = boutiqueContext.articles[id];
    return (
        <div className='purchase'>
            <div className='artclImg'><img src={"./assets/img/"+article.img} alt="404 image not found !" /></div>
            <div className='artclName'>{article.name}</div>
            <div>
                <div>
                    <p>Quantité :
                        <span className='plusButton'>
                            <button className='plus' >+</button>
                        </span>
                        <span className='arclQte'>{article.qte}</span>
                        <span className='moinsButton'>
                            <button className='moins' >-</button>
                        </span>
                        </p>
                        </div>
            </div>
            <div className='ssTtPrice'></div>
        </div>
    )
}

export default Achat;