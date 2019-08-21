import React, { Component } from 'react'
import { AtomGlobal as Atom } from '../../atoms/Index'
import { MoleculesGlobal as Molecules } from '../../molecules/Index'

import ImageSource from '../../../configs/ImagesSource'

export default class Voucher extends Component {
    static navigationOptions = {
        headerTitle: 'My Vouchers',
    }

    render() {
        return (
            <>
                <Atom.Container>
                    <Molecules.NoItem 
                        title="Get Your Voucher Today" 
                        source={ImageSource.voucher.vector}
                        desc="All of your voucher will show right here. Go out there and explore. Wheeee!"
                    />
                </Atom.Container>
            </>
        )
    }
}
