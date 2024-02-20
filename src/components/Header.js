import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles
        .map((x) => [x.toUpperCase(), 1500])
        .flat();
    }

    const HeaderTitleTypeAnimation = React.memo(
      () => {
        return (
          <Typical className="title-styles" steps={this.titles} loop={50} />
        );
      },
      (props, prevProp) => true
    );

    return (
      <header
        id="home"
        style={{ height: window.innerHeight - 140, display: "block" }}
      >
        <div className="row aligner" style={{ height: "100%" }}>
          <div className="col-md-12">
            <div>
              <span
                className="iconify header-icon"
                data-icon="la:laptop-code"
                data-inline="false"
              ></span>
              <br />
              <h1 className="mb-0">
                <Typical steps={[name]} wrapper="p" />
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
              <Switch
                checked={this.state.checked}
                onChange={this.onThemeSwitchChange}
                offColor="#baaa80"
                onColor="#353535"
                className="react-switch mx-auto"
                width={90}
                height={40}
                uncheckedIcon={
                  <span
                    className="iconify"
                    data-icon="twemoji:owl"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "20px",
                      color: "#353239",
                    }}
                  ></span>
                }
                checkedIcon={
                  <span
                    className="iconify"
                    data-icon="noto-v1:sun-with-face"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "10px",
                      color: "#353239",
                    }}
                  ></span>
                }
                id="icon-switch"
              />
              <div className="d-flex justify-content-center mt-3">
                <button
                  style={{
                    position: "relative",
                    background: "linear-gradient(to right, beige, black)",
                    color: "#fff",
                    padding: "15px 30px",
                    marginTop: "80px",
                    marginBottom: "10px",
                    borderRadius: "15px",
                    fontSize: "18px",
                    cursor: "pointer",
                    transition:
                      "background-color 0.3s ease-in-out, transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out",
                    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
                    border: "none",
                    outline: "none",
                    letterSpacing: "1px",
                  }}
                  onMouseOver={(event) => {
                    event.target.style.background =
                      "linear-gradient(to right, black, beige)";
                    event.target.style.transform = "scale(1.05)";
                    event.target.style.boxShadow =
                      "0px 8px 15px rgba(0, 0, 0, 0.4)";
                  }}
                  onMouseOut={(event) => {
                    event.target.style.background =
                      "linear-gradient(to right, beige, black)";
                    event.target.style.transform = "scale(1)";
                    event.target.style.boxShadow =
                      "0px 5px 10px rgba(0, 0, 0, 0.2)";
                  }}
                >
                  <a
                    href="https://drive.google.com/file/d/1jV5n7eogfnBVoNzKVUyqysF4g1Bo2ALQ/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      paddingRight: "10px",
                    }}
                  >
                    Resume
                    <span
                      style={{
                        fontSize: "20px",
                        position: "absolute",
                        right: "15px",
                      }}
                    >
                      →
                    </span>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
