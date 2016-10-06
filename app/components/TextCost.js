import React, { Component, PropTypes } from 'react';
import {
  View,
  Text
} from 'react-native';
import styles from '../styles/styles';
import { Input, InputGroup, ListItem } from 'native-base';
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
      <ListItem>
        <InputGroup>
          <Input
            stackedLabel label='Цена без скидки'
            onChangeText={this.changeCost.bind(this)}
            value={textCount.value}
            keyboardType={'numeric'}
          />
        </InputGroup>
      </ListItem>
    );
  }
}
