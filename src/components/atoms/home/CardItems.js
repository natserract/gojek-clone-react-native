
import React from 'react';
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

import ImageSrc from '../../../configs/ImagesSource'

const CardItems = (props) => {
    return (
        <>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <TouchableWithoutFeedback>
                    <View style={{ marginRight: 15, width: 140, paddingRight: 20, }}>
                        <View style={{ height: 140, marginBottom: 5 }}>
                            <TouchableOpacity activeOpacity={.9} onPress={() => props.onPress}>
                                <Image style={styles.cardImage} source={ImageSrc.home.gofood.content.item1} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.text}>{ props.title }</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    cardImage: {
        resizeMode: 'cover',
        width: 140,
        height: '100%',
        borderRadius: 5,
    },
    text: {
        fontWeight: '600',
    }
})

export default CardItems;