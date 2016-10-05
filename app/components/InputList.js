import React, { Component, PropTypes } from 'react';
import {
  TextInput,
  View,
  ListView,
  Text,
  TouchableHighlight
} from 'react-native';
import styles from '../styles/styles';

export default class InputList extends Component {
  constructor(props) {
    super(props);
  }

  addItem(e) {
    let lastIndex = this.props.inputList.count.length;
    this.props.addItem(this.props.inputList.count.concat('0'));
  }

  removeItem(index) {
    this.props.inputList.count.splice(index, 1);
    this.props.removeItem(this.props.inputList.count);
  }

  changeItemValue(...item) {
    this.props.inputList.count.splice(item[0], 1, item[1]);
    this.props.changeItemValue(this.props.inputList.count);
  }

  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let dataSource = {
      dataSource: ds.cloneWithRows(this.props.inputList.count)
    };

    const { textCount, textSale } = this.props;

    return (
      <View style={styles.field}>
        <Text style={styles.text}>Введите сумму вашего заказа</Text>
        <ListView
        dataSource={dataSource.dataSource}
        renderRow={(rowData, sectionID, rowID) =>
          <View>
            <View style={styles.flexField}>
              <TextInput style={styles.input}
                       value={rowData}
                       onChangeText={this.changeItemValue.bind(this, rowID)}
                       keyboardType={'numeric'} />
              {rowID === '0' ?
              <TouchableHighlight onPress={this.addItem.bind(this)}>
                <Text style={styles.button}>+</Text>
              </TouchableHighlight> :
              <TouchableHighlight onPress={this.removeItem.bind(this, rowID)}>
                <Text style={styles.remove}>X</Text>
              </TouchableHighlight>}
            </View>
            <Text style={styles.text}>Цена с учетом скидки: {(textSale.value * 1 / textCount.value) * rowData}</Text>
          </View>
        }
      />
      </View>
    )
  }
}
