import React, { Component } from 'react';

import { sisenseSettings } from './config/sisense';
import Dashboard from './sisense/dashboard';
import './Sisense.css';

const wrapperStyles = {
  width: '100%',
  maxWidth: 980,
  margin: '0 auto'
};

const chartSampleUrl =
  'http://sisense.merqbiz.com:8081/app/main#/dashboards/5cab92b19feb360c1ced8a20?embed=true&h=true&i=true';
class Sisense extends Component {
  constructor() {
    super();
    this.state = {
      sisenseSettings: sisenseSettings
    };
  }

  componentDidMount() {
    // fetch(chartSampleUrl, {
    //   method: 'GET',
    //   mode: 'cors',
    //   // credentials: 'include',
    //   redirect: 'follow',
    //   referrerPolicy: 'origin-when-cross-origin'
    // })
    //   // fetch(chartSampleUrl)
    //   .then(function(response) {
    //     console.log('ZZZ response', response);`
    //     return response;
    //   })
    //   .then(function(myJson) {
    //     console.log('ZZZ MY JSON', JSON.stringify(myJson));
    //   });
  }
  iframe() {
    return {
      __html: `
      <iframe id="ifm" name="ifm" width="80%" height="800px" frameborder="0" src="http://sisense.merqbiz.com:8081/app/main#/dashboards/5cab92b19feb360c1ced8a20?embed=true&r=false&h=false&i=false" scrolling="auto"></iframe>
      `
    };
  }

  render() {
    return (
      <div style={wrapperStyles} className="Sisense">
        aaa
        <div id={sisenseSettings.applicationDivId} className="SisenseWrapper">
          <Dashboard> </Dashboard>
        </div>
        cccc
        <div className="Sisense__iframe">
          <div dangerouslySetInnerHTML={this.iframe()} />
        </div>
      </div>
    );
  }
}

export default Sisense;
