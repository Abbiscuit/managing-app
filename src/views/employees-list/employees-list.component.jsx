import React, { Component } from "react";
import "./employees-list.styles.scss";
import UsersList from "../../components/users-list/users-list.component";

class EmployeesList extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        this.setState({ users: json });
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  render() {
    const { users } = this.state;
    return (
      <div className="employees-list">
        <h1 className="employees-list__count-title">
          現在の従業員数: {`125`} 人
        </h1>

        {users.map((user, index) => {
          return <UsersList key={index} user={user} />;
        })}
      </div>
    );
  }
}

export default EmployeesList;
