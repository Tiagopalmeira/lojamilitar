import React from 'react';
import '../css/header.css'; // Importando o CSS para estilizar o cabeçalho
import logo from '../img/logo.png'; // Importando a imagem da logo
import { BsCart, BsFilePerson } from 'react-icons/bs'; // Importando os ícones


const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>
      <input
        type="text"
        className="search-bar"
        placeholder="Buscar..."
      />
      <div className="icons">
        <div className="profile-icon">
          <BsFilePerson size={24} /> {/* Ajuste o tamanho do ícone conforme necessário */}
        </div>
        <div className="cart-icon">
          <BsCart size={24} /> {/* Ajuste o tamanho do ícone conforme necessário */}
        </div>
      </div>
    </header>
  );
};


export default Header;


