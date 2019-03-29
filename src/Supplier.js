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
        <Card heading="Top 3 Paper Grade Availability">
          <Inventory />
        </Card>
        <Card heading="Sales history">
          <Sales />
        </Card>
        <Card heading="Sales history">
          <Quality />
        </Card>
      </div>
    );
  }
}

export default Supplier;
