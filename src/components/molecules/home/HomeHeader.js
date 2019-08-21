import React from 'react';
import { StyleSheet, Image, View, TouchableWithoutFeedback } from 'react-native';

import ImageSrc from '../../../configs/ImagesSource';

const NavTop = (props) => {
    return (
        <View style={[styles.navTopContainer, props.style]}>
            <Image style={styles.imgSize} source={ImageSrc.topHeader.logo} />
            <TouchableWithoutFeedback onPress={props.onPress}>
                <View style={styles.button}>
                    <Image source={ImageSrc.topHeader.voucher} style={styles.imgSizeBill} />
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}


const styles = StyleSheet.create({
    navTopContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 75,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
        paddingLeft: 11,
        paddingRight: 8,
        paddingTop: 15,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
        justifyContent: 'center',
        paddingTop: 6,
    },
    imgSize: {
        resizeMode: 'contain',
        width: 105,
        height: '100%',
    },
    imgSizeBill: {
        resizeMode: 'contain',
        width: 43,
        height: '100%',
    }
});

export default NavTop;