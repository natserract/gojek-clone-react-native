
import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import ImageSrc from '../../../configs/ImagesSource'

const HorizontalHeader = (props) => {
    return (
        <>
            <View style={styles.headerContainer}>
                <Image source={ImageSrc.home.gofood.logo} style={styles.imgHeader} />
                <Text style={styles.text}>Total Vouchers Rp {props.totalVouchers} !</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#fff',
        marginHorizontal: 13,
        marginBottom: 13,
    },
    text: {
        fontWeight: 'bold',
        paddingLeft: 4,
    },
    imgHeader: {
        resizeMode: 'cover',
        width: 74,
        height: 18,
        marginBottom: 7,
    },
})

export default HorizontalHeader;