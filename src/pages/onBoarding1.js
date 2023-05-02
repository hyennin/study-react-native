import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

const onBoarding1 = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.emoji}>👋</Text>
        <Text style={styles.title}>반가워요 미림인!</Text>
        <Text style={styles.content}>만나서 반가워요! 미림인을 위한</Text>
        <Text style={textBox}>
            <Text style={styles.content}>앱 서비스, </Text>
            <Text style={styles.bold}>미리미</Text>
            <Text style={styles.content}>입니다.</Text>
        </Text>
        <View style={styles.dots}>
            <View style={styles.selectedDot}></View>
            <View style={styles.dot}></View>
            <View style={styles.dot}></View>
        </View>
        <TouchableOpacity style={styles.button}>넘어가기</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 1)'
    },
    emoji: {
        fontSize: 350
    },
    title: {
        fontSize: 20,
        fontWeight: 700
    },
    content: {
        fontSize: 16,
        fontWeight: 400
    },
    textBox: {
        flexDirection: 'row'
    },
    bold: {
        fontSize: 16,
        fontWeight: 500
    },
    dots: {
        width: 30,
        flexDirection: 'row',
        marginLeft: -6
    },
    selectedDot: {
        width: 6,
        height: 6,
        marginLeft: 6,
        borderRadius: 6/2,
        backgroundColor: 'rgba(23, 227, 129, 1)'
    },
    dot: {
        width: 6,
        height: 6,
        marginLeft: 6,
        borderRadius: 6/2
    },
    button: {
        width: 343,
        height: 48,
        borderRadius: 24,
        backgroundColor: 'rgba(23, 227, 129, 1)',
        color: 'rgba(0, 0, 0, 1)'
    }
});

export default onBoarding1;