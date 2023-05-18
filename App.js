import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigation/StackNavigator';
import Council from './src/pages/councilPage';
import School from './src/pages/schoolPage';

export default function App() {
  return (
    <School/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
