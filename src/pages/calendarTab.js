import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const CalendarTab = () => {
  return (
    <View style={styles.container}>
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
    }
});

export default CalendarTab;