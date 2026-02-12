import { useState } from 'react';
import Header from './header/header';
import Layout from './layout/layout';
import Footer from './footer/footer';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <Header/>
        <Layout/>
        <Footer/>
      </div>
    </>
  )
}

export default App
