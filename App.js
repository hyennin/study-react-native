import { StyleSheet, Text, View } from 'react-native';
import MyPage from './src/pages/mypage';
import Card from './src/components/Card';
import School from './src/pages/school';

export default function App() {
  return (
    <View style={styles.container}>
      <School/>
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
