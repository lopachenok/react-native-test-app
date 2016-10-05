import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  },
  input: {
    height: 25,
    borderColor: '#002a54',
    borderRadius: 5,
    borderWidth: 1,
    width: 200,
    paddingLeft: 10,
    fontSize: 12,
    marginTop: 5
  },
  text: {
    fontSize: 12,
    color: '#333'
  },
  field: {
    marginTop: 10,
    paddingLeft: 20
  },
  flexField: {
    marginTop: 10,
    paddingLeft: 20,
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center'
  },
  saleText: {
    fontSize: 14,
    color: '#333',
    marginTop: 10,
    textAlign: 'center'
  },
  button: {
    height: 20,
    width: 20,
    backgroundColor: '#0089cf',
    marginLeft: 20,
    textAlign: 'center',
    color: '#fff'
  },
  remove: {
    height: 20,
    width: 20,
    color: '#333',
    marginLeft: 20
  }
});

export default styles;
