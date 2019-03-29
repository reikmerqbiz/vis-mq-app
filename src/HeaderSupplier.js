import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';

import {
  IconSettings,
  GlobalHeader,
  GlobalHeaderButton,
  GlobalHeaderProfile
} from '@salesforce/design-system-react';
class HeaderSupplier extends Component {
  render() {
    return (
      <IconSettings iconPath="/icons">
        <GlobalHeader
          logoSrc="/icons/styro.jpg"
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
            variant="brand"
          />
          <GlobalHeaderButton
            className="slds-m-right_small"
            iconVariant={null}
            label="Message"
            onClick={() => {
              console.log('>>> onClick');
            }}
            variant="success"
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
      </IconSettings>
    );
  }
}

export default HeaderSupplier;
