import React, { Component } from 'react';
import { Text } from 'react-native';

import { AtomGlobal as Atom } from '../../atoms/Index'

export default class MyAccount extends Component {
    render() {
        return (
            <Atom.Container>
                <Text>MyAccount</Text>
            </Atom.Container>
        );
    }
}