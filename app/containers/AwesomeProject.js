import React, {Component} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { View } from 'react-native';

import TextCost from '../components/TextCost';
import TextSale from '../components/TextSale';
import SaleText from '../components/SaleText';
import InputList from '../components/InputList';

import * as countActions from '../actions/countAction';
import * as saleActions from '../actions/saleAction';
import * as inputListActions from '../actions/inputListAction';

import styles from '../styles/styles';

function mapStateToProps (state) {
  return {
    textCount: state.textCount,
    textSale: state.textSale,
    inputList: state.inputList
  }
}

function mapDispatchToProps(dispatch) {
  return {
    countActions: bindActionCreators(countActions, dispatch),
    saleActions: bindActionCreators(saleActions, dispatch),
    inputListActions: bindActionCreators(inputListActions, dispatch)
  }
}

class AwesomeProject extends Component {
  render() {
    const { textCount, textSale, inputList }  = this.props;
    const { getCost } = this.props.countActions;
    const { getSale } = this.props.saleActions;
    const { addItem, removeItem, changeItemValue } = this.props.inputListActions;
    return (
      <View style={styles.container}>
        <TextCost textCount={textCount} getCost={getCost} />
        <TextSale textSale={textSale} getSale={getSale} />
        <SaleText textCount={textCount} textSale={textSale} />
        <InputList textCount={textCount}
                   textSale={textSale}
                   inputList={inputList}
                   addItem={addItem}
                   removeItem={removeItem}
                   changeItemValue={changeItemValue} />
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AwesomeProject)
