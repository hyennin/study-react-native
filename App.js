import { StyleSheet, Text, View } from 'react-native';
import MyPage from './src/pages/mypage';
import Card from './src/components/Card';

export default function App() {
  return (
    <View style={styles.container}>
      <Card/>
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
