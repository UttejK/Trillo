import sprite from "./assets/sprite.svg";
import logo from "./assets/logo.png";
import user_image from "./assets/user.jpg";

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
          <nav className="sidebar">NAVIGATION</nav>
          <main className="hotel-view">HOTEL-VIEW</main>
        </div>
      </div>
    </>
  );
}

export default App;
