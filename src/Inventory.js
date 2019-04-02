import React, { Component } from 'react';
import { Chart } from 'react-google-charts';

class Inventory extends Component {
  render() {
    return (
      <div className="inventory-container">
        <Chart
          width={'98%'}
          height={'400px'}
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={[
            [
              '',
              '#11 OCC Old Corrugated Containers',
              '#13 DLK New Double Line Kraft Corrugated Cuttings',
              '#43 CBS Coated Book Stock'
            ],
            ['2017/Jan', 1200, 800, 300],
            ['Feb', 1200, 700, 500],
            ['Mar', 1400, 300, 500],
            ['Apr', 1500, 300, 200],
            ['May', 1200, 300, 200],
            ['Jun', 1300, 800, 100],
            ['Jul', 1200, 500, 100],
            ['Aug', 1000, 400, 140],
            ['Sep', 1400, 600, 180],
            ['Oct', 1500, 500, 200],
            ['Nov', 1700, 800, 300],
            ['Dec', 1000, 600, 340],
            ['2018/Jan', 1200, 800, 200],
            ['Feb', 1200, 700, 400],
            ['Mar', 1300, 300, 500],
            ['Apr', 1400, 300, 400],
            ['May', 1200, 300, 200],
            ['Jun', 1500, 200, 100],
            ['Jul', 1700, 300, 200],
            ['Aug', 1900, 300, 200],
            ['Sep', 2200, 400, 300],
            ['Oct', 2300, 300, 100],
            ['Nov', 2100, 500, 300],
            ['Dec', 2000, 600, 200]
          ]}
          options={{
            // Material design options
            chart: {
              title: '',
              subtitle: 'Availability Volume Change: 2017/Jan - 2018/Dec'
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
