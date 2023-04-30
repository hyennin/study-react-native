import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CouncilCard from '../components/councilCard';

const School = () => {
  return (
    <View style={styles.container}>
        <View style={styles.tab}>
            <TouchableOpacity style={styles.council}>
                <Text style={styles.selectedText}>학생회</Text>
                <View style={styles.selectedHr}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.calendar}>
                <Text style={styles.text}>학사일정</Text>
                <View style={styles.hr}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.map}>
                <Text style={styles.text}>지도</Text>
                <View style={styles.hr}/>
            </TouchableOpacity>
        </View>
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
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 40
    },
	tab: {
		width: '100%',
        marginTop: 120,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
    council: {
        width: 114,
        height: 44,
        alignItems: 'center'
    },
    calendar: {
        width: 114,
        height: 44,
        alignItems: 'center'
    },
    map: {
        width: 114,
        height: 44,
        alignItems: 'center'
    },
    selectedText: {
        fontSize: 14,
        fontWeight: 500
    },
    text: {
        fontSize: 14,
        fontWeight: 400,
        color: 'rgba(138, 138, 138, 1)'
    },
    selectedHr: {
        width: '108%',
        marginTop: 16,
        borderBottomWidth: 2,
        borderBottomColor: 'rgba(23, 227, 129, 1)'
    },
    hr: {
        width: '108%',
        marginTop: 16,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(233, 233, 233, 1)'
    },
    scroll: {
        marginTop: 23
    }
});

export default School;