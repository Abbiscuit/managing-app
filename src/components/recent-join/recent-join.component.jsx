import React, { Component } from "react";
import "./recent-join.styles.scss";
import Forms from "../forms/forms.component";

class RecentJoin extends Component {
  state = {
    isToggle: false,
    users: []
  };

  render() {
    const { isToggle, users } = this.state;
    return (
      <div className="recent-join">
        <h1 className="recent-join__title">新規従業員</h1>
        <ul className="recent-join__list">
          {/* 3人まで表示する */}
          <li className="recent-join__list-item">test test test</li>
          <li className="recent-join__list-item">test test test</li>
          <li className="recent-join__list-item">test test test</li>
        </ul>
        <div className="recent-join__detail">
          {isToggle ? (
            <p onClick={() => this.setState({ isToggle: !isToggle })}>
              <i className="material-icons">arrow_drop_up</i>
            </p>
          ) : (
            <p onClick={() => this.setState({ isToggle: !isToggle })}>
              <i className="material-icons">arrow_drop_down</i>
            </p>
          )}
        </div>
        {isToggle ? <Forms users={users} /> : null}
      </div>
    );
  }
}

export default RecentJoin;
