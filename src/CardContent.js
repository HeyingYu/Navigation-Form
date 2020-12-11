import React from "react";
import Style from "./Style.json";

class CardContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id
    };
  }
  render() {
    const { id } = this.state;
    return (
      <div key={this.state.id}>
        {Style.content.map((card) =>
          id === card.id
            ? card.content.map((part) => (
                <div style={part.styles}>{part.text}</div>
              ))
            : null
        )}
      </div>
    );
  }
}

export default CardContent;
