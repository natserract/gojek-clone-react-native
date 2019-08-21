
import React, { Component } from 'react';
import { Text, View, RefreshControl, ScrollView } from 'react-native';

import { AtomGlobal as Atom } from '../../atoms/Index'

export default class OrderHistory extends Component {
    static navigationOptions = {
        headerTitle: 'History',
    }

    constructor(props){
        super(props)
        this.state = {
            refresh: false
        }
    }

    _onRefresh = () => {
        this.setState({
            refresh: true
        })
    }

    render() {
        return (
            <ScrollView 
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refresh}
                        onRefresh={this._onRefresh}
                    />
                }
            >
                <Atom.Container>
                    <View><Text>OrderHistory</Text></View>
                </Atom.Container>
            </ScrollView>
        )
    }
}