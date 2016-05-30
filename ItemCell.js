import React, { PropTypes } from 'react'
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
  PixelRatio
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const IC_GREY_BORDER_COLOR = '#C8C7CC'

class ItemCell extends React.Component {
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
          <View style={styles.paddingView} />
          <Image style={styles.icon}
            source={this.props.icon}
            resizeMode='cover'
          />
          <View style={styles.paddingView} />
        </View>
      )
    }
    return <View style={styles.paddingView} />
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
      <TouchableHighlight {...touchableProps}
        style={[styles.container, this.props.cellStyle]}>
        <View style={styles.viewContainer}>
          <View style={styles.leftContainer}>
            {this._renderIcon()}
          </View>
          <View style={styles.bottomBorder}>
            <View style={styles.textContainer}>
              <Text style={[styles.text, this.props.textStyle]}>
                {this.props.children}
              </Text>
              {this._renderDisclosureIndicator()}
            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

ItemCell.propTypes = {
  ...TouchableHighlight.propTypes,
  children: PropTypes.string.isRequired,
  showDisclosureIndicator: PropTypes.bool,
  cellStyle: View.propTypes.style,
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
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  viewContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContainer: {
    marginTop: 5,
    marginBottom: 5,
  },
  bottomBorder: {
    flex: 1,
    borderBottomWidth: 1 / PixelRatio.get(),
    borderBottomColor: IC_GREY_BORDER_COLOR,
    borderStyle: 'solid',
  },
  paddingView: {
    width: 15,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  text: {
    flex: 1,
    fontSize: 16,
    alignSelf: 'center',
  },
  chevron: {
    width: 25,
    paddingRight: 15,
    alignSelf: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    width: 59,
    flexDirection: 'row',
  },
  icon: {
    width: 29,
    height: 29,
    borderRadius: 8,
  },
})

export default ItemCell
