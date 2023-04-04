import React, { createContext, Component } from "react";

export const LoginContext = createContext();

class LoginContextProvider extends Component {
  state = {
    isLoggedIn: false,
    isAdmin: false,
    branch: null,
    semester: null,
    email: null,
  }
  toggleAdmin = () => {
    this.setState({isAdmin : !this.state.isAdmin});
  }
  toggleLoggedIn = () => {
    this.setState({isLoggedIn: !this.state.isLoggedIn});
  }
  render() {
    return (
      <LoginContext.Provider value={{ ...this.state, toggleAdmin: this.toggleAdmin, toggleLoggedIn: this.toggleLoggedIn }}>
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}

export default LoginContextProvider;
