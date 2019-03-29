import React, { Component } from 'react';
import { Chart } from 'react-google-charts';

class Inventory extends Component {
  render() {
    return (
      <div className="inventory-container">
        <Chart
          width={'90%'}
          height={'400px'}
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={[
            [
              'Year',
              '#11 OCC Old Corrugated Containers',
              '#13 DLK New Double Line Kraft Corrugated Cuttings',
              '#43 CBS Coated Book Stock'
            ],
            ['2017/Jan', 100, 200, 1000],
            ['2017/Feb', 200, 300, 500],
            ['2017/Mar', 200, 300, 500],
            ['2017/Apr', 200, 300, 50],
            ['2017/May', 200, 300, 50]
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
