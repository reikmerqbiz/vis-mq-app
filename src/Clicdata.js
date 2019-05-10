import React, { Component } from 'react';

import './Sisense.css';

const wrapperStyles = {
  width: '100%',
  maxWidth: 980,
  margin: '0 auto'
};

class Clicdata extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  iframe0() {
    return {
      __html: `
      <iframe class="iframe-full" src="https://merqbiz2.clicdata.com/v/LNCtyzIN7ApO" ></iframe>
      `
    };
  }

  iframe(code) {
    return {
      __html: `
      <iframe class="iframe-full" src="https://merqbiz2.clicdata.com/v/${code}" ></iframe>
      `
    };
  }

  render() {
    return (
      <div style={wrapperStyles} className="Sisense">
        <h3>Clicdata</h3>

        <div className="Sisense__iframe">
          <div
            className="Sisense__iframe__embed"
            dangerouslySetInnerHTML={this.iframe('LNCtyzIN7ApO')}
          />
        </div>
        <div className="Sisense__iframe">
          <div
            className="Sisense__iframe__embed"
            dangerouslySetInnerHTML={this.iframe('oPurPIWLJF0V')}
          />
        </div>
        <div className="Sisense__iframe">
          <div
            className="Sisense__iframe__embed"
            dangerouslySetInnerHTML={this.iframe('0dS2tDRookEF')}
          />
        </div>
      </div>
    );
  }
}

export default Clicdata;
