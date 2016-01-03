import React, { Component, View, Text, Image, TouchableHighlight, PropTypes, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class ItemCell extends Component {
  _renderDisclosureIndicator () {
    if (this.props.showDisclosureIndicator) {
      return <Icon style={this._styles.chevron} name='angle-right' size={22} />
    }
  }

  _renderIcon () {
    if (this.props.icon) {
      return (
        <View style={this._styles.iconContainer}>
          <View style={this._styles.paddingView} />
          <Image style={this._styles.icon}
           source={{uri: this.props.icon}}
           resizeMode='cover'
          />
          <View style={this._styles.paddingView} />
        </View>
      )
    }
    return <View style={this._styles.paddingView} />
  }

  _updateStyle (props) {
    this._styles = {
      container: [styles.container, {backgroundColor: this.props.backgroundColor || 'white'}],
      viewContainer: [styles.viewContainer, {backgroundColor: this.props.backgroundColor || 'white'}],
      text: [styles.text, {backgroundColor: this.props.backgroundColor || 'white',color: this.props.textColor || '#000000'}],
      textContainer: [styles.textContainer, {backgroundColor: this.props.backgroundColor || 'white'}],
      bottomBorder: [styles.bottomBorder, {borderBottomColor: this.props.separatorColor || '#C8C7CC'}],
      paddingView: [styles.paddingView, {backgroundColor: this.props.backgroundColor || 'white'}],
      iconContainer: [styles.iconContainer, {backgroundColor: this.props.backgroundColor || 'white'}],
      icon: [styles.icon, {backgroundColor: this.props.iconBackgroundColor || 'white'}],
      chevron: [styles.chevron, {backgroundColor: this.props.backgroundColor || 'white',color: this.props.chevronColor || '#C8C7CC'}]
    }
  }

  constructor (props) {
    super(props);
    this._updateStyle(props)
  }

  componentWillReceiveProps (nextProps) {
    this._updateStyle(nextProps)
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
    }
    return (
      <TouchableHighlight {...touchableProps}
        underlayColor='#D9D9D9'
        style={this._styles.container}>
        <View style={this._styles.viewContainer}>
          <View style={this._styles.leftContainer}>
            {this._renderIcon()}
          </View>
          <View style={this._styles.bottomBorder}>
            <View style={this._styles.textContainer}>
              <Text style={this._styles.text}>
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
  icon: PropTypes.string,
  backgroundColor: PropTypes.string,
  separatorColor: PropTypes.string,
  iconBackgroundColor: PropTypes.string,
  chevronColor: PropTypes.string,
  textColor: PropTypes.string,
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
    backgroundColor: 'white',
    alignItems: 'center',
  },
  leftContainer: {
    marginTop: 5,
    marginBottom: 5,
  },
  bottomBorder: {
    flex: 1,
    borderBottomWidth: 1/2,
    borderBottomColor: '#C8C7CC',
    borderStyle: 'solid',
  },
  paddingView: {
    width: 15,
    backgroundColor: 'white',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    fontSize: 16,
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  chevron: {
    width: 25,
    paddingRight: 15,
    color: '#C8C7CC',
    alignSelf: 'center',
    backgroundColor: 'white',
  },
  iconContainer: {
    alignItems: 'center',
    width: 59,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  icon: {
    width: 29,
    height: 29,
    backgroundColor: '#999',
    borderRadius: 8,
  },
})

export default ItemCell
