import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Alert } from 'react-native';


/* Button Outline */
export const Outline = (props) => {
    return (
        <TouchableOpacity onPressIn={props.onPress} activeOpacity={1} style={[styles.buttonOutline, props.styleButtonOutline]}>
            <Text style={[styles.text, props.textStyle]}>{props.value}</Text>
        </TouchableOpacity>
    )
}

/* Button Background No Outline */
export const Background = (props) => {
    return (
        <TouchableOpacity activeOpacity={1} style={[styles.buttonBackground, props.styleButtonBackground]}>
            <Text style={[styles.text, props.textStyle]}>{props.value}</Text>
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