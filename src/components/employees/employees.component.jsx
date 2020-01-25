import React, { Component } from "react";
import "./employees.styles.scss";
import CustomLink from "../custom-link/custom-link.component";

export class Employees extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="employees">
        <h1 className="employees__count-title">現在の従業員数: {`125`} 人</h1>
        <p className="employees__count-detail">
          <CustomLink to="/employees" light>
            一覧
          </CustomLink>
        </p>
      </div>
    );
  }
}

export default Employees;
