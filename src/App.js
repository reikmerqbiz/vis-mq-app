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
      <IconSettings iconPath="/icons">
        <Switch>
          <Route path="/supplier/:id" component={HeaderSupplier} />
          <Route exact path="/" component={Header} />
        </Switch>

        <Router>
          <Route
            render={({ location, history }) => (
              <React.Fragment>
                <SideNav>
                  <SideNav.Toggle navitemClassName="merq-left-nav" />
                  <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="/">
                      <NavIcon>
                        <i
                          className="fa fa-fw fa-home"
                          style={{ fontSize: '1.75em' }}
                        />
                      </NavIcon>
                      <NavText>Home</NavText>
                    </NavItem>
                    <NavItem eventKey="/">
                      <NavIcon>
                        <i
                          className="fa fa-fw fa-line-chart"
                          style={{ fontSize: '1.75em' }}
                        />
                      </NavIcon>
                      <NavText>Charts</NavText>
                      <NavItem eventKey="/supplier/21">
                        <NavText>Line Chart</NavText>
                      </NavItem>
                      <NavItem eventKey="charts/barchart">
                        <NavText>Bar Chart</NavText>
                      </NavItem>
                    </NavItem>
                  </SideNav.Nav>
                </SideNav>

                <div className="outer-container">
                  <Switch>
                    <Route exact path="/" component={Map0} />
                  </Switch>
                  <div>
                    <Switch>
                      <Route path="/supplier/:id" component={Supplier} />
                    </Switch>
                  </div>
                </div>
              </React.Fragment>
            )}
          />
        </Router>
      </IconSettings>
    );
  }
}

export default App;
