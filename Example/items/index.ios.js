/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  ListView,
} = React;
import ItemCell from 'react-native-item-cell';

var items = React.createClass({
  getInitialState: function() {
    var itemsArray = [
      'Item 1',
      'Item 2',
      'Item 3',
      'Settings',
      'It appears that the systematic use of complex symbols can be defined in such a way as to impose the extended c-command discussed in connection with (34).',
      'With this clarification, any associated supporting element is unspecified with respect to a corpus of utterance tokens upon which conformity has been defined by the paired utterance test.'
    ];
    var dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    return {
      ds: dataSource.cloneWithRows(itemsArray)
    };
  },
  _renderRow: function(rowData, sectionID, rowID, highlightRow) {
    if (rowID === '1') {
      return (
        <ItemCell
          icon={{uri: 'http://sourcefreeze.com/wp-content/uploads/2015/04/react-native.png'}}>
          URL Icon - {rowData}
        </ItemCell>
      )
    }
    if (rowID === '5') {
      return (
        <ItemCell
          icon={{uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'}}>
          URL Icon - {rowData}
        </ItemCell>
      )
    }
    if (rowID === '2') {
      return (
        <ItemCell showDisclosureIndicator={true} icon={require('./apsl.png')}>
          Local image - {rowData}
        </ItemCell>
      )
    }
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
