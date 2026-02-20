import { useState } from 'react';
import Header from './components/header/header';
import Layout from './components/layout/layout';
import Footer from '../src/components/footer/footer'
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
