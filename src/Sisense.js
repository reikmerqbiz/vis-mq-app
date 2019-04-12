import React, { Component } from 'react';

import { sisenseSettings } from './config/sisense';
import Dashboard from './sisense/dashboard';
import './Sisense.css';
var QuickSightEmbedding = require('amazon-quicksight-embedding-sdk');

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
    var containerDiv0 = document.getElementById('dashboardContainer0');
    var options0 = {
      url:
        'https://us-west-2.quicksight.aws.amazon.com/embed/ec60d73daae24919a2c35e95af28434e/dashboards/dcb930aa-098a-4b3a-9eed-6a4c23c8fc8d?isauthcode=true&identityprovider=quicksight&code=AYABeHoMTp247MVJiaZsIQGGPwEAAAABAAdhd3Mta21zAEthcm46YXdzOmttczp1cy13ZXN0LTI6OTAwNjQ5NDI3MTk2OmtleS9iYzAzMTYzMy0xYzJiLTRlMzEtYWM5ZC0yODQ2NDkwZjEyM2YAuAECAQB40gT0H6ffs2IokH0UWaT8Za9YAN433tzCnQ3c3oKHzWUBUhVzvhgFE2juBDgwmVq9awAAAH4wfAYJKoZIhvcNAQcGoG8wbQIBADBoBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDKotbKhpbdrom2GEsAIBEIA77Si7novXRY6tSAQjwINS5Y3Y2JKyyrJzrh7vXlMbF-vhk_-ClY5wHYWi6je4YqnWxrHitC_UO9_lFb0CAAAAAAwAABAAAAAAAAAAAAAAAAAA0uubBcdzufXw_Lpu_zbL7v____8AAAABAAAAAAAAAAAAAAABAAAAm8_I4BFphPSzzbr1LejTEAyWquVH-w9waiFfFrEPSQ5cj3aNlkJaKU-jSioGg4Ex2AcY8JTcNOcoWh352xeSsWICTYQDvPqGwrA-EKSl32nJeFU6Cc0gy2nL6Nw9DKtbQTmPpujRoWVrpGycuozKrRcrq62AJ3mfO7mZHN3s-PPAqKx1nigJiOh7Ldb2nSHPrpgIrU_9qMyMcyxJVtH8dSFW8lrI0rBeLgTnrg%3D%3D',
      container: containerDiv0,
      // parameters: {
      //   country: 'United States'
      // },
      scrolling: 'no',
      height: '700px',
      width: '1000px'
    };
    const dashboard0 = QuickSightEmbedding.embedDashboard(options0);

    var containerDiv1 = document.getElementById('dashboardContainer1');
    var options1 = {
      // url:
      //   'https://us-west-2.quicksight.aws.amazon.com/embed/15fe55fecdec46d6a9c9e608ef42e6b2/dashboards/ef4d5a87-b8fe-4416-84a6-e43bbd923cf3?isauthcode=true&identityprovider=quicksight&code=AYABeFBn-MjJ_BynKYzCGrK0Wc0AAAABAAdhd3Mta21zAEthcm46YXdzOmttczp1cy13ZXN0LTI6OTAwNjQ5NDI3MTk2OmtleS9iYzAzMTYzMy0xYzJiLTRlMzEtYWM5ZC0yODQ2NDkwZjEyM2YAuAECAQB40gT0H6ffs2IokH0UWaT8Za9YAN433tzCnQ3c3oKHzWUBHDkwhmzPR4yGi52Z-8FNoAAAAH4wfAYJKoZIhvcNAQcGoG8wbQIBADBoBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDLr6dV03qXuAvPhnxwIBEIA7VPAdJKtQvueMJR6yT4hDoAzPAHV6UfB-RsItRXM4ngngzbXVqMPOSAUPJS2upuFzm-lTotgRXiegYzECAAAAAAwAABAAAAAAAAAAAAAAAAAAI2-xfyT8ZWGngjdus1Rc8f____8AAAABAAAAAAAAAAAAAAABAAAAmx6uHBpMmf8L5Up2wQnaOY2biwvnkBNzZOlmQ50pGNbBLaqsYsXfyDKX9_4eryD6MJdYrodkHEAwzfcCPm9DtroeySYaOP4i-J22gYHI_ZXoXQ9kQThp8ef9YDW6CoiogM8fuf5BNE9iE29UY16mRucHy2NIIGa5MlGEM2tCijxOs47YBwAyPQPlJ5ayRo42NRtKge3E87Xr71IhAPfghE-vJqRJDo9J28Oppg%3D%3D',
      url:
        'https://us-west-2.quicksight.aws.amazon.com/embed/a945cfc351384a4dacbb0bf461737f49/dashboards/a0d2beda-3e4e-4494-9744-d19d618246c4?isauthcode=true&identityprovider=quicksight&code=AYABeKvlIizReXKwgUB40Vhn6ToAAAABAAdhd3Mta21zAEthcm46YXdzOmttczp1cy13ZXN0LTI6OTAwNjQ5NDI3MTk2OmtleS9iYzAzMTYzMy0xYzJiLTRlMzEtYWM5ZC0yODQ2NDkwZjEyM2YAuAECAQB40gT0H6ffs2IokH0UWaT8Za9YAN433tzCnQ3c3oKHzWUBc-sMlbrS8re1Xbxj8mD6MQAAAH4wfAYJKoZIhvcNAQcGoG8wbQIBADBoBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDMJ0Vp6nDXjSYeP-uwIBEIA7uOtrUxxh-j7sYYNHFxYGj8MIJgzIO1RweA-QGiYX4W6YVdC9rv-h5a9i0gi5FwZr-dR2b-mQosUIe6sCAAAAAAwAABAAAAAAAAAAAAAAAAAAMekDduS81G6VZRVXlGwcY_____8AAAABAAAAAAAAAAAAAAABAAAAm_-UuT24ZRDGTGwlPLlcvvb2vi5o5FndD35IuhAmsV0d6GLGe-ifhL-2LTuVOMcqTIqQOjmMKloJMKh-6MAzrkv3uIan-ZrQ1PRM4Fe4NK_sQdcQQcJrsRtYYdzYNH-u4kmZKxtrTI8QNf_OaW6Ikmfaregnsmqx6NIqfXDsXusgkGFrbWqDPfisV5VC9XrMPkiTozMB2bmefKRe4l9vUi6VUJQ-U2-2zoDFPA%3D%3D',
      container: containerDiv1,
      // parameters: {
      //   country: 'United States'
      // },
      scrolling: 'no',
      height: '700px',
      width: '1000px'
    };
    const dashboard1 = QuickSightEmbedding.embedDashboard(options1);

    // dashboard.on("error", onError);
    //dashboard0.on('load', this.onDashboardLoad);
  }

  render() {
    return (
      <div style={wrapperStyles} className="Sisense">
        000
        <div id="dashboardContainer0">Dashboard 0</div>
        <div id="dashboardContainer1">Dashboard 1</div>
        111 aaa
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
