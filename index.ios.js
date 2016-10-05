/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { AppRegistry } from 'react-native';
 import App from './app/containers/App';

 AppRegistry.registerComponent('AwesomeProject', () => App);

// import React, { Component, PropTypes } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   Navigator,
//   TouchableHighlight,
// } from 'react-native';
//
// import TextCost from './components/TextCost'
// import TextSale from './components/TextSale'
//
//
// class AwesomeProject extends Component {
//   render() {
//     return (
//       <Navigator
//         initialRoute={{ title: 'My Initial Scene', index: 0 }}
//         renderScene={(route, navigator) =>
//           <MyScene
//             title={route.title}
//
//             // Function to call when a new scene should be displayed
//             onForward={ () => {
//               const nextIndex = route.index + 1;
//               navigator.push({
//                 title: 'Scene ' + nextIndex,
//                 index: nextIndex,
//               });
//             }}
//
//             // Function to call to go back to the previous scene
//             onBack={() => {
//               if (route.index > 0) {
//                 navigator.pop();
//               }
//             }}
//           />
//         }
//       />
//     )
//   }
// }

//
// class MyScene extends Component {
//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     onForward: PropTypes.func.isRequired,
//     onBack: PropTypes.func.isRequired,
//   }
//   render() {
//     return (
//       <View>
//       <View style={styles.container}>
//         <TouchableHighlight onPress={this.props.onBack}>
//           <Text>&lt;</Text>
//         </TouchableHighlight>
//         <Text>Current Scene: { this.props.title }</Text>
//         <TouchableHighlight onPress={this.props.onForward}>
//           <Text>&gt;</Text>
//         </TouchableHighlight>
//       </View>
//       <TextCost />
//       <TextSale />
//       </View>
//     )
//   }
// }
//
