import React from "react";
import "./App.css";
import Data from "./Data";
import CardContent from "./CardContent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      isOpen: false
    };
  }
  handleMessage(id) {
    this.setState({
      text: Data.content
        .filter((item) => item.id === id)
        .map((content) => Object.values(content.body)),
      isOpen: true
    });
  }

  render() {
    const { text, isOpen } = this.state;
    return (
      <div>
        <div className="pageTitle">
          <h5 className="title">Navigation</h5>
        </div>
        <table className="container">
          <div className="row">
            {Data.content.map((item) => (
              <div className="column">
                <div
                  className="card"
                  onClick={() => this.handleMessage(item.id)}
                >
                  <CardContent
                    onClick={() => this.handleMessage(item.id)}
                    id={item.id}
                    body={item.body}
                  />
                </div>
              </div>
            ))}
          </div>
        </table>

        <div className="textBorder">
          {isOpen ? <div className="textBody">{text}</div> : null}
        </div>
      </div>
    );
  }
}

export default App;
