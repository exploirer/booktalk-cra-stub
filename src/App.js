import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css'; // Импортируем CSS файл
import Home from './Home'; // Импортируем Home
import Possibilities from './Possibilities';
import Questions from './Questions';
import Reviews from './Reviews';
import JoinClub from './JoinClub';

function App() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className="wrapper">
        <header className="header">
          <div className="container">
            <div className="row">
              <Link to="/" className="logo">
                <svg>xmlns="http://www.w3.org/2000/svg" width="169" height="98" viewBox="0 0 169 98" fill="none">
                      <path d="M28.3332 87.6583V63.7838H32.2521V87.6583H28.3332ZM19.9861 64.5323V60.829H40.9911V64.5323H19.9861ZM44.6056 77.6909H58.9879V81.3942H44.6056V77.6909ZM39.5895 87.6583L49.1124 60.829H54.442L63.9648 87.6583H59.9676L51.4245 63.5868H52.1299L43.5867 87.6583H39.5895ZM82.7586 87.6583H67.3183V60.829H71.2372V84.5066L70.7669 83.955H82.7586V87.6583ZM87.0659 87.6583V60.829H90.9847V87.6583H87.0659ZM102.193 87.6583L89.5347 74.4997V74.0664L102.349 60.829H107.248L93.1009 75.4453L93.4928 73.1208L107.483 87.6583H102.193Z" fill="#F95C3B"/>
                      <path d="M0 25.3618C0 11.3549 11.2947 0 25.2275 0H169L162.375 0.967659C134.524 5.03587 134.367 45.3877 162.187 49.6737L169 50.7236H25.2275C11.2947 50.7236 0 39.3688 0 25.3618Z" fill="#F95C3B"/>
                      <path d="M20.476 38.9045V12.0752H29.3325C31.1352 12.0752 32.6505 12.3378 33.8784 12.8631C35.1324 13.3621 36.086 14.15 36.7391 15.2269C37.3923 16.2775 37.7189 17.617 37.7189 19.2454C37.7189 20.6112 37.3792 21.8194 36.7 22.8699C36.0207 23.9205 35.1193 24.7347 33.996 25.3125C32.8987 25.8903 31.7099 26.1793 30.4298 26.1793L30.7041 24.1306C32.2978 24.1306 33.6824 24.4196 34.8581 24.9974C36.0599 25.5489 37.0004 26.3631 37.6797 27.44C38.3589 28.5168 38.6986 29.83 38.6986 31.3797C38.6986 33.8223 37.9409 35.6871 36.4256 36.974C34.9365 38.261 32.7942 38.9045 29.9987 38.9045H20.476ZM24.3948 14.5572V36.1467L22.8273 35.1224H30.1163C31.5794 35.1224 32.7027 34.7416 33.4865 33.9799C34.2964 33.1919 34.7013 32.1939 34.7013 30.9857C34.7013 29.62 34.3095 28.5825 33.5257 27.8733C32.768 27.1642 31.6577 26.8096 30.1947 26.8096H22.8273V23.1851H29.4501C30.8348 23.1851 31.8929 22.8831 32.6244 22.279C33.3559 21.6486 33.7216 20.7425 33.7216 19.5606C33.7216 18.4837 33.3428 17.6039 32.5852 16.921C31.8537 16.2118 30.8086 15.8573 29.4501 15.8573H22.984L24.3948 14.5572ZM41.8183 25.5095C41.8183 23.5134 42.158 21.6749 42.8372 19.9939C43.5426 18.313 44.5224 16.8553 45.7764 15.6209C47.0304 14.3864 48.4934 13.4278 50.1656 12.7449C51.8634 12.062 53.7053 11.7206 55.6911 11.7206C57.6506 11.7206 59.466 12.062 61.1383 12.7449C62.8102 13.4278 64.2602 14.3864 65.4882 15.6209C66.7423 16.8553 67.7088 18.313 68.3882 19.9939C69.0936 21.6749 69.4463 23.5134 69.4463 25.5095C69.4463 27.4794 69.0936 29.3048 68.3882 30.9857C67.7088 32.6666 66.7423 34.1375 65.4882 35.3982C64.2602 36.6326 62.8102 37.5912 61.1383 38.2741C59.466 38.957 57.6506 39.2985 55.6911 39.2985C53.7053 39.2985 51.8634 38.957 50.1656 38.2741C48.4934 37.5912 47.0304 36.6326 45.7764 35.3982C44.5224 34.1375 43.5426 32.6666 42.8372 30.9857C42.158 29.3048 41.8183 27.4794 41.8183 25.5095ZM45.8155 25.5095C45.8155 27.4268 46.2466 29.1472 47.1088 30.6705C47.9709 32.1676 49.1467 33.3495 50.6358 34.2163C52.125 35.083 53.8101 35.5164 55.6911 35.5164C57.5722 35.5164 59.2441 35.083 60.7073 34.2163C62.17 33.3495 63.3197 32.1676 64.1558 30.6705C65.018 29.1472 65.4491 27.4268 65.4491 25.5095C65.4491 23.5659 65.018 21.8456 64.1558 20.3485C63.3197 18.8514 62.17 17.6695 60.7073 16.8028C59.2441 15.9361 57.5722 15.5027 55.6911 15.5027C53.8101 15.5027 52.125 15.9361 50.6358 16.8028C49.1467 17.6695 47.9709 18.8514 47.1088 20.3485C46.2466 21.8456 45.8155 23.5659 45.8155 25.5095ZM72.1664 25.5095C72.1664 23.5134 72.5059 21.6749 73.1853 19.9939C73.8907 18.313 74.8704 16.8553 76.1245 15.6209C77.3785 14.3864 78.8417 13.4278 80.5136 12.7449C82.2119 12.062 84.0537 11.7206 86.0391 11.7206C87.9986 11.7206 89.8144 12.062 91.4863 12.7449C93.1582 13.4278 94.6082 14.3864 95.8362 15.6209C97.0903 16.8553 98.0567 18.313 98.7362 19.9939C99.4416 21.6749 99.7943 23.5134 99.7943 25.5095C99.7943 27.4794 99.4416 29.3048 98.7362 30.9857C98.0567 32.6666 97.0903 34.1375 95.8362 35.3982C94.6082 36.6326 93.1582 37.5912 91.4863 38.2741C89.8144 38.957 87.9986 39.2985 86.0391 39.2985C84.0537 39.2985 82.2119 38.957 80.5136 38.2741C78.8417 37.5912 77.3785 36.6326 76.1245 35.3982C74.8704 34.1375 73.8907 32.6666 73.1853 30.9857C72.5059 29.3048 72.1664 27.4794 72.1664 25.5095ZM76.163725.5095C76.1637 27.4268 76.5947 29.1472 77.4569 30.6705C78.319 32.1676 79.4947 33.3495 80.9838 34.2163C82.473 35.083 84.1581 35.5164 86.0391 35.5164C87.9202 35.5164 89.5921 35.083 91.0553 34.2163C92.5184 33.3495 93.6676 32.1676 94.5038 30.6705C95.366 29.1472 95.797 27.4268 95.797 25.5095C95.797 23.5659 95.366 21.8456 94.5038 20.3485C93.6676 18.8514 92.5184 17.6695 91.0553 16.8028C89.5921 15.9361 87.9202 15.5027 86.0391 15.5027C84.1581 15.5027 82.473 15.9361 80.9838 16.8028C79.4947 17.6695 78.319 18.8514 77.4569 20.3485C76.5947 21.8456 76.1637 23.5659 76.1637 25.5095ZM104.287 38.9045V12.0752H108.206V38.9045H104.287ZM119.414 38.9045L106.756 25.7459V25.3125L119.571 12.0752H124.469L110.322 26.6914L110.714 24.367L124.704 38.9045H119.414Z" fill="white"/></svg>
              </Link>
              <div className="right_side">
                <nav>
                  <ul>
                    <li>
                      <a href="#possibilities" onClick={(e) => { e.preventDefault(); scrollToSection('possibilities'); }} className="lift">Возможности</a>
                    </li>
                    <li>
                      <a href="#questions" onClick={(e) => { e.preventDefault(); scrollToSection('questions'); }} className="lift">Вопросы</a>
                    </li>
                    <li>
                      <a href="#reviews" onClick={(e) => { e.preventDefault(); scrollToSection('reviews'); }} className="lift">Отзывы</a>
                    </li>
                  </ul>
                </nav>
                <a href="#join-club" onClick={(e) => { e.preventDefault(); scrollToSection('join-club'); }} className="header_btn">Вступить в клуб</a>
              </div>
            </div>
          </div>
        </header>

        {/* Все блоки отображаются на одной странице */}
        <div id="home">
          <Home />
        </div>
        <div id="possibilities">
          <Possibilities />
        </div>
        <div id="questions">
          <Questions />
        </div>
        <div id="reviews">
          <Reviews />
        </div>
        <div id="join-club">
          <JoinClub />
        </div>
      </div>
    </Router>
  );
}

export default App;
