
import React, { Component } from 'react';
import { Alert, RefreshControl, FlatList, ScrollView } from 'react-native';

import { AtomGlobal, AtomOrder } from '../../atoms/Index'

class OrderHistory extends Component {
    static navigationOptions = {
        headerTitle: 'History',
    }

    constructor(props) {
        super(props)
        let dateNow = new Date(Date.now())
            getDate = dateNow.getDate()
            getMonth = dateNow.getMonth() 
            getHours = dateNow.getHours()
            getMinutes = dateNow.getMinutes()
            getTimeOffset = dateNow.getUTCHours()
            monthNames = [
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];
            month = monthNames[getMonth]
            hours = getHours >= 12 ? 'PM' : 'AM'
            date = `${getDate} ${month}. ${getHours}:${getMinutes} ${hours}`


        this.state = {
            isLoaded: true,
            refresh: false,
            dataSource: [
                {
                    id: 1,
                    name: 'STIKOM BALI',
                    orderStatus: 'Trip Cancelled',
                    date: date
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


export default OrderHistory

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