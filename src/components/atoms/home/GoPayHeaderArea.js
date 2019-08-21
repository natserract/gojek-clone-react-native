

import React from 'react';
import { StyleSheet, View, Image, TouchableWithoutFeedback, Text } from 'react-native';

/* Image config */
import ImageSrc from '../../../configs/ImagesSource';

const GoPayHeaderAreas = (props) => {
    return (
        <React.Fragment>
            <View style={styles.container}>
                <View style={{ justifyContent: 'center' }}>
                    <Image style={styles.img} source={ImageSrc.home.logo.gopay} />
                </View>
                <TouchableWithoutFeedback onPress={props.onPress} style={{ justifyContent: 'center' }}>
                    <Text style={styles.title}>Rp 8.999</Text>
                </TouchableWithoutFeedback>
            </View>
        </React.Fragment>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#2355af',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomWidth: 0,
        paddingHorizontal: 10,
        paddingVertical: 10,
        height: 40,
    },
    title: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    button: {
        height: 60,
        width: 80,
    },
    img: {
        resizeMode: 'cover',
        width: 80,
        height: '100%'
    }
})


export default GoPayHeaderAreas;
