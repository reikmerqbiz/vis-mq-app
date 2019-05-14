import React, { Component } from 'react';
import './Sisense.css';

const wrapperStyles = {
  width: '100%',
  maxWidth: 980,
  margin: '0 auto'
};

class Qlik extends Component {
  constructor() {
    super();
    this.state = {};
    this.viz1 = {};
    this.viz2 = {};
    this.viz3 = {};
    this.changeParam = this.changeParam.bind(this);
    this.changeParam1 = this.changeParam1.bind(this);
  }

  componentDidMount() {}

  initViz() {
    const options = {
      hideTabs: true,
      width: '700px',
      height: '400px'
      // onFirstInteractive: () => {
      //   const sheet = this.viz1
      //     .getWorkbook()
      //     .getActiveSheet()
      //     .getWorksheets()
      //     .get('Table');
      //   const options = {
      //     ignoreAliases: false,
      //     ignoreSelection: false,
      //     includeAllColumns: false
      //   };
      //   sheet.getUnderlyingDataAsync(options).then(t => {
      //     const tableauData = t.getData();
      //     let data = [];
      //     const pointCount = tableauData.length;
      //     for (let a = 0; a < pointCount; a++) {
      //       data = data.concat({
      //         x: tableauData[a][0].value,
      //         y: Math.round(tableauData[a][3].value, 2)
      //       });
      //     }
      //   });
      // }
    };
    const vizUrl1 =
      'https://10ay.online.tableau.com/t/valhalla/views/sample0/quater-East';
    const vizContainer1 = this.vizContainer1;
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

  iframe() {
    return {
      __html: `
      <iframe width="620" height="515" src="https://charts.qlikcloud.com/5cd9cdd710eb40000af40dc3/chart.html" frameborder="0"></iframe>
      `
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
      </div>
    );
  }
}

export default Qlik;
