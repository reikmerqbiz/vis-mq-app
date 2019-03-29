import React, { Component } from 'react';
import { Chart } from 'react-google-charts';

class Sales extends Component {
  render() {
    return (
      <div className="sales-container">
        <Chart
          width={'90%'}
          height={'500px'}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={[
            [
              'x',
              // '#9 OI/ OIN Over-Issue News',
              // '#10 OMG Magazine',
              // '#11 OCC Old Corrugated Containers',
              // '#12 DS OCC Double-Sorted Old Corrugated',
              // '#13 DLK New Double Line Kraft Corrugated Cuttings',
              // '#14 Fiber Cores'
              '#11 OCC Old Corrugated Containers',
              '#13 DLK New Double Line Kraft Corrugated Cuttings',
              '#43 CBS Coated Book Stock'
            ],
            ['2017/Jan', 800, 500, 100],
            ['Feb', 900, 500, 300],
            ['Mar', 700, 300, 300],
            ['Apr', 1000, 300, 100],
            ['May', 1000, 300, 100],
            ['Jun', 1000, 600, 100],
            ['Jul', 800, 400, 100],
            ['Aug', 800, 200, 100],
            ['Sep', 900, 300, 50],
            ['Oct', 1200, 100, 100],
            ['Nov', 1200, 200, 200],
            ['Dec', 1000, 300, 200],
            ['2018/Jan', 700, 800, 200],
            ['Feb', 1200, 500, 400],
            ['Mar', 1300, 100, 400],
            ['Apr', 1400, 200, 400],
            ['May', 1200, 100, 100],
            ['Jun', 1000, 200, 100],
            ['Jul', 1400, 300, 100],
            ['Aug', 1300, 200, 100],
            ['Sep', 1000, 200, 200],
            ['Oct', 1400, 200, 100],
            ['Nov', 1500, 300, 200],
            ['Dec', 1500, 400, 200]
          ]}
          options={{
            hAxis: {
              title: ''
            },
            vAxis: {
              title: 'Tons'
            },
            series: {
              1: { curveType: 'function' }
            }
          }}
          rootProps={{ 'data-testid': '2' }}
        />
      </div>
    );
  }
}

export default Sales;
