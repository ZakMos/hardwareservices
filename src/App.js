import React from 'react';
import './Styles/App.css';
import Header from './components/Header';
import Main from './views/Main';
import { Products} from './views/Products';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <div className="">
      < Header />
      < Main /> 
      < Products />
      < Footer/>
    </div>
    </>
  );
}

export default App;
