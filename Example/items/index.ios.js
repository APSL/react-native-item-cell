/* @flow */

import React from 'react'
import {
  AppRegistry,
  StyleSheet,
  ListView,
} from 'react-native'
import ItemCell from 'react-native-item-cell'

const items = React.createClass({
  getInitialState: function() {
    const itemsArray = [
      'Item 1',
      'Item 2',
      'Item 3',
      'Settings',
      'It appears that the systematic use of complex symbols can be defined in such a way as to impose the extended c-command discussed in connection with (34).',
      'With this clarification, any associated supporting element is unspecified with respect to a corpus of utterance tokens upon which conformity has been defined by the paired utterance test.'
    ]
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    return {
      ds: dataSource.cloneWithRows(itemsArray)
    }
  },

  _renderRow: function(rowData, sectionID, rowID, highlightRow) {
    if (rowID === '1') {
      return (
        <ItemCell
          subtitle='GraphQL is an amazing technology.'
          icon={require('./graphql.png')}>
          Local assets icon
        </ItemCell>
      )
    }
    if (rowID === '5') {
      return (
        <ItemCell
          icon={{uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'}}>
          {`URL Icon - ${rowData}`}
        </ItemCell>
      )
    }
    if (rowID === '2') {
      return (
        <ItemCell showDisclosureIndicator={true} icon={require('./apsl.png')}>
          Local image
        </ItemCell>
      )
    }
    if (rowID === '3') {
      return (
        <ItemCell icon={require('./rn.png')}>
          React Native
        </ItemCell>
      )
    }
    var disclosure = (rowID % 2 === 0) ? true : false;
    return (
      <ItemCell showDisclosureIndicator={disclosure}>
        {rowData}
      </ItemCell>
    )
  },

  render: function() {
    return (
      <ListView
        style={styles.container}
        contentInset={{top: 0}}
        automaticallyAdjustContentInsets={false}
        dataSource={this.state.ds}
        renderRow={this._renderRow}
      />
    )
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efedf4',
    paddingTop: 20,
  },
})

AppRegistry.registerComponent('items', () => items)
