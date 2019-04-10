import React, { Component } from 'react';

import './Header.css';

import {
  IconSettings,
  GlobalHeader,
  GlobalHeaderButton,
  GlobalHeaderProfile,
  GlobalHeaderDropdown
} from '@salesforce/design-system-react';
class Header extends Component {
  render() {
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
          <GlobalHeaderButton
            className="slds-m-right_small"
            iconVariant={null}
            label="Feedback"
            onClick={() => {
              console.log('>>> onClick');
            }}
            variant="brand"
          />
          <GlobalHeaderDropdown
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
          />
          <GlobalHeaderProfile
            avatar="https://www.cascades.com/static/assets/images/logo_cascades_en.png"
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

export default Header;
