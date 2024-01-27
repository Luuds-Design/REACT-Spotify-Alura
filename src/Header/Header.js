// src/MeuBotao.js
import React from 'react';
import './Header.css';
import smallLeft from '../assets/icons/small-left.png';
import smallRight from '../assets/icons/small-right.png';
import search from '../assets/icons/search.png'
import Playlist from '../Playlist/Playlist';

const Header = () => {
  return (
    <div class="main-container">
      <nav class="header__navigation">
        <div class="navigation">
          <button class="arrow-left">
            <img src={smallLeft} alt="" />
          </button>
          <button class="arrow-right">
            <img src={smallRight} alt="" />
          </button>

          <div class="header__search">
            <img src={search} alt="" />
            <input id="search-input" maxlength="800" autocorrect="off" autocapitalize="off" spellcheck="false"
              placeholder="O que você quer ouvir?" value="" />
          </div>
        </div>

        <div class="header__login">
          <button class="subscribe">Inscreva-se</button>
          <button class="login">Entrar</button>
        </div>
      </nav>

<Playlist/>

      </div>
  );
};

export default Header;