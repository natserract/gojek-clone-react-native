

import React from 'react';
import { Modal, Dimensions, Text, View, StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { AtomGlobal, AtomHome } from '../../atoms/Index'
import ImageSrc from '../../../configs/ImagesSource'


/* For Overlay BG */
var { width, height } = Dimensions.get('window');


const OtherServices = (props) => {
    state = {
        items: [
            'Go-Ride', 'Go-Car', 'Go-BlueBird', 'Go-Food', 'Go-Send', 'Go-Deals', 'Go-Pulsa', 'More'
        ],
        itemsOtherServices: [
            'Go-Points', 'Go-Nearby', 'Go-Bills', 'Go-Shop', 'Go-Mart', 'Go-Box', 'Go-Massage', 'Go-Daily'
        ],
        imageItemsFavorites: [
            ImageSrc.home.gojek_menu.goride,
            ImageSrc.home.gojek_menu.gocar,
            ImageSrc.home.gojek_menu.gobluebird,
            ImageSrc.home.gojek_menu.gofood,
            ImageSrc.home.gojek_menu.gosend,
            ImageSrc.home.gojek_menu.godeals,
            ImageSrc.home.gojek_menu.gopulsa,
            ImageSrc.home.gojek_menu.moreDisabled
        ],
        imageItemsOther: [
            ImageSrc.home.otherServices.gopoints,
            ImageSrc.home.otherServices.gonearby,
            ImageSrc.home.otherServices.gobills,
            ImageSrc.home.otherServices.goshop,
            ImageSrc.home.otherServices.gomart,
            ImageSrc.home.otherServices.gobox,
            ImageSrc.home.otherServices.gomassage,
            ImageSrc.home.otherServices.godaily
        ],
    }

    /* Desctructuring */
    const { items, itemsOtherServices, imageItemsFavorites, imageItemsOther } = this.state;

    /* Function */

    _disabled = (name) => {
        if (name === 'More') {
            return true
        }
    }

    _disabledButtonImg = (name) => {
        if (name === 'More') {
            return '#f7f7f7'
        }
    }

    _setModalVisible = (index) => {
        return null
    }

    const MenuFavorites = items.map((item, i) =>
        <AtomHome.MenuItem.MenuItemBorder
            key={i}
            onClick={() => this._setModalVisible(item)}
            styleText={styles.text}
            styleButton={styles.button}
            disabled={this._disabled(item)}
            styleImg={styles.img}
            src={imageItemsFavorites[i]}
            value={item}
            imgContainer={{ backgroundColor: this._disabledButtonImg(item) }}
        />
    )

    const MenuOtherServices = itemsOtherServices.map((item, i) =>
        <AtomHome.MenuItem.MenuItemBorder
            key={i}
            onClick={() => this._setModalVisible(item)}
            styleText={styles.text}
            styleButton={styles.button}
            disabled={this._disabled(item)}
            styleImg={styles.img}
            src={imageItemsOther[i]}
            value={item}
        />
    )





    return (
        <Modal animationType="fade" transparent={true} visible={props.visible} >
            <TouchableWithoutFeedback onPress={props.onPressOutside}>
                <View style={styles.overlay}></View>
            </TouchableWithoutFeedback>

            <Animatable.View animation="bounceInUp" iterationDelay={50} style={styles.modalContainer}>
                <View style={styles.border}></View>

                <View style={styles.modalContent}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalHeaderText}>Your Favorites</Text>
                        <AtomGlobal.Button.Outline value="Edit" />
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.main}>
                            {MenuFavorites}
                        </View>
                        <View style={styles.mainOtherServices}>
                            <Text style={styles.modalHeaderText}>Other Services</Text>
                            <View style={[styles.main, { flex: 1 }]}>
                                {MenuOtherServices}
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </Animatable.View>
        </Modal>
    );
}


const styles = StyleSheet.create({
    modalContainer: {
        marginTop: '35%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingTop: 7,
        paddingBottom: 35,
        height: '100%',
        backgroundColor: '#fff',
        zIndex: 10,
    },
    overlay: {
        height: height,
        width: width,
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        flex: 1,
    },
    border: {
        height: 4,
        width: 40,
        backgroundColor: '#dedede',
        alignSelf: 'center',
        borderRadius: 5,
    },
    modalContent: {
        paddingTop: 8,
        flex: 1,
    },
    modalHeader: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
    modalHeaderText: {
        fontWeight: '600',
        fontSize: 18,
    },
    buttonEdit: {
        borderWidth: 1,
        borderColor: '#42a64c',
        borderRadius: 5,
        paddingHorizontal: 11,
        paddingVertical: 6,
        marginTop: -1,
    },
    main: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    button: {
        alignSelf: 'center',
        marginHorizontal: 10,
        marginVertical: 15,
    },
    mainOtherServices: {
        width: '100%',
        marginTop: 13,
    }
})


export default OtherServices;