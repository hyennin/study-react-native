import { ScrollView, StyleSheet, View } from 'react-native';
import CouncilCard from '../components/councilCard';

const CouncilTab = () => {
  return (
    <View style={styles.container}>
        <ScrollView style={styles.scroll}>
            <CouncilCard/>
            <CouncilCard/>
            <CouncilCard/>
            <CouncilCard/>
            <CouncilCard/>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 40,
        backgroundColor: 'rgba(255, 255, 255, 1)'
    },
    scroll: {
        marginTop: 23
    }
});

export default CouncilTab;