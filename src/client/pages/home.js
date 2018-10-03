import React, { Fragment } from 'react';
import { PageHeader } from '../components/commons';
import { reax } from '../images';

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
          <img src={reax} alt="reax" width="120" />
          <div>
            Icons made by&nbsp;
            <a href="http://www.freepik.com" title="Freepik">Freepik</a>
            &nbsp;from&nbsp;
            <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            &nbsp;is licensed by&nbsp;
            <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" rel="noopener noreferrer" target="_blank">CC 3.0 BY</a>
          </div>
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
