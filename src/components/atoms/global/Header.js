
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native';

import ImageSource from '../../../configs/ImagesSource'

const Header = (props) => {
    return (
        <View style={styles.container}>
            <Text style={{ width: '6%' }}>{props.valueOnLeft}</Text>
            <Text style={styles.textCenter}>Ongoing Orders</Text>
            <TouchableWithoutFeedback onPress={props.onPress}>
                <Image source={ImageSource.orders.vector} style={styles.img} />
            </TouchableWithoutFeedback>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderBottomColor: '#f0f0f0',
        borderBottomWidth: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        width: '100%',
        marginTop: 24,
        paddingHorizontal: 15
    },
    img: {
        resizeMode: 'contain',
        width: 30,
        height: 30,
    },
    textCenter: {
        fontSize: 17,
        fontWeight: '600',
    }
})

export default Header