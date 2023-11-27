import React from 'react';
import Menu from './components/Menu/Menu';
import Gallery from './components/Gallery/Gallery';
import { articles } from './articles';
import { menuentries } from './menuentries';
import Panier from './components/Panier/Panier';
import BoutiqueContext from './contexts/BoutiqueContext';
import './App.css';

const App = () => {
  const [state, setState] = React.useState(
    {
      'articles': articles,
      'achat': []
    }
  )

  const [statePanier, setStatePanier] = React.useState(
    {
      'displayPanier': false
    }
  );

  const decrementQte = (id) => {
    let achatTmp = [];
    if (state.achat.length === 0) {
      achatTmp = [{ 'idachat': id, 'qteachat': 1 }]
    } else {
      achatTmp = state.achat.map((value, index) => {
        if (value.idachat === id) {
          value.qteachat++
        } else {
          value = { 'idachat': id, 'qteachat': 1 }
        }
        return value
      })
    }
    console.dir(achatTmp);
    //state.article[id].qte--; ==>> ne fonctionnera pas !!!
    if (state.articles[id].qte > 0) {
      let articlesTmp = state.articles;
      articlesTmp[id].qte--;
      setState({
        'articles': articlesTmp,
        'achat': achatTmp
      })
    }
  }

  const handleDisplayPanier = () => {
    setStatePanier({ 'displayPanier': !statePanier.displayPanier })
    // console.log(statePanier);
  }

  return (
    <BoutiqueContext.Provider value={{ ...state, 'decrementQte': decrementQte }}>
      <header>
        <Menu sendEntries={menuentries} handleDisplayPanier={handleDisplayPanier}></Menu>
      </header>
      <main>
        {statePanier.displayPanier ? <Panier
          handleDisplayPanier={handleDisplayPanier}
          achat={state.achat}
        ></Panier> : <></>}
        <Gallery articles={state.articles} decrementQte={decrementQte}></Gallery>
      </main>
      <footer></footer>
    </BoutiqueContext.Provider>
  )
}

export default App;
