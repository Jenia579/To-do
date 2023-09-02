import React from "react";
export default class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
    };
    this.newTxt = React.createRef();
  }

  handleClickEdit = () => {
    this.setState({ isEdit: true });
  };

  handleClickRemove = () => {
    this.props.removeTask(this.props.index);
  };

  handleClickSave = () => {
    const value = this.newTxt.current.value;
    this.props.updateTask(this.props.index, value);
    this.setState({ isEdit: false });
  };

  renderNorm = () => {
    return (
      <div className="box">
        <div>{this.props.children}</div>
        <button onClick={this.handleClickEdit} className="btn light">
          Edit
        </button>
        <button onClick={this.handleClickRemove} className="btn red">
          Remove
        </button>
      </div>
    );
  };

  renderEdit = () => {
    return (
      <div className="box">
        <textarea
          ref={this.newTxt}
          defaultValue={this.props.children}
        ></textarea>
        <button onClick={this.handleClickSave} className="btn success">
          Save
        </button>
      </div>
    );
  };

  render() {
    if (this.state.isEdit) {
      return this.renderEdit();
    } else {
      return this.renderNorm();
    }
  }
}
