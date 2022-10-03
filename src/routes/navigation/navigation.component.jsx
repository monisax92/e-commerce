import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import './navigation.styles.scss'

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation-bar">
        <Link className='logo-container' to="/">
          <Logo className="logo" />
          <h1>FunBuy</h1>
        </Link>
        <div className="nav-links-container">
            <Link className='nav-link' to="/shop">SHOP</Link>
            <Link className='nav-link' to="">ELSE</Link>
            <Link className='nav-link' to="/sign-in-up">SIGN IN</Link>
            <Link className='nav-link' to="/card">CARD</Link>
        </div>
       
      </div>

      <div className="page-content">
        <Outlet />
      </div>
      
    </Fragment>
  );
};

export default Navigation;