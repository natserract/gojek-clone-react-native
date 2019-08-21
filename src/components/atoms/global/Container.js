
import React from 'react';
import { View, StyleSheet } from 'react-native';

const Container = (props) => {
    return (
        <View style={Styles.container}>
            {props.children}
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10
    }
})

export default Container