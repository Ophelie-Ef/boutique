import Achat from "../Achat/Achat"
import './Panier.css';

const Panier = (props) => {
    return (
        <div className='backgroundPanier'>
            <div className='panier'>
                <div className='close' onClick={props.handleDisplayPanier}>X</div>
                <h2>Vos achats :</h2>
                {
                    props.achat.map(
                        (value,index)=><Achat id={value} key={index}></Achat>
                    )
                }
            </div>
        </div>
    )
};

export default Panier;