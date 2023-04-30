import { StyleSheet, Text, View } from 'react-native';
import MyPage from './src/pages/mypage';
import CouncilCard from './src/components/councilCard';
import School from './src/pages/school';
import BookBarcode from './src/pages/bookBarcode';
import CompetitionCard from './src/components/competitionCard';

export default function App() {
  return (
    <View style={styles.container}>
      <CompetitionCard/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginLeft: 50
  },
});
