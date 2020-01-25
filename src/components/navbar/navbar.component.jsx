import React, { Component } from "react";
import "./navbar.styles.scss";
import { Link } from "react-router-dom";
import CustomLink from "../custom-link/custom-link.component";

class Navbar extends Component {
  render() {
    return (
      <nav id="navbar">
        <Link className="brand-logo" to="/">
          MajiMaji
        </Link>
        <div className="links">
          <Link to="/employees" className="links__item">
            従業員一覧
          </Link>
          <Link to="/new" className="links__item">
            募集作成
          </Link>
          <CustomLink to="/contact" light>
            お問い合わせ
          </CustomLink>
        </div>
      </nav>
    );
  }
}

export default Navbar;
