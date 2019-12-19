import React, { Component } from 'react';
import { Text } from 'react-native';

import { AtomGlobal as Atom } from '../../atoms/Index'

export default class Helps extends Component {
    render() {
        return (
            <Atom.Container>
                <Text>Chat Screen</Text>
            </Atom.Container>
        )
    }
}