import React from "react";
import "./generic-page.css";

class NotFound extends React.Component {
  handleRandomClick = () => {
    const random = Math.round(Math.random() * (10 - 1) + 1);
    this.props.history.push(`/videos?id=${random}`, { id: random });
  };

  handleForwardClick = () => {
    this.props.history.goForward();
  };

  handleBackwardClick = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="Page">
        <h1>404 Not found</h1>
        <button className="Button" onClick={this.handleForwardClick}>
          Ir a la siguiente página 👉
        </button>
        <button className="Button" onClick={this.handleBackwardClick}>
          Ir a la página anterior 👈
        </button>
        <button className="Button" onClick={this.handleRandomClick}>
          Video random 🍀
        </button>
      </div>
    );
  }
}

export default NotFound;
