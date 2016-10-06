import React, { Component, PropTypes } from 'react';
import {
  TextInput,
  View,
  Text
} from 'react-native';
import styles from '../styles/styles';
import { Input, InputGroup, ListItem } from 'native-base';

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
      <ListItem>
        <InputGroup>
        <Input
          stackedLabel label='Введите сумму заказа с учетом скидки'
          onChangeText={this.changeSale.bind(this)}
          keyboardType={'numeric'}
          value={textSale.value}
        />
        </InputGroup>
      </ListItem>

    );
  }
}
