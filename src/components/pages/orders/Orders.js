import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

import { AtomGlobal as Atom } from '../../atoms/Index'
import { MoleculesGlobal as Molecules } from '../../molecules/Index'

import ImageSource from '../../../configs/ImagesSource'


class Order extends Component {
  render() {
    const { navigation } = this.props

    _handleClick = () => {
      navigation.navigate("OrderHistoryScreen")
    }

    return (
      <>
        <Atom.Header onPress={_handleClick } />
        <Atom.Container>
          <Molecules.NoItem
            title="Let's order Gojek!"
            source={ImageSource.orders.noitem}
            desc="Our drivers will be happy to help you. Let's make an order!"
            containerTextStyle={{paddingHorizontal: 30}}
          />
        </Atom.Container>
      </>
    )
  }
}

var styles = StyleSheet.create({
  block: {
    width: 150,
    height: 150,
    backgroundColor: 'red'
  },
  button: {
    height: 60,
    backgroundColor: '#ededed',
    borderRadius: 4,
    marginTop: 10,
    paddingTop: 20,
    fontSize: 18
  },
});


export default Order