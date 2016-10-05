import React, { Component, PropTypes } from 'react';
import {
  TextInput,
  View,
  Text
} from 'react-native';
import styles from '../styles/styles';

export default class TextSale extends Component {
  constructor(props) {
    super(props);
  }

  changeSale(e) {
    this.props.getSale(e)
  }

  render() {
    const textSale = this.props.textSale;
    return (
      <View style={styles.field}>
        <Text style={styles.text}>Введите сумму заказа с учетом скидки</Text>
        <TextInput
          style={styles.input}
          onChangeText={this.changeSale.bind(this)}
          keyboardType={'numeric'}
          value={textSale.value}
        />
      </View>

    );
  }
}
