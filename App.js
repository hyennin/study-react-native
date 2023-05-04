import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigation/StackNavigator';
import OnBoarding2 from './src/pages/onBoarding2';

export default function App() {
  return (
    <NavigationContainer>
      <OnBoarding2/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
