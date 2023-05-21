import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigation/StackNavigator';
import Council from './src/pages/councilPage';
import School from './src/pages/schoolPage';
import Competition from './src/pages/competition';

export default function App() {
  return (
    <Competition/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});