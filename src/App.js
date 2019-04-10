import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from '@trendmicro/react-sidenav';

import './App.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
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

import Map0 from './Map0';
import Sisense from './Sisense';
import Header from './Header';
import HeaderSupplier from './HeaderSupplier';
import Supplier from './Supplier';

const sampleItems = [
  { id: '1', name: 'Cloudhub' },
  { id: '2', name: 'Cloudhub + Anypoint Connectors' },
  { id: '3', name: 'Cloud City' }
];

class App extends Component {
  static displayName = 'ButtonGroupExample';

  state = {
    items: sampleItems,
    isFiltering: false,
    selectedId: 'recent_reports'
  };

  handleFilterChange = event => {
    const filteredItems = sampleItems.filter(item =>
      RegExp(event.target.value, 'i').test(item.name)
    );
    this.setState({ isFiltering: true, items: filteredItems });
  };

  handleDeleteAllItems = () => {
    this.setState({ isFiltering: false, items: [] });
  };

  handleAddItem = () => {
    this.setState({ items: sampleItems });
  };

  render() {
    const isEmpty = this.state.items.length === 0;
    return (
      <div>
        <SideNav>
          <SideNav.Toggle className="merq-left-nav" />
          <SideNav.Nav defaultSelected="home">
            <NavItem>
              <NavIcon>
                <i
                  className="fa fa-fw fa-home"
                  style={{ fontSize: '1.75em' }}
                />
              </NavIcon>
              <i
                className="fa fa-fw fa-home"
                style={{ fontSize: '1.75em', verticalAlign: 'middle' }}
              />

              <NavText>
                <a href="/home">Home</a>
              </NavText>
            </NavItem>
            <NavItem eventKey="/">
              <NavIcon>
                <i
                  className="fa fa-fw fa-line-chart"
                  style={{ fontSize: '1.75em' }}
                />
              </NavIcon>
              <NavText>Account</NavText>
              <NavItem eventKey="/supplier/21">
                <NavText style={{ paddingLeft: 50 }}>Order History</NavText>
              </NavItem>
              <NavItem eventKey="charts/barchart">
                <NavText style={{ paddingLeft: 50 }}>Setting</NavText>
              </NavItem>
            </NavItem>
          </SideNav.Nav>
        </SideNav>

        {/* <IconSettings iconPath="/icons"> */}
        <Switch>
          <Route path="/supplier/:id" component={HeaderSupplier} />
          <Route exact path="/home" component={Header} />
          <Route exact path="/sisense" component={Header} />
        </Switch>

        <Router>
          <Route
            render={({ location, history }) => (
              <React.Fragment>
                <div className="outer-container">
                  <Switch>
                    <Route exact path="/home" component={Map0} />

                    <Route path="/supplier/:id" component={Supplier} />

                    <Route path="/sisense" component={Sisense} />
                  </Switch>
                </div>
              </React.Fragment>
            )}
          />
        </Router>
        {/* </IconSettings> */}
      </div>
    );
  }
}

export default App;
