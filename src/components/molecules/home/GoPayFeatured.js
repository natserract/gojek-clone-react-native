

import React from 'react';
import { View, StyleSheet } from 'react-native';

import { AtomHome } from '../../atoms/Index';
import ImageSrc from '../../../configs/ImagesSource';



const GoPayFeatured = (props) => {
    state = {
        items: ['Transfer', 'Scan QR', 'Top Up', 'More'],
        imageItems: [
            ImageSrc.home.gopay_menu.transfer, 
            ImageSrc.home.gopay_menu.scan, 
            ImageSrc.home.gopay_menu.topup, 
            ImageSrc.home.gopay_menu.more
        ],
    }

    /* Menu Item */
    const { items, imageItems } = this.state;

    const GoPayMenu = items.map((item, i) =>
        <AtomHome.MenuItem.MenuItemDefault 
            styleText={styles.value} 
            styleButton={styles.button} 
            styleImg={styles.img} 
            key={i} 
            src={imageItems[i]} 
            value={item}   
        />
    )

    return (
        <View style={styles.main}>
            <AtomHome.GoPayHeaderArea onPress={props.onPress} />
            <View style={styles.container}>
                {GoPayMenu}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        position: 'relative',
        paddingTop: 85,
        paddingHorizontal: 15,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#3062bc',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        paddingTop: 3,
        paddingBottom: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    value: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '500',
    },
    button: {
        height: 60,
        width: 80,
        marginHorizontal: 3,
    },
    img: {
        resizeMode: 'contain',
        width: 30,
        height: '100%'
    }
})


export default GoPayFeatured;