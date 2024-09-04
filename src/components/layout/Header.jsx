 import { NavLink } from "react-router-dom";

export const Header = () => {
  const getActiveLink = ({ isActive }) => {
    return {
      color: isActive ? "#535bf2" : "black",
    };
  };
  return (
    <>
      <header className="section-navbar">
        {/* <section className="top_txt">
          <div className="head container">
            <div className="head_txt">
              <p>Free shipping, 30-day return or refund guarantee.</p>
            </div>
            <div className="sing_in_up">
              <NavLink to="#">SIGN IN</NavLink>
              <NavLink to="#">SIGN UP</NavLink>
            </div>
          </div>
        </section> */}
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/">
              <img
                src="../src/images/movie-logo.png"
                alt="e-commerce logo"
                className="logo"
                // width="80%"
                // height="20%"
              />
            </NavLink>
          </div>

          <nav className="navbar">
            <ul>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#535bf2" : "black",
                    };
                  }}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/movie" style={getActiveLink}>
                  Movie
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
