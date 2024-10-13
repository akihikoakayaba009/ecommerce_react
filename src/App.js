import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';
import ProductList from './components/products/ListaProdutos';
import AddProduto from './components/products/addProdutos';

function App() {
  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '25vh', // Garante que o layout ocupe pelo menos a altura total da tela
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Lista-Produto" element={<ProductList />} />
        <Route path="/Add-Produto" element={<AddProduto />} />
      </Routes>
      <div style={appStyle}>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
