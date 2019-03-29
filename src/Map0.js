import React, { Component } from 'react';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker
} from 'react-simple-maps';
import { scaleLinear } from 'd3-scale';
import request from 'axios';
import ReactTooltip from 'react-tooltip';

import './Map0.css';

const wrapperStyles = {
  width: '100%',
  maxWidth: 980,
  margin: '0 auto'
};

const supScale = scaleLinear()
  .domain([0, 10000])
  .range([1, 25]);

class Map0 extends Component {
  constructor() {
    super();
    this.state = {
      suppliers: [],
      buyers: []
    };
    this.fetchSuppliers = this.fetchSuppliers.bind(this);
    this.fetchBuyers = this.fetchBuyers.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      ReactTooltip.rebuild();
    }, 100);
    this.fetchSuppliers();
    this.fetchBuyers();
  }
  fetchSuppliers() {
    request.get('/map/volume.json').then(res => {
      this.setState({
        suppliers: res.data
      });
    });
  }
  fetchBuyers() {
    request.get('/map/buyer.json').then(res => {
      this.setState({
        buyers: res.data
      });
    });
  }
  render() {
    return (
      <div style={wrapperStyles}>
        {/* 
          <Link to="/aaa">AAA</Link> */}

        <ComposableMap
          projection="albersUsa"
          projectionConfig={{
            scale: 1000
          }}
          width={980}
          height={551}
          style={{
            width: '100%',
            height: 'auto'
          }}
        >
          <ZoomableGroup disablePanning>
            <Geographies geography="/map/states.json">
              {(geographies, projection) =>
                geographies.map(
                  (geography, i) =>
                    geography.id !== 'ATA' && (
                      <Geography
                        key={i}
                        geography={geography}
                        projection={projection}
                        style={{
                          default: {
                            fill: '#ECEFF1',
                            stroke: '#607D8B',
                            strokeWidth: 0.75,
                            outline: 'none'
                          },
                          hover: {
                            fill: '#ECEFF1',
                            stroke: '#607D8B',
                            strokeWidth: 0.75,
                            outline: 'none'
                          },
                          pressed: {
                            fill: '#ECEFF1',
                            stroke: '#607D8B',
                            strokeWidth: 0.75,
                            outline: 'none'
                          }
                        }}
                      />
                    )
                )
              }
            </Geographies>

            <Markers>
              {this.state.suppliers.map((sup, i) => (
                <Marker key={i} marker={sup}>
                  <circle
                    cx={0}
                    cy={0}
                    r={supScale(sup.volume)}
                    fill="rgba(255,87,34,0.8)"
                    stroke="#607D8B"
                    strokeWidth="0.2"
                    data-tip={`<a href="/supplier/${sup.company_id}">${
                      sup.name
                    }<br />${sup.volume} tons</a>`}
                    data-class="supplier-bubble"
                    data-html={true}
                  />
                </Marker>
              ))}
            </Markers>
            <Markers>
              {this.state.buyers.map((buyer, i) => (
                <Marker
                  key={i}
                  marker={buyer}
                  style={{
                    default: { stroke: '#386fe7' },
                    hover: { stroke: '#334CFF' },
                    pressed: { stroke: '#FF5722' }
                  }}
                >
                  <g transform="translate(-12, -24)">
                    <path
                      fill="none"
                      strokeWidth="3"
                      strokeLinecap="square"
                      strokeMiterlimit="10"
                      strokeLinejoin="miter"
                      d="M20,9c0,4.9-8,13-8,13S4,13.9,4,9c0-5.1,4.1-8,8-8S20,3.9,20,9z"
                    />
                    <circle
                      fill="none"
                      strokeWidth="2"
                      strokeLinecap="square"
                      strokeMiterlimit="10"
                      strokeLinejoin="miter"
                      cx="12"
                      cy="9"
                      r="3"
                    />
                  </g>
                  <text
                    textAnchor="bottom"
                    x="-40"
                    y="12"
                    style={{
                      fontFamily: 'Roboto, sans-serif',
                      fontSize: '16px',
                      fill: '#386fe7',
                      stroke: 'none',
                      hover: { stroke: '#334CFF' }
                    }}
                  >
                    {buyer.name}
                  </text>
                </Marker>
              ))}
            </Markers>
          </ZoomableGroup>
        </ComposableMap>
        <ReactTooltip
          class="supplier-bubble"
          effect="float"
          type="light"
          html={true}
          delayHide={1000}
          clickable={true}
        />
      </div>
    );
  }
}

export default Map0;
