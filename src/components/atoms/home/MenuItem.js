import React from 'react';
import { Text, Image, StyleSheet, View, TouchableOpacity } from 'react-native';

/* Menu Item */
export const MenuItemDefault = (props) => {
    return (
        <TouchableOpacity activeOpacity={.6} onPress={props.onClick} style={[props.styleButton, stylesMenuItem.button]}>
            <Image style={props.styleImg} source={props.src} />
            <Text style={[props.styleText, stylesMenuItem.text]}>{props.value}</Text>
        </TouchableOpacity>
    );
}

/* Menu Item With Border */
export const MenuItemBorder = (props) => {
    return (
        <TouchableOpacity activeOpacity={.7} disabled={props.disabled} onPress={props.onClick} style={[props.styleButton, stylesMenuItemBorder.button]}>
            <View style={[props.imgContainer, stylesMenuItemBorder.imagesContainer]}>
                <Image style={[props.styleImg, stylesMenuItemBorder.img ]} source={props.src} />
            </View>
            <View style={stylesMenuItemBorder.textContainer}>
                <Text style={[props.styleText, stylesMenuItemBorder.text]}>{props.value}</Text>
            </View>
        </TouchableOpacity>
    );
}



const stylesMenuItem = StyleSheet.create({
    navMain: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    text: {
        marginTop: -5
    }
});


const stylesMenuItemBorder = StyleSheet.create({
    button: {
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    imagesContainer: {
        borderColor: '#f0f0f0',
        borderWidth: 1,
        borderRadius: 23,
        paddingVertical: 9,
        paddingHorizontal: 10,
    },
    textContainer: {
        marginTop: 9, 
    },
    text: {
        fontSize: 11,
        letterSpacing: -0.1,
    },
    img: {
        resizeMode: 'contain',
        width: 42,
        height: 42,
    }
});


