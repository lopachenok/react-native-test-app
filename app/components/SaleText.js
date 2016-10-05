import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';
import styles from '../styles/styles';

export default class SaleText extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { textCount, textSale } = this.props;
    let sale = 100 - ((textSale.value * 100) / textCount.value);
    return (
      <Text style={styles.saleText}>Ваша скидка: {sale}%</Text>
    )
  }
}
