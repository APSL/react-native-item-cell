import React, { Component, View, Text, TouchableHighlight, PropTypes, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class ItemCell extends Component {
  render () {
    let touchableProps = {
      accessible: this.props.accessible,
      delayLongPress: this.props.delayLongPress,
      delayPressIn: this.props.delayPressIn,
      delayPressOut: this.props.delayPressOut,
      onLongPress: this.props.onLongPress,
      onPress: this.props.onPress,
      onPressIn: this.props.onPressIn,
      onPressOut: this.props.onPressOut,
    }
    return (
      <TouchableHighlight {...touchableProps}
        underlayColor='#D9D9D9'
        style={styles.container}>
        <View style={styles.viewContainer}>
          <View style={styles.paddingView} />
          <View style={[styles.textContainer, styles.bottomBorder]}>
            <Text style={styles.text}>
              {this.props.children}
            </Text>
          </View>
          <Icon style={[styles.chevron, styles.bottomBorder]}
            name='angle-right' size={22} />
        </View>
      </TouchableHighlight>
    )
  }
}

ItemCell.propTypes = {
  ...TouchableHighlight.propTypes,
  children: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 43,
    backgroundColor: 'white',
  },
  viewContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  paddingView: {
    width: 15,
    backgroundColor: 'transparent',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  text: {
    flex: 1,
    fontSize: 16,
    alignSelf: 'center',
    backgroundColor: 'transparent',
  },
  chevron: {
    width: 25,
    paddingRight: 15,
    alignItems: 'center',
    color: '#C8C7CC',
    backgroundColor: 'transparent',
  },
  bottomBorder: {
    borderBottomWidth: 1/2,
    borderBottomColor: '#C8C7CC',
    borderStyle: 'solid',
  }
})

export default ItemCell
