import React, { Component } from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount = () => {
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, {});
  };

  render = () => {
    return (
      <React.Fragment>
        <nav>
          <div class="nav-wrapper grey darken-3">
            <Link to="/" class="brand-logo">
              Expense Tracker
            </Link>
            <a
              href="sass.html"
              data-target="mobile-demo"
              class="sidenav-trigger"
            >
              <i class="material-icons">menu</i>
            </a>
            <ul class="right hide-on-med-and-down">
              <li>
                <Link to="/category">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </nav>

        <ul class="sidenav" id="mobile-demo">
          <li>
            <Link to="/category">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </React.Fragment>
    );
  };
}

export default Navbar;
