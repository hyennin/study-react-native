import { StyleSheet, Text, View } from 'react-native';
import TabViewExample from './TabView';
import MyPage from './src/pages/mypage';
import 'react-native-gesture-handler';
import MyStack from './navigation/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <MyPage/>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
