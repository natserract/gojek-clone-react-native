
import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

/* Other Component */
import { MoleculesHome as Molecules } from '../../molecules/Index'
import { AtomHome as Atom } from '../../atoms/Index';
import { OrganismHome as Organism } from '../../organisms/Index';
import ImageSrc from '../../../configs/ImagesSource'


class HomeScreen extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            items: [
                'Go-Ride',
                'Go-Car',
                'Go-BlueBird',
                'Go-Food',
                'Go-Send',
                'Go-Deals',
                'Go-Pulsa',
                'More'
            ],
            imageItems: [
                ImageSrc.home.gojek_menu.goride,
                ImageSrc.home.gojek_menu.gocar,
                ImageSrc.home.gojek_menu.gobluebird,
                ImageSrc.home.gojek_menu.gofood,
                ImageSrc.home.gojek_menu.gosend,
                ImageSrc.home.gojek_menu.godeals,
                ImageSrc.home.gojek_menu.gopulsa,
                ImageSrc.home.gojek_menu.more
            ],
            modalVisible: false,
        }
    }

    /* Show modal */
    _setModalVisible(item) {
        if (item === 'More') {
            this.setState({
                modalVisible: true,
            })
        }
    }


    render() {
        const { imageItems, items } = this.state;
        const { navigation } = this.props;

        /* Close modal when clicked the overlay */
        _pressOutside = () => {
            this.setState({
                modalVisible: false
            })
        }

        /* Make Map */
        const ItemServices = items.map((item, i) =>
            <Atom.MenuItem.MenuItemBorder
                key={i}
                onClick={() => this._setModalVisible(item)}
                styleText={styles.text}
                styleButton={styles.button}
                src={imageItems[i]}
                value={item}
            />
        )


        return (
            <React.Fragment>
                <View style={{ flex: 1 }}>
                    <View style={styles.contentSection}>
                        <Molecules.HomeHeader
                            style={styles.home_header}
                            onPress={() => navigation.navigate('Voucher')}
                        />

                        <ScrollView style={styles.contentContainer} scrollEventThrottle={16}>
                            <Molecules.GoPayFeatured onPress={() => navigation.navigate('GoPay')} />

                            <View style={styles.servicesContainer}>
                                <View style={styles.main}>
                                    {ItemServices}
                                </View>
                            </View>

                            <Organism.GoFoodSection />
                        </ScrollView>


                        {/* Other Services PopUp */}
                        <Molecules.OtherServices
                            onPressOutside={_pressOutside}
                            visible={this.state.modalVisible}
                        />
                    </View>
                </View>
            </React.Fragment>
        );
    }
}



const styles = StyleSheet.create({
    contentSection: {
        flex: 1,
    },
    servicesContainer: {
        marginTop: 10,
        marginBottom: 10,
        paddingHorizontal: 15,
    },
    main: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    contentContainer: {
        flex: 1,
        zIndex: -20,
    },
    home_header: {
        position: 'absolute',
        top: 0,
        zIndex: 10,
        width: '100%',
    },
    button: {
        alignSelf: 'center',
        marginHorizontal: 10,
        marginVertical: 15,
    },
})


export default HomeScreen
