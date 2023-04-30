import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Card from '../components/Card';

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
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
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
        color: '#A7A7A7'
    },
    selectedHr: {
        width: '108%',
        marginTop: 16,
        borderBottomWidth: 2,
        borderBottomColor: '#8A8A8A'
    },
    hr: {
        width: '108%',
        marginTop: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E9E9E9'
    },
    scroll: {
        marginTop: 23
    }
});

export default School;