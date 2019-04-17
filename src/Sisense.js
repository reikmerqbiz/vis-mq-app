import React, { Component } from 'react';

import { sisenseSettings } from './config/sisense';
import Dashboard from './sisense/dashboard';
import './Sisense.css';
const AWS = require('aws-sdk');

const QuickSightEmbedding = require('amazon-quicksight-embedding-sdk');

var quicksight = new AWS.Service({
  accessKeyId: 'AKIAI4H4LCIDF2XM7TXQ',
  secretAccessKey: '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',
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
    this.embedDashboard();

    const script = document.createElement('script');
    script.src = 'https://10ay.online.tableau.com/javascripts/api/viz_v1.js';
    script.async = true;
    document.body.appendChild(script);
  }
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

  embedDashboard() {
    const optionsStatic = {
      url:
        'https://us-west-2.quicksight.aws.amazon.com/embed/839dc5f89fff4a9cb163f08bfaac9bc0/dashboards/14868214-4b40-4227-a81c-e0bc79e7f01f?isauthcode=true&identityprovider=quicksight&code=AYABeHhv85nh_Tq8qg2SZuf_yeoAAAABAAdhd3Mta21zAEthcm46YXdzOmttczp1cy13ZXN0LTI6OTAwNjQ5NDI3MTk2OmtleS9iYzAzMTYzMy0xYzJiLTRlMzEtYWM5ZC0yODQ2NDkwZjEyM2YAuAECAQB40gT0H6ffs2IokH0UWaT8Za9YAN433tzCnQ3c3oKHzWUBttZtHaeA_JzXM5i2R0bGwgAAAH4wfAYJKoZIhvcNAQcGoG8wbQIBADBoBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDCP61Zuc-S2xmUyzCQIBEIA7x7uA5gWMk1yI95FQZym9t1gxJ9m1dRe4OuczcLOJ8IkESefGuYr8jz1trC54ceKxebR6-bGJ-KqnOKYCAAAAAAwAABAAAAAAAAAAAAAAAAAAM0q5WQO2MR50bWgAcv_2i_____8AAAABAAAAAAAAAAAAAAABAAAAm2WiAij1xkYHujmJkA6-uQkY8x77EcP3riMOXnuLACvTb-yVjGGGZN5SAd6wwUUrE6UB-hvzzwqv28eqJM6exzgpRSLpEym3CaftL1icWcvoCDPQLQHc7TIuyWvXt5-bv3YSvzLlZ-y-0Pu1zwGOtoNZFl64YXvOr70jDCi-604YVv4eG371rM4wYxX5lTupk2hPTVQXfAEyBZk4qyIfWG0TOZcfQe-3xUlHHg%3D%3D',
      container: document.getElementById('dashboardContainerStatic'),
      scrolling: 'no',
      height: '400px',
      width: '600px'
    };

    const dashboardStatic = QuickSightEmbedding.embedDashboard(optionsStatic);

    const dashboardArray = [
      'a0d2beda-3e4e-4494-9744-d19d618246c4',
      'ef4d5a87-b8fe-4416-84a6-e43bbd923cf3'
    ];

    // const getEmbedUrl = 'https://7fa83cd0.ngrok.io/embedurl/';
    dashboardArray.forEach((dashboardId, index) => {
      quicksight.getDashboardEmbedUrl(
        {
          AwsAccountId: '686369546281',
          DashboardId: dashboardId,
          IdentityType: 'IAM',
          ResetDisabled: true,
          SessionLifetimeInMinutes: 100,
          UndoRedoDisabled: false
        },
        function(err, data) {
          if (err) {
            console.log('Errors: ');
            console.log(err);
          } else {
            console.log('Response: ');
            console.log(data);
            if (data.Status === 200) {
              const options = {
                url: data.EmbedUrl,
                container: document.getElementById(
                  'dashboardContainer' + index
                ),
                scrolling: 'no',
                height: '400px',
                width: '600px'
              };
              const dashboard = QuickSightEmbedding.embedDashboard(options);
            }
          }
        }
      );

      //   // fetch(getEmbedUrl + dashboardId)
      //   //   .then(response => {
      //   //     console.log('ZZZ', response);
      //   //     return response.json();
      //   //   })
      //   //   .then(res => {
      //   //     console.log('ZZZAAA', res);
      //   //     if (res.Status === 200) {
      //   //       const options = {
      //   //         url: res.EmbedUrl,
      //   //         container: document.getElementById('dashboardContainer' + index),
      //   //         scrolling: 'no',
      //   //         height: '700px',
      //   //         width: '1000px'
      //   //       };
      //   //       const dashboard = QuickSightEmbedding.embedDashboard(options);
      //   //     }
      //   //   })
      //   //   .catch(err => {
      //   //     console.log(err);
      //   //   });
    });

    // dashboard.on("error", onError);
    //dashboard0.on('load', this.onDashboardLoad);
  }

  render() {
    return (
      <div style={wrapperStyles} className="Sisense">
        <h3>QuickSight</h3>
        <div id="dashboardContainer0" />
        <div id="dashboardContainer1" />
        <div id="dashboardContainerStatic" />

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
