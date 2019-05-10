import React, { Component } from 'react';

import './Sisense.css';

const wrapperStyles = {
  width: '100%',
  maxWidth: 980,
  margin: '0 auto'
};

class Tableau extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://10ay.online.tableau.com/javascripts/api/viz_v1.js';
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <div style={wrapperStyles} className="Sisense">
        <h3>Tableau</h3>
        {/* <div className="Sisense__iframe">
          <div
            className="Sisense__iframe__embed"
            dangerouslySetInnerHTML={{
              __html:
                "<script type='text/javascript' src='https://10ay.online.tableau.com/javascripts/api/viz_v1.js'></script><div class='tableauPlaceholder' style='width: 680px; height: 570px;'><object class='tableauViz' width='680' height='570' style='display:none;'><param name='host_url' value='https%3A%2F%2F10ay.online.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='&#47;t&#47;valhalla' /><param name='name' value='cascadeexample&#47;MarketingLeads' /><param name='tabs' value='yes' /><param name='toolbar' value='yes' /><param name='showAppBanner' value='false' /><param name='filter' value='iframeSizedToWindow=true' /></object></div><div class='tableauPlaceholder' style='width: 500px; height: 427px;'><object class='tableauViz' width='500' height='427' style='display:none;'><param name='host_url' value='https%3A%2F%2F10ay.online.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='&#47;t&#47;valhalla' /><param name='name' value='supplier_vol0&#47;Dashboard1' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='showAppBanner' value='false' /><param name='filter' value='iframeSizedToWindow=true' /></object></div>"
            }}
          />`
        </div> */}

        <div className="Sisense__iframe">
          <div
            className="Sisense__iframe__embed"
            dangerouslySetInnerHTML={{
              __html:
                "<script type='text/javascript' src='https://10ay.online.tableau.com/javascripts/api/viz_v1.js'></script><div class='tableauPlaceholder'><object class='tableauViz'  width='100%' height='400'  style='display:none;'><param name='host_url' value='https%3A%2F%2F10ay.online.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='&#47;t&#47;valhalla' /><param name='name' value='sample0&#47;quater-East' /><param name='tabs' value='no' /><param name='toolbar' value='no' /><param name='showAppBanner' value='false' /><param name='filter' value='iframeSizedToWindow=true' /></object></div>"
            }}
          />
        </div>

        <div className="Sisense__iframe">
          <div
            className="Sisense__iframe__embed"
            dangerouslySetInnerHTML={{
              __html:
                "<script type='text/javascript' src='https://10ay.online.tableau.com/javascripts/api/viz_v1.js'></script><div class='tableauPlaceholder'><object class='tableauViz' width='100%' height='400' style='display:none;'><param name='host_url' value='https%3A%2F%2F10ay.online.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='&#47;t&#47;valhalla' /><param name='name' value='sample0&#47;Dashboard5' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='showAppBanner' value='false' /><param name='filter' value='iframeSizedToWindow=true' /></object></div>"
            }}
          />
        </div>

        <div className="Sisense__iframe">
          <div
            className="Sisense__iframe__embed"
            dangerouslySetInnerHTML={{
              __html:
                "<script type='text/javascript' src='https://10ay.online.tableau.com/javascripts/api/viz_v1.js'></script><div class='tableauPlaceholder'><object class='tableauViz' width='100%' height='600' style='display:none;'><param name='host_url' value='https%3A%2F%2F10ay.online.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='&#47;t&#47;valhalla' /><param name='name' value='sample0&#47;Sheet5' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='showAppBanner' value='false' /><param name='filter' value='iframeSizedToWindow=true' /></object></div>"
            }}
          />
        </div>

        <div className="Sisense__iframe">
          <div
            className="Sisense__iframe__embed"
            dangerouslySetInnerHTML={{
              __html:
                "<script type='text/javascript' src='https://10ay.online.tableau.com/javascripts/api/viz_v1.js'></script><div class='tableauPlaceholder'><object class='tableauViz' width='100%' height='800'  style='display:none;'><param name='host_url' value='https%3A%2F%2F10ay.online.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='&#47;t&#47;valhalla' /><param name='name' value='sample0&#47;Dashboard4' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='showAppBanner' value='false' /><param name='filter' value='iframeSizedToWindow=true' /></object></div>"
            }}
          />
        </div>
      </div>
    );
  }
}

export default Tableau;
