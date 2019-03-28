import React, { Component } from 'react';
import { Chart } from 'react-google-charts';

class Inventory extends Component {
  render() {
    return (
      <div className={'my-pretty-chart-container'}>
        <Chart
          chartType="ScatterChart"
          data={[['Age', 'Weight'], [4, 5.5], [8, 12]]}
          width="100%"
          height="400px"
          legendToggle
        />

        <Chart
          width={'900px'}
          height={'300px'}
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={[
            ['Year', 'grade', 'volume'],
            ['2017/Jan', '#11 OCC Old Corrugated Containers', 1000],
            ['2017/Jan', '#43 CBS Coated Book Stock', 200],
            [
              '2017/Jan',
              '#13 DLK New Double Line Kraft Corrugated Cuttings',
              660
            ],
            ['2017/Feb', '#11 OCC Old Corrugated Containers', 1000],
            ['2017/Feb', '#43 CBS Coated Book Stock', 200],
            [
              '2017/Feb',
              '#13 DLK New Double Line Kraft Corrugated Cuttings',
              660
            ],
            ['2017/Mar', '#11 OCC Old Corrugated Containers', 1000],
            ['2017/Mar', '#43 CBS Coated Book Stock', 200],
            [
              '2017/Mar',
              '#13 DLK New Double Line Kraft Corrugated Cuttings',
              660
            ]
          ]}
          options={{
            // Material design options
            chart: {
              title: 'Sales chart',
              subtitle: 'Sales and Volume: 2017/Jan - 2018/Dec'
            }
          }}
          // For tests
          rootProps={{ 'data-testid': '2' }}
          controls={[
            {
              controlEvents: [
                {
                  eventName: 'statechange',
                  callback: ({ chartWrapper, controlWrapper }) => {
                    alert(
                      'State changed to ' +
                        JSON.stringify(controlWrapper.getState())
                    );
                  }
                }
              ],
              controlType: 'CategoryFilter',
              options: {
                filterColumnIndex: 1,
                ui: {
                  labelStacking: 'vertical',
                  label: 'Paper Grade:',
                  allowTyping: false,
                  allowMultiple: false,
                  caption: 'choose paper grade'
                }
              }
            }
          ]}
        />
      </div>
    );
  }
}

export default Inventory;
