import React, { Component } from "react";
import "./forms.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

class Forms extends Component {
  state = {
    id: null,
    name: "",
    email: "",
    role: "",
    skills: "",
    alertMessage: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.users.push(this.state);
    this.setState({
      name: "",
      email: "",
      role: "",
      skills: "",
      alertMessage: !this.state.alertMessage
    });
  };

  handleChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  componentDidMount() {}

  render() {
    const { name, email, role, skills, alertMessage } = this.state;
    return (
      <div className="form">
        <form className="add-form" onSubmit={this.handleSubmit}>
          <div className="form__inputfield">
            <label htmlFor="name">名前:</label>
            <input
              type="text"
              id="name"
              onChange={this.handleChange}
              value={name}
              required
            />
          </div>
          <div className="form__inputfield">
            <label htmlFor="email">メールアドレス:</label>
            <input
              type="email"
              id="email"
              onChange={this.handleChange}
              value={email}
              required
            />
          </div>
          <div className="form__inputfield">
            <label htmlFor="role">職種:</label>
            <input
              type="text"
              id="role"
              onChange={this.handleChange}
              value={role}
              required
            />
          </div>
          <div className="form__inputfield">
            <label htmlFor="skills">特技:</label>
            <input
              type="text"
              id="skills"
              onChange={this.handleChange}
              value={skills}
              required
            />
          </div>
          <div className="form__inputfield">
            <p className="form__alert">
              {alertMessage ? "追加しました！" : ""}
            </p>
            <CustomButton type="submit" secondary>
              追加
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Forms;
