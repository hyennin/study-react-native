import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigation/StackNavigator';
import Council from './src/pages/councilPage';
import TabViewExample from './src/pages/council';

export default function App() {
  return (
    <Council/>
    //   <MyStack/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
