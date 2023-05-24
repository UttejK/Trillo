import sprite from "./assets/sprite.svg";
import logo from "./assets/logo.png";
import user_image from "./assets/user.jpg";
import hotel1 from "./assets/hotel-1.jpg";
import hotel2 from "./assets/hotel-2.jpg";
import hotel3 from "./assets/hotel-3.jpg";

function App() {
  return (
    <>
      <div className="container">
        <header className="header">
          <img src={logo} alt="trillo logo" className="logo" />
          <form action="#" className="search">
            <input
              type="text"
              className="search__input"
              placeholder="Search Hotels"
            />
            <button className="search__button">
              <svg className="search__icon">
                <use xlinkHref={`${sprite}#icon-magnifying-glass`}></use>
              </svg>
            </button>
          </form>
          <nav className="user-nav">
            <div className="user-nav__icon-box">
              <svg className="user-nav__icon">
                <use xlinkHref={`${sprite}#icon-bookmark`}></use>
              </svg>
              <span className="user-nav__notification">7</span>
            </div>
            <div className="user-nav__icon-box">
              <svg className="user-nav__icon">
                <use xlinkHref={`${sprite}#icon-chat`}></use>
              </svg>
              <span className="user-nav__notification">23</span>
            </div>
            <div className="user-nav__image">
              <img
                src={user_image}
                alt="user photo"
                className="user-nav__user-photo"
              />
              <span className="user-nav__user-name">UK</span>
            </div>
          </nav>
        </header>

        <div className="content">
          <nav className="sidebar">
            <ul className="side-nav">
              <li className="side-nav__item side-nav__item--active">
                <a href="#" className="side-nav__link">
                  <svg className="side-nav__icon">
                    <use xlinkHref={`${sprite}#icon-home`}></use>
                  </svg>
                  <span>Hotel</span>
                </a>
              </li>
              <li className="side-nav__item">
                <a href="#" className="side-nav__link">
                  <svg className="side-nav__icon">
                    <use xlinkHref={`${sprite}#icon-aircraft-take-off`}></use>
                  </svg>
                  <span>Flight</span>
                </a>
              </li>
              <li className="side-nav__item">
                <a href="#" className="side-nav__link">
                  <svg className="side-nav__icon">
                    <use xlinkHref={`${sprite}#icon-key`}></use>
                  </svg>
                  <span>Car rental</span>
                </a>
              </li>
              <li className="side-nav__item">
                <a href="#" className="side-nav__link">
                  <svg className="side-nav__icon">
                    <use xlinkHref={`${sprite}#icon-map`}></use>
                  </svg>
                  <span>Tours</span>
                </a>
              </li>
            </ul>
            <div className="legal">&copy; 2023 by UK. All rights reserved.</div>
          </nav>

          <main className="hotel-view">
            <div className="gallery">
              <figure className="gallery__item">
                <img
                  src={hotel1}
                  alt="Photo of Hotel 1"
                  className="gallery__photo"
                />
              </figure>
              <figure className="gallery__item">
                <img
                  src={hotel2}
                  alt="Photo of Hotel 2"
                  className="gallery__photo"
                />
              </figure>
              <figure className="gallery__item">
                <img
                  src={hotel3}
                  alt="Photo of Hotel 3"
                  className="gallery__photo"
                />
              </figure>
            </div>

            <div className="overview">
              <h1 className="overview__heading">Hotel Las Palmas</h1>
              <div className="overview__stars">
                <svg className="side-nav__icon">
                  <use xlinkHref={`${sprite}#icon-star`}></use>
                </svg>
                <svg className="side-nav__icon">
                  <use xlinkHref={`${sprite}#icon-star`}></use>
                </svg>
                <svg className="side-nav__icon">
                  <use xlinkHref={`${sprite}#icon-star`}></use>
                </svg>
                <svg className="side-nav__icon">
                  <use xlinkHref={`${sprite}#icon-star`}></use>
                </svg>
                <svg className="side-nav__icon">
                  <use xlinkHref={`${sprite}#icon-star`}></use>
                </svg>
              </div>

              <div className="overview__location">
                <svg className="side-nav__icon">
                  <use xlinkHref={`${sprite}#icon-location-pin`}></use>
                </svg>
                <button className="btn-inline">Abulfera, Portugal</button>
              </div>

              <div className="overview__rating">
                <div className="overview__rating-average">8.6</div>
                <div className="overview__rating-count">429</div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
