import React, { Component } from "react";
import M from "materialize-css";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount = () => {
    const elems = document.querySelectorAll(".slider");
    M.Slider.init(elems, {
      indicators: false,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div class="slider test">
          <ul class="slides">
            <li>
              <img
                alt=""
                src="https://blog.indrek.io/images/2019-01-05-spring-boot-reactjs/cover.jpg"
              />
              <div class="caption center-align">
                <h3>This is our big Tagline!</h3>
                <h5 class="light grey-text text-lighten-3">
                  Here's our small slogan.
                </h5>
              </div>
            </li>
            <li>
              <img
                alt=""
                src="https://blog.indrek.io/images/2019-01-05-spring-boot-reactjs/cover.jpg"
              />
              <div class="caption left-align">
                <h3>Left Aligned Caption</h3>
                <h5 class="light grey-text text-lighten-3">
                  Here's our small slogan.
                </h5>
              </div>
            </li>
            <li>
              <img
                alt=""
                src="https://blog.indrek.io/images/2019-01-05-spring-boot-reactjs/cover.jpg"
              />
              <div class="caption right-align">
                <h3>Right Aligned Caption</h3>
                <h5 class="light grey-text text-lighten-3">
                  Here's our small slogan.
                </h5>
              </div>
            </li>
            <li>
              <img
                alt=""
                src="https://blog.indrek.io/images/2019-01-05-spring-boot-reactjs/cover.jpg"
              />
              <div class="caption center-align">
                <h3>This is our big Tagline!</h3>
                <h5 class="light grey-text text-lighten-3">
                  Here's our small slogan.
                </h5>
              </div>
            </li>
          </ul>
        </div>
        <div className="container center test">
          <h4>EXPENSE TRACKER APP with java spring boot</h4>
          <h6>
            Simple Expense Tracker App developed with Spring boot and React
          </h6>
          <h4>Getting Started</h4>
          <h6>
            These instructions will get you a copy of the project up and running
            on your local machine for development and testing purposes.
          </h6>
          <h6>
            React documentation :
            <a href="https://reactjs.org/docs/getting-started.html">
              https://reactjs.org/docs/getting-started.html
            </a>
          </h6>
          <h6>
            Spring Boot documentation :
            <a href="https://docs.spring.io/spring/docs/current/spring-framework-reference/">
              https://docs.spring.io/spring/docs/current/spring-framework-reference/
            </a>
          </h6>
          <h4>Prerequisites</h4>
          <p>* NodeJS 12+ * PostgreSQL 12+ * Apache Maven * JDK 1.7+</p>
          <h4>Built With</h4>
          <h6>
            <a href="https://maven.apache.org/">Maven</a> - Dependency
            Management
          </h6>
          <h4>Authors</h4>
          <h6>
            <a href="https://github.com/Shihara-Dilshan">Shihara-Dilshan</a> - GitHub
            Profile
          </h6>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
