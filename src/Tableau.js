import React, { Component } from 'react';
import tableau from 'tableau-api';
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
    this.viz1 = {};
    this.viz2 = {};
    this.viz3 = {};
    this.changeParam = this.changeParam.bind(this);
    this.changeParam2 = this.changeParam2.bind(this);
  }

  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://10ay.online.tableau.com/javascripts/api/viz_v1.js';
    script.async = true;
    document.body.appendChild(script);

    this.initViz();
  }

  initViz() {
    const options = {
      hideTabs: true,
      width: '700px',
      height: '400px'
    };
    // const vizUrl1 =
    //   'https://10ay.online.tableau.com/t/valhalla/views/sample0/quater-East';

    const vizUrl1 =
      'https://10ay.online.tableau.com/t/valhalla/views/suppliermap/Dashboard1';
    const vizContainer1 = this.vizContainer1;
    options.height = '600px';
    this.viz1 = new window.tableau.Viz(vizContainer1, vizUrl1, options);

    const vizUrl2 =
      'https://10ay.online.tableau.com/t/valhalla/views/GreenpacParamTest0/OrderHistory-East';
    const vizContainer2 = this.vizContainer2;
    this.viz2 = new window.tableau.Viz(vizContainer2, vizUrl2, options);

    const vizUrl3 =
      'https://10ay.online.tableau.com/t/valhalla/views/ParamExample0/MultipleFields';
    const vizContainer3 = this.vizContainer3;
    this.viz3 = new window.tableau.Viz(vizContainer3, vizUrl3, options);
  }

  changeParam(value = 'Broker') {
    let workbook = this.viz1.getWorkbook();
    workbook
      .changeParameterValueAsync('Customer Type', value)

      .then(function(data) {
        alert('success', 'data');
      })

      .otherwise(function(err) {
        alert('failed: ' + err);
      });
  }

  changeParam1(value = 'All') {
    let workbook = this.viz2.getWorkbook();

    // workbook
    //   .getParametersAsync()
    //   .then(function (paramObjs) {
    //     alert('success');
    //     console.log(paramObjs);
    //     let params;
    //     for (var i = 0; i < paramObjs.length; i++) {
    //       try {
    //         var name = paramObjs[i].getName();

    //         var value = paramObjs[i].getCurrentValue();

    //         params[name] = value.value;
    //       } catch (e) { }

    //       console.log(params);
    //     }
    //   });

    // workbook
    //   .changeParameterValueAsync('Region', value)
    //   .then(function() {
    //     //      alert('success');
    //   })
    //   .otherwise(function(err) {
    //     alert('failed: ' + err);
    //   });

    //workbook.getWorksheet()[0].applyFilterAsync('RegionCalc', value, 'replace');

    let values = [];
    values.push(value);
    console.log('VVV', values);
    workbook.getActiveSheet().applyFilterAsync('Region', values, 'replace');
  }

  changeParam2(value = 'All') {
    let workbook = this.viz2.getWorkbook();

    let values = [];
    values.push(value);
    console.log('WWW', values);
    workbook.changeParameterValueAsync('RegionParam', values, 'replace');
  }

  changeParam3(value = 'All') {
    let workbook = this.viz3.getWorkbook();

    let values = [];
    values.push(value);
    console.log('ZZZ', values);
    workbook.changeParameterValueAsync(
      'Type String to filter',
      values,
      'replace'
    );
  }

  render() {
    return (
      <div style={wrapperStyles} className="Sisense">
        <h3>Tableau</h3>
        <div
          ref={div => {
            this.vizContainer1 = div;
          }}
        >
          {' '}
        </div>
        <button type="button" onClick={this.changeParam}>
          Broker
        </button>
        <hr />
        <div
          ref={div => {
            this.vizContainer2 = div;
          }}
        >
          {' '}
        </div>
        Apply Filter
        <button type="button" onClick={() => this.changeParam1('West')}>
          West
        </button>
        <button type="button" onClick={() => this.changeParam1('Central')}>
          Central
        </button>
        <button type="button" onClick={() => this.changeParam1('East')}>
          East
        </button>
        Update param
        <button type="button" onClick={() => this.changeParam2('West')}>
          West
        </button>
        <button type="button" onClick={() => this.changeParam2('Central')}>
          Central
        </button>
        <button type="button" onClick={() => this.changeParam2('East')}>
          East
        </button>
        <hr />
        <div
          ref={div => {
            this.vizContainer3 = div;
          }}
        >
          {' '}
        </div>
        <button type="button" onClick={() => this.changeParam3('Wisconsin')}>
          Wisconsin
        </button>
        <button type="button" onClick={() => this.changeParam3('West')}>
          West
        </button>
      </div>
    );
  }
}

export default Tableau;
