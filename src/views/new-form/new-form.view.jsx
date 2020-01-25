import React, { Component } from "react";

import Forms from "../../components/forms/forms.component";

class NewForm extends Component {
  state = {
    users: []
  };
  render() {
    const { users } = this.state;
    return (
      <div>
        <Forms users={users} />
      </div>
    );
  }
}

export default NewForm;
