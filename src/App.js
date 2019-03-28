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
// import ButtonGroup from '@salesforce/design-system-react/components/button-group';
// import ButtonStateful from '@salesforce/design-system-react/components/button-stateful';
// import Dropdown from '@salesforce/design-system-react/components/menu-dropdown';
// import IconSettings from '@salesforce/design-system-react/components/icon-settings';
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

import Supplier from './Supplier';

const sampleItems = [
  { id: '1', name: 'Cloudhub' },
  { id: '2', name: 'Cloudhub + Anypoint Connectors' },
  { id: '3', name: 'Cloud City' }
];

const sampleReportCategories = [
  {
    id: 'stats',
    label: 'Charts',
    items: [
      { id: 'inventory_chart', label: 'Inventory chart' },
      { id: 'sales_chart', label: 'Sales chart' },
      { id: 'quality_chart', label: 'Quality chart' }
    ]
  },
  {
    id: 'profie',
    label: 'Profie',
    items: [
      { id: 'about_profile', label: 'About ' },
      { id: 'facility_profile', label: 'Facilities' }
    ]
  }
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
        {/* <Logo /> */}
        <GlobalHeader
          logoSrc="/icons/merQbiz-color-logo.png"
          onSkipToContent={() => {
            console.log('>>> Skip to Content Clicked');
          }}
          onSkipToNav={() => {
            console.log('>>> Skip to Nav Clicked');
          }}
        >
          <GlobalHeaderButton
            className="slds-m-right_small"
            iconVariant={null}
            label="Connect"
            onClick={() => {
              console.log('>>> onClick');
            }}
            variant="neutral"
          />
          <GlobalHeaderButton
            className="slds-m-right_small"
            iconVariant={null}
            label="Message"
            onClick={() => {
              console.log('>>> onClick');
            }}
            variant="neutral"
          />
          <GlobalHeaderProfile
            avatar="/images/avatar2.jpg"
            id="global-header-profile-example"
            onClick={() => {
              console.log('>>> onClick');
            }}
            onSelect={() => {
              console.log('>>> onSelect');
            }}
            options={[{ label: 'Profile Menu' }]}
          />
        </GlobalHeader>

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
                    <NavItem eventKey="/supplier/21">
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
                  <Map0 />
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
