import React, { Component, } from 'react';
const ReactNative = require('react-native');

const {
  StyleSheet,
  View,
  Text
} = ReactNative;


const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'transparent',
  }
});

class Option extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { style, styleText } = this.props;

    return (
      <View style={[ styles.container, style ]}>
        <Text style={ styleText }>{this.props.children}</Text>
      </View>
    );
  }
}

Option.propTypes = {
  children: React.PropTypes.string.isRequired
};

module.exports = Option;
