import React from 'react';
import { View } from 'react-native';

import { MoleculesHome } from '../../molecules/Index'


const GoFoodSection = () => {
    return (
        <>
            <View style={{ paddingVertical: 20 }}>
                <MoleculesHome.GoFoodFeatured />
            </View>
        </>
    )
}


export default GoFoodSection;