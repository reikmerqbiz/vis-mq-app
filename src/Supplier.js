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
import {
  Button,
  Dropdown,
  ButtonGroup,
  ButtonStateful,
  IconSettings,
  Card,
  CardEmpty,
  CardFilter,
  DataTable,
  DataTableColumn,
  Icon,
  Avatar,
  GlobalHeader,
  GlobalHeaderButton,
  GlobalHeaderDropdown,
  GlobalHeaderProfile,
  GlobalHeaderSearch,
  VerticalNavigation,
  Tabs,
  TabsPanel
} from '@salesforce/design-system-react';

import request from 'axios';
import ReactTooltip from 'react-tooltip';
import Logo from './img/earth911_white.png';
import Inventory from './Inventory';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Supplier.css';

class Supplier extends Component {
  render() {
    console.log(this.props.match);
    return (
      <div className="supplier-container">
        <h2> Supplier Data</h2>
        <img src={Logo} width="200" />
        <Tabs variant="scoped" id="tabs-example-scoped">
          <TabsPanel label="Inventory chart">
            <Inventory />
          </TabsPanel>
          <TabsPanel label="Sales chart">Sales chart</TabsPanel>
          <TabsPanel label="Quality chart">Quality chart</TabsPanel>
          <TabsPanel disabled label="Disabled">
            Disabled Content
          </TabsPanel>
        </Tabs>
      </div>
    );
  }
}

export default Supplier;
