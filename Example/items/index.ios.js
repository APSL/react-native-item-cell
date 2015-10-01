/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
} = React;
import ItemCell from 'react-native-item-cell';

var items = React.createClass({
  getInitialState: function() {
    var items = [
      'Item 1',
      'Item 2',
      'Item 3',
      'Settings',
      'It appears that the systematic use of complex symbols can be defined in such a way as to impose the extended c-command discussed in connection with (34).'
    ];
    var dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    return {
      ds: dataSource.cloneWithRows(items)
    };
  },
  _renderRow: function(rowData, sectionID, rowID, highlightRow) {
    var disclosure = (rowID % 2 === 0) ? true : false;
    return (
      <ItemCell showDisclosureIndicator={disclosure}>
        {rowData}
      </ItemCell>
    );
  },
  render: function() {
    return (
      <ListView style={styles.container}
        contentInset={{top: 0}}
        automaticallyAdjustContentInsets={false}
        dataSource={this.state.ds}
        renderRow={(rowData, sectionID, rowID, highlightRow) => this._renderRow(rowData, sectionID, rowID, highlightRow)}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 14,
  },
});

AppRegistry.registerComponent('items', () => items);
