import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    // Approach 4: Short circuit operator
    return this.state.isLoggedIn && <div>Welcome Khang</div>
  }
}

export default UserGreeting;
