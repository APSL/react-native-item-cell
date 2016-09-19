/* @flow */

import React, { PropTypes } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import shallowCompare from 'react-addons-shallow-compare'

const IC_GREY_BORDER_COLOR = '#C8C7CC'

class ItemCell extends React.Component {
  shouldComponentUpdate(nextProps: Object, nextState: Object) {
    return shallowCompare(this, nextProps, nextState)
  }

  _renderDisclosureIndicator () {
    if (this.props.showDisclosureIndicator) {
      return (
        <Icon
          style={styles.chevron}
          color={this.props.chevronColor || IC_GREY_BORDER_COLOR}
          name='angle-right' size={22}
        />
      )
    }
  }

  _renderIcon () {
    if (this.props.icon) {
      return (
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={this.props.icon}
            resizeMode='cover'
          />
        </View>
      )
    }
  }

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
      underlayColor: this.props.underlayColor || '#D9D9D9'
    }
    return (
      <TouchableHighlight {...touchableProps}>
        <View style={[styles.container, {backgroundColor: this.props.backgroundColor || 'white'}]}>
          <View style={styles.leftContainer}>
            {this._renderIcon()}
          </View>
          <View style={styles.rightContainer}>
            <View style={styles.textIconContainer}>
              <Text style={styles.text}>
                {this.props.children}
              </Text>
              <View style={styles.disclosureContainer}>
                {this._renderDisclosureIndicator()}
              </View>
            </View>
            <View style={styles.border} />
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

ItemCell.propTypes = {
  ...TouchableHighlight.propTypes,
  backgroundColor: PropTypes.string,
  children: PropTypes.string.isRequired,
  showDisclosureIndicator: PropTypes.bool,
  textStyle: Text.propTypes.style,
  chevronColor: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      uri: PropTypes.string,
    }),
  ]),
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 43,
  },
  leftContainer: {
    width: 59,
  },
  rightContainer: {
    flex: 1,
  },
  textIconContainer: {
    flexDirection: 'row',
  },
  disclosureContainer: {
    width: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 29,
    height: 29,
    borderRadius: 8,
    backgroundColor: '#333'
  },
  border: {
    height: 1 / PixelRatio.get(),
    backgroundColor: IC_GREY_BORDER_COLOR,
  },
  text: {
    flex: 1,
    paddingTop: 12,
    paddingBottom: 12,
    fontSize: 15,
  },
  chevron: {
    width: 25,
    paddingRight: 15,
    alignSelf: 'center',
  },
})

export default ItemCell
