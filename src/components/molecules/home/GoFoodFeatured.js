import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

import { AtomHome } from '../../atoms/Index'

const GoFoodFeatured = () => {
    state = {
        title: ['Claim', 'Use Voucher', 'Save Rp66.000', 'More Info'],
        totalVoucher: '156.000',
    }

    _handleClick = () => {
        return true;
    }

    const { title } = this.state;
    const GoFoodItem = title.map((item, i) =>
        <AtomHome.CardItems key={i} title={item} onPress={this._handleClick} />
    )

    return (
        <>
            <View>
                <AtomHome.HorizontalHeader totalVouchers={this.state.totalVoucher} />
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollview}>
                    {GoFoodItem}
                </ScrollView>
            </View>
        </>
    )

}


const styles = StyleSheet.create({
    scrollview: {
        borderWidth: 0,
        paddingBottom: 20,
        paddingHorizontal: 15,
    }
})

export default GoFoodFeatured