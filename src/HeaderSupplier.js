import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';

import {
  IconSettings,
  GlobalHeader,
  GlobalHeaderButton,
  GlobalHeaderProfile,
  Modal,
  Button,
  Lookup,
  Combobox
} from '@salesforce/design-system-react';

const leadSourceOptions = [
  { id: 1, label: 'Third Party Program', value: 'A0' },
  { id: 2, label: 'Cold Call', value: 'B0' },
  { id: 3, label: 'LinkedIn', value: 'C0' },
  { id: 4, label: 'Direct Mail', value: 'D0' },
  { id: 5, label: 'Other', value: 'E0' }
];

const opportunityTypeOptions = [
  { id: 1, label: 'Add on Business', value: 'A0' },
  { id: 2, label: 'Courtesy', value: 'B0' },
  { id: 3, label: 'New Business', value: 'C0' },
  { id: 4, label: 'Renewal', value: 'D0' },
  { id: 5, label: 'Upgrade', value: 'E0' }
];
class HeaderSupplier extends Component {
  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  windowOpen = () => {
    window.open('https://buyer.merqbiz.com/cms/about/seller/id/374/', '_blank');
  };
  state = {
    isOpen: false,
    leadSourceSelection: [leadSourceOptions[0]],
    opportunityTypeSelection: [opportunityTypeOptions[0]]
  };

  render() {
    return (
      <IconSettings iconPath="/icons">
        <Modal
          dismissible={false}
          footer={[
            <Button key="promptBtn" label="Got it" onClick={this.toggleOpen} />
          ]}
          isOpen={this.state.isOpen}
          onRequestClose={this.toggleOpen}
          prompt="success"
          size="medium"
          title={<span>Company Info</span>}
          className="modal_company"
        >
          <div className="slds-m-around_medium">
            <div className="modal_company_title">
              <span>Allied Waste Services Of North America, LLC</span>
            </div>

            <div className="row modal_company_info1">
              <div>Member since 2018 </div>
              <div>Transactions to date: 14 </div>
            </div>
            <div class="row">
              <div>
                <ul>
                  <li>
                    <p>
                      <span>Business type :</span> Broker
                    </p>
                    <p>
                      <span>Year Established :</span> 1991
                    </p>
                    <p>
                      <span>Location :</span> Los Angeles, California
                    </p>
                    <p>
                      <span>Total Employees :</span>{' '}
                    </p>
                  </li>
                </ul>
              </div>

              <div>
                <span>Pick up facility information</span>
                <ul>
                  <li>
                    <p>Allied Waste Services of North America, LLC</p>
                  </li>
                  <li>
                    <p>Allied Waste/Republic Buffalo Recyclery</p>
                  </li>
                  <li>
                    <p>Allied Waste Services of North America, LLC</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Modal>
        <GlobalHeader logoSrc="/icons/republic.png">
          <GlobalHeaderButton
            className="slds-m-right_medium "
            iconVariant={null}
            label="Company Info"
            onClick={this.toggleOpen}
            variant="neutral"
          />
          <GlobalHeaderButton
            className="slds-m-right_medium float_left"
            iconVariant={null}
            label="Listings"
            onClick={this.windowOpen}
            variant="neutral"
          />

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
