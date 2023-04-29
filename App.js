import { StyleSheet, Text, View } from 'react-native';
import MyPage from './src/pages/mypage';

export default function App() {
  return (
    <View style={styles.container}>
      <MyPage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 16,
    marginRight: 16
  },
});
