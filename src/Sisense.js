import React, { Component } from 'react';

import { sisenseSettings } from './config/sisense';
import Dashboard from './sisense/dashboard';
import './Sisense.css';
const AWS = require('aws-sdk');

const QuickSightEmbedding = require('amazon-quicksight-embedding-sdk');

var quicksight = new AWS.Service({
  apiConfig: require('./aws/quicksight-2018-04-01.min.json'),
  region: 'us-east-1'
});

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

  componentDidMount() {}

  iframe() {
    return {
      __html: `
      <iframe id="ifm" name="ifm" width="80%" height="800px" frameborder="0" src="http://sisense.merqbiz.com:8081/app/main#/dashboards/5cab92b19feb360c1ced8a20?embed=true&r=false&h=false&i=false" scrolling="auto"></iframe>
      `
    };
  }

  onDashboardLoad(payload) {
    console.log('Do something when the dashboard is fully loaded.');
  }

  render() {
    return (
      <div style={wrapperStyles} className="Sisense">
        <h3>QuickSight</h3>
        <div id="dashboardContainer0" />
        <div id="dashboardContainer1" />
        <div id="dashboardContainerStatic0" />
        <div id="dashboardContainerStatic1" />
        <div id="dashboardContainerStatic2" />
        {/* <div id={sisenseSettings.applicationDivId} className="SisenseWrapper">
          <Dashboard> </Dashboard>
        </div> */}

        <h3>Sisense Dashboard embedding</h3>
        <div className="Sisense__iframe">
          <div dangerouslySetInnerHTML={this.iframe()} />
        </div>
        <h3>Tableau Dashboard embedding</h3>
        <div
          dangerouslySetInnerHTML={{
            __html:
              "<script type='text/javascript' src='https://10ay.online.tableau.com/javascripts/api/viz_v1.js'></script><div class='tableauPlaceholder' style='width: 680px; height: 570px;'><object class='tableauViz' width='680' height='570' style='display:none;'><param name='host_url' value='https%3A%2F%2F10ay.online.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='&#47;t&#47;valhalla' /><param name='name' value='cascadeexample&#47;MarketingLeads' /><param name='tabs' value='yes' /><param name='toolbar' value='yes' /><param name='showAppBanner' value='false' /><param name='filter' value='iframeSizedToWindow=true' /></object></div><div class='tableauPlaceholder' style='width: 500px; height: 427px;'><object class='tableauViz' width='500' height='427' style='display:none;'><param name='host_url' value='https%3A%2F%2F10ay.online.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='&#47;t&#47;valhalla' /><param name='name' value='supplier_vol0&#47;Dashboard1' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='showAppBanner' value='false' /><param name='filter' value='iframeSizedToWindow=true' /></object></div>"
          }}
        />
      </div>
    );
  }
}

export default Sisense;
