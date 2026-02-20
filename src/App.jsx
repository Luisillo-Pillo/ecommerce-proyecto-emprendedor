import { useState } from 'react';
import Header from './components/header/header';
import Layout from './components/layout/layout';
import Footer from '../src/components/footer/footer'
import { CartProvider } from './context/CartContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <AuthProvider>
            <CartProvider>
              <Header/>
              <Layout/>
              <Footer/>
            </CartProvider>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
