import React, { Component } from 'react'
import { StyleSheet, Alert } from 'react-native'

import { AtomGlobal as Atom } from '../../atoms/Index'
import { MoleculesGlobal as Molecules } from '../../molecules/Index'

import ImageSource from '../../../configs/ImagesSource'


class Order extends Component {
  constructor() {
    super();
    this.state = {
      press: false
    }
  }

  _handleClick = () => {
    this.props.navigation.navigate("OrderHistoryScreen")
  }

  _onPress = () => {
    this.setState({
      press: !this.state.press
    })
  }


  render() {
    const NewState = this.state.press;
    const NewBackground = NewState ? '#42a64c' : null
    const NewColor = NewState ?  '#fff' : '#42a64c' 

    return (
      <>
        <Atom.Header onPress={this._handleClick} />
        <Atom.Container>
          <Molecules.NoItem
            title="Let's order Gojek!"
            source={ImageSource.orders.noitem}
            desc="Our drivers will be happy to help you. Let's make an order!"
            containerTextStyle={{ paddingHorizontal: 30 }}
          />
          {/* <Atom.Button.Outline
            value="Hello"
            onPress={() => this._onPress()}
            styleButtonOutline={{ backgroundColor: NewBackground }}
            textStyle={{ color: NewColor }}
          /> */}
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