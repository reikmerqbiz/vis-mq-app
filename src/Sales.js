import React, { Component } from 'react';
import { Chart } from 'react-google-charts';
import './Chart.css';

const gradeList = [
  '',
  '#11 OCC Old Corrugated Containers',
  '#13 DLK New Double Line Kraft Corrugated Cuttings',
  '#43 CBS Coated Book Stock'
];
const salesData = [
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
  ['Mar', 1300, 100, 440],
  ['Apr', 1400, 200, 400],
  ['May', 1200, 100, 100],
  ['Jun', 1000, 200, 100],
  ['Jul', 1400, 300, 100],
  ['Aug', 1300, 200, 100],
  ['Sep', 1000, 200, 200],
  ['Oct', 1400, 200, 100],
  ['Nov', 1550, 300, 200],
  ['Dec', 1500, 400, 200]
];
class Sales extends Component {
  getAverage = gradeNumber => {
    const sum = salesData.reduce((acc, monthData) => {
      return acc + parseInt(monthData[gradeNumber]);
    }, 0);

    return Math.floor(sum / salesData.length).toLocaleString('en-US');
  };

  render() {
    return (
      <div className="sales-container">
        <div className="sales-container__summary">
          <div className="average-data average-data--half">
            <div className="average-data-header">
              Average Monthly Sales Volume:
            </div>
            {gradeList.map((grade, index) => {
              if (index === 0) return;

              return (
                <div className="average-data-column">
                  <div className="average-data-column-grade">{grade}</div>
                  <div>{this.getAverage(index)} tons</div>
                </div>
              );
            })}
          </div>

          <div className="average-data  average-data--half">
            <div className="average-data-header">Top Sales Volume:</div>

            <div className="average-data-column">
              <div className="average-data-column-grade">
                #11 OCC Old Corrugated Containers
              </div>
              <div>2018 Nov</div>
              <div>1,550 tons</div>
            </div>
            <div className="average-data-column">
              <div className="average-data-column-grade">
                #13 DLK New Double Line Kraft Corrugated Cuttings
              </div>
              <div>2018 Jan</div>
              <div>1,550 tons</div>
            </div>
            <div className="average-data-column">
              <div className="average-data-column-grade">
                #43 CBS Coated Book Stock
              </div>
              <div>2018 Mar</div>
              <div>440 tons</div>
            </div>
          </div>
        </div>
        <Chart
          width={'96%'}
          height={'500px'}
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={[gradeList, ...salesData]}
          options={{
            // Material design options
            chart: {
              title: '',
              subtitle: '2017/Jan - 2018/Dec'
            }
          }}
          rootProps={{ 'data-testid': '2' }}
        />
      </div>
    );
  }
}

export default Sales;
