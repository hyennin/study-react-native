import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import barcode from '../assets/barcode.png';
import save from '../assets/save.png';

const BookBarcode = () => {
  return (
    <View style={styles.background}>
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.text}>0학년 0반 0번 김00</Text>
                <Image source={barcode} style={styles.barcode}/>
                <TouchableOpacity style={styles.button}>
                    <Text>이미지 저장</Text>
                    <Image source={save}/>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(23, 227, 129, 0.15)'
    },
    container: {
        width: '100%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 52,
        borderTopRightRadius: 52,
        backgroundColor: 'rgba(250, 250, 250, 1)'
    },
    box: {
        width: 226,
        height: '100%',
        marginTop: -80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        alignSelf: 'flex-start',
        fontSize: 14,
        fontWeight: 400,
        color: 'rgba(65, 65, 65, 1)'
    },
    barcode: {
        width: 226,
        height: 112,
        marginTop: 16
    },
    button: {
        width: 226,
        height: 52,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
        borderWidth: 1,
        borderColor: 'rgba(138, 138, 138, 1)',
        borderRadius: 12
    }
});

export default BookBarcode;