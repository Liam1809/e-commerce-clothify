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
    console.log(error, info);
    this.setState({ hasError: true, infor: info });
  }

  render() {
    return <>{this.props.children}</>;
  }
}

export default ErrorBoundary;
