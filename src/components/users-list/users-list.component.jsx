import React from "react";
import { Link } from "react-router-dom";

import "./users-list.styles.scss";

const UsersList = ({ user }) => {
  return (
    <div className="users-list">
      <h4 className="users-list__name">{user.title}</h4>

      <p className="users-list__detail-btn">
        <Link to={`/employees/${user.id}`}>{user.title}</Link>
      </p>
    </div>
  );
};

export default UsersList;
