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
import Sales from './Sales';
import Quality from './Quality';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Supplier.css';

class Supplier extends Component {
  render() {
    console.log(this.props.match);
    return (
      <div className="supplier-container">
        <h2> Supplier Data</h2>
        <img src={Logo} width="200" />
        <Card heading="Availability">
          <h3>Availability</h3>
          <Inventory />
        </Card>
        <Card heading="Sales history">
          <h3>Sales history</h3>
          <Sales />
        </Card>
        <Card heading="Sales history">
          <h3>Quality data</h3>
          <Quality />
        </Card>
      </div>
    );
  }
}

export default Supplier;
