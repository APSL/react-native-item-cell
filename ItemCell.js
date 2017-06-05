/* @flow */

import React, { PropTypes } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
  Platform
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import shallowCompare from 'react-addons-shallow-compare'

const IC_GREY_BORDER_COLOR = '#C8C7CC'

class ItemCell extends React.Component {
  state: Object

  shouldComponentUpdate(nextProps: Object, nextState: Object) {
    return shallowCompare(this, nextProps, nextState)
  }

  _renderDisclosureIndicator () {
    const { showDisclosureIndicator, value } = this.props
    if (showDisclosureIndicator && !value) {
      return (
        <Icon
          style={styles.chevron}
          color={this.props.chevronColor || IC_GREY_BORDER_COLOR}
          name='angle-right' size={22}
        />
      )
    } else if (value) {
      return (
        <Text style={styles.value}>
          {value}
        </Text>
      )
    }
  }

  _renderIcon () {
    if (React.isValidElement(this.props.icon)) {
      return (
        <View style={styles.iconContainer}>
          {this.props.icon}
        </View>
      )
    }
    else if (this.props.icon) {
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

  _renderText () {
    const { children, subtitle } = this.props
    if (subtitle) {
      return (
        <View style={styles.subtitleContainer}>
          <Text style={[styles.text, {paddingBottom: 0, paddingTop: 6}]}>
            {children}
          </Text>
          <Text style={styles.subtitle}>
            {subtitle}
          </Text>
        </View>
      )
    }
    return (
      <Text style={styles.text}>
        {this.props.children}
      </Text>
    )
  }

  render () {
    const touchableProps = {
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
              {this._renderText()}
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
  subtitle: PropTypes.string,
  value: PropTypes.string,
  showDisclosureIndicator: PropTypes.bool,
  chevronColor: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.number,
    PropTypes.shape({
      uri: PropTypes.string,
    }),
  ]),
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    minHeight: 43,
  },
  leftContainer: {
    minWidth: 15,
  },
  rightContainer: {
    flex: 1,
  },
  textIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  disclosureContainer: {
    minWidth: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    flex: 1,
    width: 59,
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
  subtitle: {
    fontSize: 11,
    color: '#444',
    paddingBottom: 6,
  },
  subtitleContainer: {
    flex: 1,
    ...Platform.select({
      ios: {
        minHeight: 43,
      },
      android: {
        minHeight: 48,
      }
    })
  },
  chevron: {
    width: 25,
    paddingRight: 15,
    alignSelf: 'center',
  },
  value: {
    fontSize: 15,
    color: '#808080',
    textAlign: 'right',
    paddingRight: 15,
  }
})

export default ItemCell
