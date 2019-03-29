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
              '#9 OI/ OIN Over-Issue News',
              '#10 OMG Magazine',
              '#11 OCC Old Corrugated Containers',
              '#12 DS OCC Double-Sorted Old Corrugated',
              '#13 DLK New Double Line Kraft Corrugated Cuttings',
              '#14 Fiber Cores'
            ],
            ['Jan/2017', 0, 0, 7, 9, 5, 8],
            ['Feb/2017', 10, 5, 4, 7, 7, 4],
            ['Mar/2017', 23, 15, 22, 35, 12, 10],
            ['Apr/2017', 17, 94, 6, 3, 14, 12],
            ['May/2017', 18, 10, 66, 7, 8, 9],
            ['Jun/2017', 9, 5, 3, 4, 7, 2],
            ['Jul/2017', 11, 3, 23, 11, 10, 14],
            ['Aug/2017', 27, 19, 10, 9, 8, 8]
          ]}
          options={{
            hAxis: {
              title: 'Time'
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
