import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import ImageSource from '../../../configs/ImagesSource'
import ThemeStyle from '../../../styles/theme.style'

const List = (props) => {
    return (
        <TouchableOpacity activeOpacity={.8} onPress={props.onPress}>
            <View style={styles.container}>
                <View style={styles.gridLeft}>
                    <Image source={ImageSource.orders.orderHistory} style={styles.ing} />
                </View>
                <View style={styles.gridRight}>
                    <Text key="title" style={styles.title} >{props.name}</Text>
                    <Text key='orderStatus' style={styles.desc}>{props.orderStatus}</Text>
                    <Text key='date' style={styles.date}>{props.date}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 13,
        borderBottomColor: '#f0f0f0',
        borderBottomWidth: 1,
        paddingBottom: 15
    },
    ing: {
        resizeMode: 'contain',
        width: 55,
        height: '100%'
    },
    gridLeft: {
        width: '18%',
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        alignContent: 'flex-end'
    },
    gridRight: {
        width: '82%',
        paddingLeft: 5,
        paddingTop: 15
    },
    title: {
        color: '#8d8d8d',
        fontWeight: ThemeStyle.FONT_WEIGHT_BOLD,
        fontSize: 15,
        textTransform: ThemeStyle.UPPERCASE,
        letterSpacing: -.2,
        marginBottom: 6,
    },
    desc: {
        color: '#afafaf',
        fontWeight: ThemeStyle.FONT_WEIGHT_MEDIUM,
        marginBottom: 6,
    },
    date: {
        color: '#cdcdcd'
    }
})

export default List