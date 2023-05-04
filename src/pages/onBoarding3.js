import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

const onBoarding3 = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.emoji}>👋</Text>
        <Text style={styles.title}>반가워요 미림인!</Text>
        <Text style={styles.content}>만나서 반가워요! 미림인을 위한</Text>
        <Text style={styles.textBox}>
            <Text style={styles.content}>앱 서비스,</Text>
            <Text style={styles.bold}>미리미</Text>
            <Text style={styles.content}>입니다.</Text>
        </Text>
        <View style={styles.dots}>
            <View style={styles.selectedDot}/>
            <View style={styles.dot}/>
            <View style={styles.dot}/>
        </View>
        <TouchableOpacity style={styles.button}><Text>넘어가기</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
        alignItems: 'center',
        paddingTop: 140,
        backgroundColor: 'rgba(255, 255, 255, 1)'
    },
    emoji: {
        fontSize: 200
    },
    title: {
        marginTop: 36,
        marginBottom: 12,
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
        marginTop: 173,
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
        borderRadius: 6/2,
        backgroundColor: 'rgba(233, 233, 233, 1)'
    },
    button: {
        width: 343,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 19,
        borderRadius: 24,
        backgroundColor: 'rgba(23, 227, 129, 1)',
    }
});

export default onBoarding3;