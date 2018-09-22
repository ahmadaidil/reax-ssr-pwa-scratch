import React, { Fragment } from 'react';

export default class Homepage extends React.Component {
  state = {
    text: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { text } = this.state;
    return (
      <Fragment>
        <header>
          <h1>Reax from scratch - SSR and PWA</h1>
        </header>
        <main>
          <input name="text" onChange={this.handleChange} value={text} />
          <p>your input text: {text}</p>
        </main>
        <footer>
          <p>&copy; 2k18 Ahmad Aidil</p>
        </footer>
      </Fragment>
    );
  }
}
