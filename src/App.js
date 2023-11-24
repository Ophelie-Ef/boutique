import React from 'react';
import Menu from './components/Menu/Menu';
import Gallery from './components/Gallery/Gallery';
import { articles } from './articles';
import { menuentries } from './menuentries';
import { Panier } from './components/Panier/Panier';
import './App.css';

const App = () => {
  const [statePanier, setStatePanier] = React.useState({'displayPanier': false});
  const handleDisplayPanier = () => {
    setStatePanier({'displayPanier':!statePanier.displayPanier})
    console.dir(statePanier.displayPanier);
  }

  const [state, setState] = React.useState({'articles': articles})
  const decrementQte = (id) => {
    //state.article[id].qte--; ==>> ne fonctionnera pas !!!
    //Option 1 (méthode bourrin !):
    if (state.articles[id].qte > 0) {
      let articlesTmp = state.articles;
      articlesTmp[id].qte--;
      setState({
        'articles': articlesTmp
      })
    }
    //Option 2 : .....lundi  
  }

  return (
    <>
      <header>
        <Menu sendEntries={menuentries} handleDisplayPanier={handleDisplayPanier}></Menu>
        {statePanier.displayPanier ? <Panier></Panier> : <></>}
      </header>
      <main>
        <Gallery articles={state.articles} decrementQte={decrementQte}></Gallery>
      </main>
      <footer></footer>
    </>
  )
}

export default App;
