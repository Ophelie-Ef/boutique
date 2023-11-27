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

  const [statePanier, setStatePanier] = React.useState({ 'displayPanier': false });
  const handleDisplayPanier = () => {
    setStatePanier({ 'displayPanier': !statePanier.displayPanier })
    // console.log(statePanier);
  }


  const decrementQte = (id) => {
    //state.article[id].qte--; ==>> ne fonctionnera pas !!!
    //Option 1 (méthode bourrin !):
    if (state.articles[id].qte > 0) {
      let articlesTmp = state.articles;
      articlesTmp[id].qte--;
      setState({
        'articles': articlesTmp,
        //spread operator Option 2 :
        'achat': [...state.achat, id]

      })
    }
  }

  return (
    <BoutiqueContext.Provider value={state}>
      <header>
        <Menu sendEntries={menuentries} handleDisplayPanier={handleDisplayPanier}></Menu>
      </header>
      <main>
        {statePanier.displayPanier ? <Panier handleDisplayPanier={handleDisplayPanier}></Panier> : <></>}
        <Gallery articles={state.articles} decrementQte={decrementQte}></Gallery>
      </main>
      <footer></footer>
    </BoutiqueContext.Provider>
  )
}

export default App;
