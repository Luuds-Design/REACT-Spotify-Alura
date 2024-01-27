import React from 'react';
import './Playlist.css';
import cardA from '../assets/playlist/1.jpeg';
import cardB from '../assets/playlist/2.png';
import cardC from '../assets/playlist/3.jpeg';
import cardD from '../assets/playlist/4.jpeg';
import cardE from '../assets/playlist/5.jpeg';
import cardF from '../assets/playlist/6.jpeg';
import cardG from '../assets/playlist/7.jpeg';
import cardH from '../assets/playlist/8.jpeg';
import cardI from '../assets/playlist/9.jpeg';
import cardJ from '../assets/playlist/10.jpeg';
import cardK from '../assets/playlist/11.jpeg';
import cardL from '../assets/playlist/12.jpeg';
import cardM from '../assets/playlist/13.jpeg';
import cardN from '../assets/playlist/14.jpeg';
import cardO from '../assets/playlist/15.jpeg';



const Playlist = () => {
    return (
<div class="playlist-container">
    <div id="result-playlists">
        <div class="playlist">
            <h1 id="greeting">Boas vindas</h1>
            <h2 class="session">Navegar por todas as seções</h2>
        </div>

        <div class="offer__scroll-container">
            <div class="offer__list">
                <section class="offer__list-item">


                    <a href="" class="cards">
                        <div class="cards card1">
                            <img src={cardA} alt="" />
                            <span>Boas festas</span>
                        </div>
                    </a>


                    <a href="" class="cards">
                        <div class="cards card2">
                            <img src={cardB} alt="" />
                            <span>Feitos para você</span>
                        </div>
                    </a>


                    <a href="" class="cards">
                        <div class="cards card3">
                            <img src={cardC} alt="" />
                            <span>Lançamentos</span>
                        </div>
                    </a>


                    <a href="" class="cards">
                        <div class="cards card4">
                            <img src={cardD} alt="" />
                            <span>Creators</span>
                        </div>
                    </a>


                    <a href="" class="cards">
                        <div class="cards card5">
                            <img src={cardE} alt="" />
                            <span>Para treinar</span>
                        </div>
                    </a>


                    <a href="" class="cards">
                        <div class="cards card6">
                            <img src={cardF} alt="" />
                            <span>Podcasts</span>
                        </div>
                    </a>


                    <a href="" class="cards">
                        <div class="cards card7">
                            <img src={cardG} alt="" />
                            <span>Sertanejo</span>
                        </div>
                    </a>

                    <a href="" class="cards">
                        <div class="cards card8">
                            <img src={cardH} alt="" />
                            <span>Samba e pagode</span>
                        </div>
                    </a>

                    <a href="" class="cards">
                        <div class="cards card9">
                            <img src={cardI} alt="" />
                            <span>Funk</span>
                        </div>
                    </a>

                    <a href="" class="cards">
                        <div class="cards card10">
                            <img src={cardJ} alt="" />
                            <span>MPB</span>
                        </div>
                    </a>

                    <a href="" class="cards">
                        <div class="cards card11">
                            <img src={cardK} alt="" />
                            <span>Rock</span>
                        </div>
                    </a>

                    <a href="" class="cards">
                        <div class="cards card12">
                            <img src={cardL} alt="" />
                            <span>Hip Hop</span>
                        </div>
                    </a>

                    <a href="" class="cards">
                        <div class="cards card13">
                            <img src={cardM} alt="" />
                            <span>Indie</span>
                        </div>
                    </a>

                    <a href="" class="cards">
                        <div class="cards card14">
                            <img src={cardN} alt="" />
                            <span>Relax</span>
                        </div>
                    </a>

                    <a href="" class="cards">
                        <div class="cards card15">
                            <img src={cardO} alt="" />
                            <span>Música Latina</span>
                        </div>
                    </a>
                </section>
            </div>
        </div>
    </div>
    </div>
    );
  };
  
  export default Playlist;