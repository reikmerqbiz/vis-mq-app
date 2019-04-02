import React, { Component } from 'react';
import { Chart } from 'react-google-charts';

class Quality extends Component {
  render() {
    return (
      <div className="quality-container">
        <Chart
          width={'90%'}
          height={'500px'}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={[
            [
              'x',
              '#9 OI/ OIN Over-Issue News',

              '#11 OCC Old Corrugated Containers',
              '#12 DS OCC Double-Sorted Old Corrugated',
              '#13 DLK New Double Line Kraft Corrugated Cuttings',
              '#43 CBS Coated Book Stock'
            ],
            ['2017/Jan', 80, 78, 90, 70, 89],
            ['Feb', 82, 78, 91, 73, 83],
            ['Mar', 80, 76, 93, 71, 84],
            ['Apr', 79, 75, 92, 73, 84],
            ['May', 74, 74, 85, 75, 82],
            ['Jun', 78, 76, 86, 77, 81],
            ['Jul', 80, 77, 83, 75, 80],
            ['Aug', 81, 75, 82, 73, 85],
            ['Sep', 83, 78, 84, 77, 85],
            ['Oct', 79, 74, 84, 76, 90],
            ['Nov', 80, 76, 85, 72, 87],
            ['Dec', 77, 72, 88, 74, 84],
            ['2018/Jan', 77, 71, 86, 74, 85],
            ['Feb', 82, 73, 82, 74, 84],
            ['Mar', 83, 75, 84, 72, 88],
            ['Apr', 82, 78, 88, 78, 87],
            ['May', 84, 77, 86, 74, 88],
            ['Jun', 85, 74, 88, 72, 86],
            ['Jul', 83, 72, 90, 75, 85],
            ['Aug', 85, 73, 86, 76, 88],
            ['Sep', 80, 77, 84, 72, 80],
            ['Oct', 82, 80, 88, 80, 84],
            ['Nov', 83, 81, 84, 79, 80],
            ['Dec', 80, 79, 89, 76, 82]
          ]}
          options={{
            hAxis: {
              title: ''
            },
            vAxis: {
              title: 'Recyclability %'
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

export default Quality;
