import React from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Panel,
  ButtonGroup,
  DropdownButton,
  MenuItem
} from 'react-bootstrap';

import { sisenseSettings } from './../config/sisense';
import './widget.css';
import { Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';

/*  Utility functions   */

//  Function to fix a CSS conflict w/ the Bootstrap framework and Sisense pivot table
function fixPivotStyle(widget) {
  //  ESLint workaround
  var $ = window.$;

  //  Find the element with a conflict
  var container = $('div#' + widget.oid),
    table = $('table#pivot_', container);

  //  Override the css
  table.css('table-layout', 'inherit');
}

//  Function to export a widget to CSV
function exportCSV(widget) {
  //  ESLint check
  var prism = window.prism;

  //  Get the Elasticube name
  var elasticube =
    typeof widget.$$model.datasource === 'string'
      ? widget.$$model.datasource
      : widget.$$model.datasource.title;

  //  Create the url for the API call
  var url = sisenseSettings.server + '/api/datasources/' + elasticube + '/jaql';

  //  Create the jaql payload
  var getJaql = JSON.parse(prism.debugging.GetJaql(widget.$$model));

  //  Request a simplified payload
  var jaql = {
    datasource: getJaql.datasource,
    metadata: getJaql.metadata
  };

  //  Get the $http service
  var $http = widget.$$model.$http;

  //  Make the API call
  $http.post(url, JSON.stringify(jaql)).then(function(response) {
    // Make sure the response is OK
    var isValid =
      response.status === 200 && response.data.headers && response.data.values;
    if (isValid) {
      //  Init string to contain the response
      var csv = 'data:text/csv;charset=utf-8,';

      //  Start with the column headers
      csv += response.data.headers.join(',') + '\n';

      //  Loop through each row
      for (var i = 0; i < response.data.values.length; i++) {
        //  Concatenate the row of data
        var thisRow = '';
        for (var j = 0; j < response.data.values[i].length; j++) {
          thisRow +=
            j < response.data.values[i].length
              ? response.data.values[i][j].data + ','
              : response.data.values[i][j].data;
        }

        //  Combine into a single object, adding newline characters if not the last row
        csv += i < response.data.values.length ? thisRow + '\n' : thisRow;
      }

      //  Create an anchor behind the scenes, with a link to the raw data
      var downloadLink = document.createElement('a');
      downloadLink.href = csv;
      downloadLink.download = widget.title + '.csv';

      //  Add to the page, click it, and remove from the dom
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  });
}

//  Function to export a widget to image
function exportImage(widget) {
  //  Find the div containing the widget
  var widgetContainer = widget.container[0];

  //  Create the export URL
  var url =
    sisenseSettings.server +
    '/api/v1/dashboards/' +
    widget.$$dashboard.id +
    '/widgets/' +
    widget.id +
    '/export/png?width=' +
    widgetContainer.offsetWidth +
    '&height=' +
    widgetContainer.offsetHeight;

  //  Open in a new window
  window.open(url);
}

/*  Sisense Dashboard component   */
class Widget extends React.Component {
  //  Component constructor
  constructor(props) {
    super(props);

    //  Initialize the component's state
    this.state = {
      divId: props.divId,
      dashboard: props.widget.$$dashboard.$$model,
      widget: props.widget
    };

    //  Will allow `this` to work within the callbacks
    this.loadWidget = this.loadWidget.bind(this);
    this.exportWidget = this.exportWidget.bind(this);
  }

  /*  Sisensejs initialization functions   */

  //  Load a specific widget
  loadWidget() {
    var $ = window.$;
    $('#' + this.state.divId).empty();

    //  Get a reference to the widget
    var widget = this.state.widget;

    //  Sisense pivot tables have a CSS conflict w/ Bootstrap CSS
    //  Add an event handler to fix the conflict
    if (widget.type === 'pivot') {
      widget.$$model.on('domready', fixPivotStyle);
    }

    //  Set the container of the widget
    widget.container = document.getElementById(this.state.divId);

    //  Render the widget
    widget.refresh();
  }

  //  Function to export the data behind a widget
  exportWidget(eventKey, event) {
    //  Handle different export options
    if (eventKey === 'csv') {
      //  CSV Exporting
      exportCSV(this.state.widget);
    } else if (eventKey === 'image') {
      //  Image Export
      exportImage(this.state.widget);
    }
  }

  /*  Component Handlers   */

  //  React handler, runs when the render process is finished
  componentDidMount() {
    //  Load the sisense.js library
    this.loadWidget();
  }

  //  Rendering function
  render() {
    console.log('rendering widget: ' + this.state.widget.title);

    return (
      <Col xs={12} sm={10} md={8} lg={6}>
        <div bsStyle="primary">
          <div>
            {this.state.widget.title}
            <ButtonGroup className="pull-right">
              <DropdownButton
                title=""
                bsSize="xsmall"
                id={'menu-' + this.state.widget.id}
              >
                <NavDropdown.Item eventKey="csv" onSelect={this.exportWidget}>
                  Download CSV
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="image" onSelect={this.exportWidget}>
                  Download Image
                </NavDropdown.Item>
              </DropdownButton>
            </ButtonGroup>
          </div>
          <div>
            <div className="sisenseWidgetContainer" id={this.state.divId} />
          </div>
        </div>
      </Col>
    );
  }
}

Widget.propTypes = {
  divId: PropTypes.string,
  widget: PropTypes.object
};

export default Widget;
