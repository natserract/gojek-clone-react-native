import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';


/* Button Outline */
export const Outline = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} activeOpacity={1} style={[styles.buttonOutline, props._styleButtonOutline]}>
            <Text style={styles.text}>{props.value}</Text>
        </TouchableOpacity>
    )
}

/* Button Background No Outline */
export const Background = (props) => {
    return (
        <TouchableOpacity activeOpacity={1} style={[styles.buttonBackground, props._styleButtonBackground]}>
            <Text style={styles.text}>{props._value}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonOutline: {
        borderWidth: 1,
        borderColor: '#42a64c',
        borderRadius: 5,
        paddingHorizontal: 11,
        paddingVertical: 6,
        marginTop: -1,
    },
    buttonBackground: {
        backgroundColor: '#42a64c',
        borderRadius: 5,
        paddingHorizontal: 11,
        paddingVertical: 6,
        marginTop: -1,
    },
    text: {
        color: '#42a64c',
        fontSize: 12,
        textTransform: 'uppercase'
    }
})