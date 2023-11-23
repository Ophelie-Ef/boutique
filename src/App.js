import React from 'react';
import Gallery from './components/Gallery/Gallery';
import { articles } from './articles';
import './App.css';

const App = () => {
  const [state, setState] = React.useState(
    {
      'articles': articles
    }
  )
  const decrementQte = (id) => {
    //state.article[id].qte--; ==>> ne fonctionnera pas !!!
    //Option 1 (méthode bourrin !):
    if (state.articles[id].qte > 0){
      let articlesTmp = state.articles;
    articlesTmp[id].qte--;
    setState({
      'articles':articlesTmp
    })}    
  }
  return (
    <>
      <header>

      </header>
      <main>
        <Gallery articles={state.articles} decrementQte={decrementQte}></Gallery>
      </main>
      <footer></footer>
    </>
  )
}

export default App;
