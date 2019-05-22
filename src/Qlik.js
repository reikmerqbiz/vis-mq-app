import React, { Component } from 'react';
import './Sisense.css';
import Highlight from 'react-highlight.js';
import QdtComponent from './components/QdtComponent';

const wrapperStyles = {
  width: '100%',
  maxWidth: 980,
  margin: '0 auto'
};

const viz1 = {
  type: 'QdtSelectionToolbar',
  props: {
    type: 'QdtSelectionToolbar',
    height: '300px'
  }
};
const viz2 = {
  type: 'QdtPicasso',
  props: {
    type: 'pie',
    cols: ['Case Owner Group', "=Num(Sum([Case Duration Time]), '##')"],
    // prio: 'svg',
    outerHeight: 600
  }
};

const disCode = {
  template: '<QdtComponent type={viz2.type} props={viz2.props} />',
  code: `const viz2 = {
            type: 'QdtPicasso',
            props: {
              type: 'pie',
              cols: ['Case Owner Group', '=Num(Avg([Case Duration Time]), "##")'],
              outerHeight: 300,
            },
        };`
};

class Qlik extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  iframe() {
    return {
      __html: `
      <iframe width="620" height="515" src="https://charts.qlikcloud.com/5cd9cdd710eb40000af40dc3/chart.html" frameborder="0"></iframe>
      `
    };
  }

  iframe2() {
    return {
      __html: `<iframe width="620" height="515" src="https://charts.qlikcloud.com/5cdc8c823f44b7000a1c9daf/chart.html" frameborder="0"></iframe>`
    };
  }

  iframe3() {
    return {
      __html: `<iframe width="620" height="515" src="https://charts.qlikcloud.com/5cdc8ece3db1f6000b070154/chart.html" frameborder="0"></iframe>`
    };
  }

  render() {
    return (
      <div style={wrapperStyles} className="Sisense">
        <h3>Qlik</h3>

        <h3>Qlik Dashboard embedding</h3>
        <div className="Sisense__iframe">
          <div dangerouslySetInnerHTML={this.iframe()} />
        </div>
        <div className="Sisense__iframe">
          <div dangerouslySetInnerHTML={this.iframe2()} />
        </div>
        <div className="Sisense__iframe">
          <div dangerouslySetInnerHTML={this.iframe3()} />
        </div>
        <div>
          <div className="row pb50">
            <div className="col-md-12 text-left">
              <QdtComponent type={viz1.type} props={viz1.props} />
            </div>
          </div>
          <div className="row pb50">
            <div className="col-md-12">
              <QdtComponent type={viz2.type} props={viz2.props} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-left">
              <h5>Define the props in your code</h5>
              <Highlight language="javascript">{disCode.code}</Highlight>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-left">
              <h5>Render in your Template</h5>
              <Highlight language="html">{disCode.template}</Highlight>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Qlik;
