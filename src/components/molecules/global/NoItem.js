import React from 'react'
import { Text, Image, View, StyleSheet } from 'react-native'

import ImageSource from '../../../configs/ImagesSource'

const NoItem = (props) => {
    return (
        <>
            <View style={[styles.itemCenter, styles.imgView]}>
                <Image source={props.source} style={styles.image} />
            </View>
            <View style={[styles.itemCenter, styles.textView, props.containerTextStyle]}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={[styles.textCenter, styles.description]}>{props.desc}</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({  
    imgView: {
        marginTop: -35
    },
    image: {
        resizeMode: 'stretch',
        width: 320,
        height: 230,
    },
    itemCenter: {
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    textCenter: {
        textAlign: 'center'
    },
    textView: {
        marginTop: 15,
        paddingHorizontal: 30
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
    },
    description: {
        marginTop: 15,
        fontSize: 15,
        lineHeight: 22,
        color: '#242424'
    }
})

export default NoItem