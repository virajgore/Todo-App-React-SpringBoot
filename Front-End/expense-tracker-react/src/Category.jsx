import React, { Component } from "react";

class Category extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  style = () => {
    return {
      backgroundColor: "#f5f5f5",
      borderRadius: "5px",
      marginTop: "50px",
      marginBottom: "40px",
    };
  };

  getStyle = () => {
    return {
      marginTop: "20px",
    };
  };

  async componentDidMount() {
    const APICall = await fetch("/api/categories");
    const result = await APICall.json();
    this.setState({categories: result});
  }

  render() {
    return (
      <React.Fragment>
        {" "}
        <div className="container loginForm test" style={this.style()}>
          <div className="col s12 m7">
            <div className="card horizontal">
              <div className="card-image hide-on-small-only">
                <img
                  alt=""
                  src="https://image.freepik.com/free-vector/online-registration-concept-with-flat-design_23-2147976704.jpg"
                  height="100%"
                />
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <h4 className="center-align grey-text">Add Category</h4>
                  <div className="row">
                    <form className="col s12">
                      <div className="row">
                        <div className="input-field col s12">
                          <input id="email" type="email" className="validate" />
                          <label htmlFor="email">Category Name</label>
                        </div>
                      </div>

                      <div className="center-align center">
                        <button
                          className="btn center-align grey darken-3"
                          style={{ width: "100%" }}
                        >
                          Add
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container loginForm test" style={this.style()}>
          <table>
            <thead>
              <tr>
                <th>Category Name</th>
                <th>Update Category</th>
                <th>Delete Category</th>
              </tr>
            </thead>

            <tbody>
              {this.state.categories.map((category, index) => {
                return (
                  <tr>
                    <td>{category.name}</td>
                    <td>
                      <button className="btn">Update</button>
                    </td>
                    <td>
                      <button className="btn">Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Category;
