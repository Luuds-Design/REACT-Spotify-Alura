import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faGlobe, faBook, faPlus } from '@fortawesome/free-solid-svg-icons';
import logoSpotify from '../assets/icons/logo-spotify.png';


const Sidebar = () => {
    return (
        <div class="sidebar">
        <nav class="sidebar_navigation">
            <div class="logo">
                <a href="">
                    <img src={logoSpotify} alt="logo do spotify" />
                </a>
            </div>
                    <ul>
                            <li>
                                <a href="">
                                    <span class="home"><FontAwesomeIcon icon={faHome} /></span>
                                    <span>Início</span>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span class="search"><FontAwesomeIcon icon={faSearch} /></span>
                                    <span>Buscar</span>
                                </a>
                            </li>
                    </ul>
        </nav>

        <div class="library">
            <div class="library_content">
                <button class="library_button">
                    <span class="book"> <FontAwesomeIcon icon={faBook} /> </span>
                    <span>Sua biblioteca</span>
                </button>
                <span class="plus"> <FontAwesomeIcon icon={faPlus} /> </span>
            </div>

            <section class="section_playlist">
                <div class="section_playlist_content">
                    <span class="text title">Crie sua primeira playlist</span>
                    <span class="text subtitle">É fácil, vamos te ajudar.</span>
                    <button class="section_playlist_button">
                        <span>Criar playlist</span>
                    </button>
                </div>
            </section>

            <div class="cookies">
                <a href="">Cookies</a>
            </div>

            <div class="languages">
                <button class="languages_button">
                    <span> <FontAwesomeIcon icon={faGlobe} /> </span>
                    <span>Português do Brasil</span>
                </button>
            </div>
        </div>
    </div>
    );
  };
  
  export default Sidebar;