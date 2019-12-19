import React, { Component } from 'react'
import { Text } from 'react-native';

import { AtomGlobal as Atom } from '../../atoms/Index'

export default class Inbox extends Component {
    render() {
        return (
            <Atom.Container>
                <Text>Inbox</Text>
            </Atom.Container>
        )
    }
}