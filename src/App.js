import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
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
      { id: 'sell_grade_chart', label: 'Sale chart' },
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
        <GlobalHeader
          logoSrc="/icons/merQbiz-color-logo.png"
          onSkipToContent={() => {
            console.log('>>> Skip to Content Clicked');
          }}
          onSkipToNav={() => {
            console.log('>>> Skip to Nav Clicked');
          }}
        >
          <Avatar
            assistiveText={{ icon: 'Avatar image' }}
            imgSrc="https://earth911.com/wp-content/uploads/2018/05/logo_white.png"
            imgAlt="cascade"
            size="large"
          />
          {/* <GlobalHeaderSearch
            placeholder="Search Salesforce"
            onSelect={() => {
              console.log('>>> onSelect');
            }}
            options={[{ label: 'Email' }, { label: 'Mobile' }]}
          /> */}
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
          {/* <GlobalHeaderDropdown
            assistiveText={{ icon: 'Global Actions' }}
            id="global-header-dropdown-example"
            iconCategory="utility"
            iconName="add"
            onSelect={() => {
              console.log('>>> onSelect');
            }}
            options={[{ label: 'New Note' }, { label: 'Log a Call' }]}
          />
          <GlobalHeaderButton
            assistiveText={{ icon: 'Help and Training' }}
            iconCategory="utility"
            iconName="question"
            onClick={() => {
              console.log('>>> onClick');
            }}
          />
          <GlobalHeaderButton
            assistiveText={{ icon: 'Setup' }}
            iconCategory="utility"
            iconName="settings"
            onClick={() => {
              console.log('>>> onClick');
            }}
          /> */}
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
        <div className="outer-container">
          <Tabs variant="scoped" id="tabs-example-scoped">
            <TabsPanel label="Item One">Item One Content</TabsPanel>
            <TabsPanel label="Item Two">Item Two Content</TabsPanel>
            <TabsPanel label="Item Three">Item Three Content</TabsPanel>
            <TabsPanel disabled label="Disabled">
              Disabled Content
            </TabsPanel>
          </Tabs>
        </div>
        {/* 
        <div className="outer-container">
          <div style={{ width: '320px' }}>
            <VerticalNavigation
              id="sample-navigation"
              categories={sampleReportCategories}
              selectedId={this.state.selectedId}
              onSelect={(event, data) => {
                this.setState({ selectedId: data.item.id });
                if (this.props.action) {
                  const dataAsArray = Object.keys(data).map(key => data[key]);
                  this.props.action('onSelect')(event, data, ...dataAsArray);
                } else if (console) {
                  console.log('[onSelect] (event, data)', event, data);
                }
              }}
            />
          </div>

          <ButtonGroup>
            <ButtonStateful
              assistiveText={{ icon: 'Show Chart' }}
              buttonVariant="icon"
              iconName="chart"
              iconVariant="border"
              variant="icon"
            />
            <ButtonStateful
              assistiveText={{ icon: 'Filter List' }}
              iconName="filterList"
              iconVariant="border"
              variant="icon"
            />
            <Dropdown
              assistiveText={{ icon: 'Settings' }}
              checkmark
              iconCategory="utility"
              iconName="settings"
              iconVariant="more"
              id="icon-dropdown-example"
              onSelect={item => {
                console.log(item.label, 'selected');
              }}
              openOn="click"
              options={[
                { label: 'Bring left panel to front', value: 'A0' },
                { label: 'Bring right panel to front', value: 'B0' }
              ]}
              value="A0"
              variant="icon"
            />
          </ButtonGroup>

          <div className="slds-grid slds-grid_vertical">
            <Card
              id="ExampleCard"
              filter={
                (!isEmpty || this.state.isFiltering) && (
                  <CardFilter onChange={this.handleFilterChange} />
                )
              }
              headerActions={
                !isEmpty && (
                  <Button
                    label="Delete All Items"
                    onClick={this.handleDeleteAllItems}
                  />
                )
              }
              heading="Releated Items"
              icon={<Icon category="standard" name="document" size="small" />}
              empty={
                isEmpty ? (
                  <CardEmpty heading="No Related Items">
                    <Button label="Add Item" onClick={this.handleAddItem} />
                  </CardEmpty>
                ) : null
              }
            >
              <DataTable items={this.state.items} id="DataTableExample-1">
                <DataTableColumn
                  label="Opportunity Name"
                  property="name"
                  truncate
                />
              </DataTable>
            </Card>
          </div>
        </div> */}
      </IconSettings>
    );
  }
}

export default App;
