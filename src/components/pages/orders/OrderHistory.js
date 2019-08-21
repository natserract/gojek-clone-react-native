
import React, { Component } from 'react';
import { Text, View, Alert, RefreshControl, FlatList, ScrollView } from 'react-native';


import { AtomGlobal, AtomOrder } from '../../atoms/Index'

export default class OrderHistory extends Component {
    static navigationOptions = {
        headerTitle: 'History',
    }

    constructor(props) {
        super(props)
        this.state = {
            isLoaded: true,
            refresh: false,
            dataSource: [
                {
                    id: 1,
                    name: 'STIKOM BALI',
                    orderStatus: 'Trip Cancelled',
                    date: '6 Jul, 5:14 PM'
                },
            ]
        }
    }

    _onRefresh = () => {
        this.setState({
            refresh: true
        })
    }

    _keyExtractor = (item) => item.id.toString();

    _onPressItem = (item) => {
        Alert.alert(`Order id: ${item.id},  status: ${item.orderStatus}`)
    }

    _renderItem = ({ item }) => (
        <AtomOrder.Orders
            name={item.name}
            onPress={() => this._onPressItem(item)}
            orderStatus={item.orderStatus}
            date={item.date}
        />
    )

    render() {
        const { dataSource } = this.state;

        return (
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refresh}
                        onRefresh={this._onRefresh}
                    />
                }
            >
                <AtomGlobal.Container>
                    <FlatList
                        data={dataSource}
                        renderItem={this._renderItem}
                        keyExtractor={this._keyExtractor}
                    />
                </AtomGlobal.Container>
            </ScrollView>
        )
    }
}


/*   
If online uncomment this code for get data from json
  componentWillMount() {
      fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json())
          .then((resJson) => {
              this.setState({
                  isLoaded: false,
                  dataSource: resJson
              })
          })
          .catch(err => {
              console.error(err)
          })
  }
  */