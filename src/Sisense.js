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
    const optionsStatic0 = {
      url:
        'https://us-west-2.quicksight.aws.amazon.com/embed/d4a146a6d2c34cdd83c9d0f163828cee/dashboards/dcb930aa-098a-4b3a-9eed-6a4c23c8fc8d?isauthcode=true&identityprovider=quicksight&code=AYABeHYSbeKg5k6zqr3lazERnNYAAAABAAdhd3Mta21zAEthcm46YXdzOmttczp1cy13ZXN0LTI6OTAwNjQ5NDI3MTk2OmtleS9iYzAzMTYzMy0xYzJiLTRlMzEtYWM5ZC0yODQ2NDkwZjEyM2YAuAECAQB40gT0H6ffs2IokH0UWaT8Za9YAN433tzCnQ3c3oKHzWUBk6-qFNdEaSLRrBHfoncEPAAAAH4wfAYJKoZIhvcNAQcGoG8wbQIBADBoBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDB2-TEKWQRuMLe182wIBEIA7tGQxUsJcfTvq2KHjhM7FKB4DKxHGaqI0X1DkgoBV3-a1Y8R1SoLQMRw1QmXDU_pH-bzQf4HpkoWXV_YCAAAAAAwAABAAAAAAAAAAAAAAAAAABYRB6HhsBH97Yy1XnIItuP____8AAAABAAAAAAAAAAAAAAABAAAAm-qjCjJAigQWJ5XLj2f09Kgo98qCNAIHk6x0EvCZaYPgUMTOhbchTxHXuVvA7P6TFex8vLSTy62sESycOHZ7BpsfxSF2u4BqAxZ8ng1V2FViJgU-0r517lzJHZUYI_FP0Igx3unR44wcMHCNvrGDNADcIVWGmn5zDkx5DweJLlOUCKc1ufm9ca2d4YhYq24X5637ognIZRF6UvZzUQ9nQHrzPtK3JpI346a1rg%3D%3D',
      container: document.getElementById('dashboardContainerStatic0'),
      scrolling: 'no',
      height: '400px',
      width: '600px'
    };

    const optionsStatic1 = {
      url:
        'https://us-west-2.quicksight.aws.amazon.com/embed/72f1faec0d664522ae3dbcd499ff20fe/dashboards/ef4d5a87-b8fe-4416-84a6-e43bbd923cf3?isauthcode=true&identityprovider=quicksight&code=AYABeEkDy1vlRlDgcVha1okplJ4AAAABAAdhd3Mta21zAEthcm46YXdzOmttczp1cy13ZXN0LTI6OTAwNjQ5NDI3MTk2OmtleS9iYzAzMTYzMy0xYzJiLTRlMzEtYWM5ZC0yODQ2NDkwZjEyM2YAuAECAQB40gT0H6ffs2IokH0UWaT8Za9YAN433tzCnQ3c3oKHzWUBr-55c8EAV5ug74mTZOmrbgAAAH4wfAYJKoZIhvcNAQcGoG8wbQIBADBoBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDDTmMyNDk-7Dt81CugIBEIA7PPteGlz57hATO_iWgFVRk9ry1do_XsMUvJyOC0c7sV7ZvsWr_UfQVbCznVzqmnH5lRZIm9IH7L5BA2ACAAAAAAwAABAAAAAAAAAAAAAAAAAAS0v8sMaWBA4SxhlArQY6Jf____8AAAABAAAAAAAAAAAAAAABAAAAmxPt7bXBWUwQ3ZC_vl1iVdM3qM9_T6ORIZiPnUrpWzrJ8TPnvHkMPWhwYpO3_eWHRC6YXxhiI9O-s-TTeYVuDIWU01DHVCzN8sEisyrKFjhfnjKFtaumFe9FrR3vPvuSKWatSSnuKzKMKGAZlgKjJYC8poUxUp4gkltg5PRvC9PrZRCqgHyG1_UvF2Ei7p-D6dAxPCgzXCMxe-TfHTbn8Tuz8I805lZPghiK0g%3D%3D',
      container: document.getElementById('dashboardContainerStatic0'),
      scrolling: 'no',
      height: '400px',
      width: '600px'
    };

    const optionsStatic2 = {
      url:
        'https://us-west-2.quicksight.aws.amazon.com/embed/4fd4b8f55b914db8ae7b892442362bf9/dashboards/a0d2beda-3e4e-4494-9744-d19d618246c4?isauthcode=true&identityprovider=quicksight&code=AYABeHqR62y17oR8wrQTJ3IVvkYAAAABAAdhd3Mta21zAEthcm46YXdzOmttczp1cy13ZXN0LTI6OTAwNjQ5NDI3MTk2OmtleS9iYzAzMTYzMy0xYzJiLTRlMzEtYWM5ZC0yODQ2NDkwZjEyM2YAuAECAQB40gT0H6ffs2IokH0UWaT8Za9YAN433tzCnQ3c3oKHzWUBEaIkLyv56uIevyP0Mmix5wAAAH4wfAYJKoZIhvcNAQcGoG8wbQIBADBoBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDE9HfrXb5Q3priKGDwIBEIA7QDvju-n1wdyxcmcOZD8z8oHm_GobJLEHru5l12KYkUrmnxg8pEHJaHfhZ6qe9d5mT-5kELGKsbeDfyQCAAAAAAwAABAAAAAAAAAAAAAAAAAAFgKruOYu7a7XPR8R0w8Buf____8AAAABAAAAAAAAAAAAAAABAAAAm213UROK4ZNDlEEkrzJvg-hDBDLLUoW73Y-gGk6SUOmyq_mP8glGtdwPL2szACxDpGldKjD5uWu85o3WnVzPOMTEHGvwDxghQgKP3D5yBKAjgBJpVQAVf1_Ol3w5FfXTK7Nm5J3CmPRtHcMexk5-ubKB7L_74OAahh-EMJYcaaiOB4BHCezxTi2qIXDe3587hIonhrSqLpeyrijMqOt8J2hBoW-EeMvpxS75mA%3D%3D',
      container: document.getElementById('dashboardContainerStatic2'),
      scrolling: 'no',
      height: '400px',
      width: '600px'
    };

    const dashboardStatic0 = QuickSightEmbedding.embedDashboard(optionsStatic0);
    const dashboardStatic1 = QuickSightEmbedding.embedDashboard(optionsStatic1);
    const dashboardStatic2 = QuickSightEmbedding.embedDashboard(optionsStatic2);
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
          SessionLifetimeInMinutes: 600,
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
