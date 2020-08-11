import React from "react";

class InputToDO extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      correctLength: true,
    };
  }
  onSubmitHandler = (e) => {
    e.preventDefault();

    const { title } = this.state;
    if (title.length > 3 && title.length < 25) {
      this.props.addToDo(title);
      this.setState({
        title: "",
        correctLength: true,
      });
    } else {
      this.setState({ correctLength: false });
    }
  };
  inputChange = (event) => {
    this.setState({ title: event.target.value });
  };

  render() {
    return (
      <div>
        <form action="" onSubmit={this.onSubmitHandler} className="form">
          <input
            className="input-text"
            type="text"
            placeholder="Todo..."
            value={this.state.title}
            onChange={this.inputChange}
          />
          <input type="submit" className="input-submit" value="hinzufügen" />
          {this.state.correctLength ? null : (
            <p>Dein Todo muss zwischen 3 und 25 Zeichen lang sein</p>
          )}
        </form>
      </div>
    );
  }
}

export default InputToDO;
