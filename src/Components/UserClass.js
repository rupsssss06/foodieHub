import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="user-card">
        <h1>count:{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Inc
        </button>
        <h2>Name:{this.props.name}</h2>
        <h3>Loc:Bihar</h3>
        <h4>Contact:rupakumari18105@gmail.com</h4>
      </div>
    );
  }
}
export default UserClass;
