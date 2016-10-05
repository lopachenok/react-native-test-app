import React, { Component, PropTypes } from 'react';
import {
  TextInput,
  View,
  Text
} from 'react-native';
import styles from '../styles/styles';

export default class TextCost extends Component {
  constructor(props) {
    super(props);
  }

  changeCost(value) {
    this.props.getCost(value)
  }

  render() {
    const textCount = this.props.textCount;
    return (
      <View style={styles.field}>
        <Text style={styles.text}>Введите сумму заказа без скидки</Text>
        <TextInput
          style={styles.input}
          onChangeText={this.changeCost.bind(this)}
          value={textCount.value}
          keyboardType={'numeric'}
        />
      </View>

    );
  }
}
