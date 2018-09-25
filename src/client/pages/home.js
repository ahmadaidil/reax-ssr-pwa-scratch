import React, { Fragment } from 'react';
import { PageHeader } from '../components/commons';

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
        <PageHeader />
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
