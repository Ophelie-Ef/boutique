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
    // je déclare un tableau vide pour enregistrer mes achats
    let achatTmp = [];
    // je déclare une boolean pour arrêter ma boucle su id === value.idachat
    // si il existe dans mon tableau achat un article avec le même id (soit déjà acheté)
    let stop = false;
    // une condition pour déterminer si mon tableau achat est vide
    if (state.achat.length > 0) {
      // je lance une boucle map qui pourra retourner une copie de state.achat dans achatTmp
      achatTmp = state.achat.map((value, index) => {
        // si le résultat ets positif
        if (value.idachat === id) {
          // j'incrémente la qté de l'article acheté
          value.qteachat++;
          // j'empêche l'ajout d'un nouvel article identique à achatTmp
          stop = true;
        }
        return value
      })
    }
    // si stop est resté à false (ma boucle n'a pas trouvé de résultat positif)
    if (!stop) {
      // j'ajoute un nouvel article à mon tableau achatTmp
      achatTmp = [...achatTmp, { 'idachat': id, 'qteachat': 1 }]
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
