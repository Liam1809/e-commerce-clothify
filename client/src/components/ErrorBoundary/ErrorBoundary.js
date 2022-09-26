import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      info: '',
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true, infor: info });
  }

  render() {
    console.log(this.state);
    return <>{this.props.childrent}</>;
  }
}

export default ErrorBoundary;
