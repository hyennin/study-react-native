import { StyleSheet, Text, View } from 'react-native';
import MyPage from './src/pages/mypage';
import Card from './src/components/Card';
import School from './src/pages/school';
import BookBarcode from './src/pages/bookBarcode';

export default function App() {
  return (
    <View style={styles.container}>
      <BookBarcode/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
