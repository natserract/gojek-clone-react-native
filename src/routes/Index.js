
import React from 'react'
import { Image, TouchableWithoutFeedback, Text } from 'react-native'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import  AntDesign from 'react-native-vector-icons/AntDesign'

import ImageSrc from '../configs/ImagesSource'
import Theme from '../styles/theme.style'


/* Screen */
import Home from '../components/pages/home/Home'
import GoPayPayment from '../components/pages/home/GoPayPayment'
import Voucher from '../components/pages/home/Voucher'
import Orders from '../components/pages/orders/Orders'
import Chat from '../components/pages/chat/Chat'
import Inbox from '../components/pages/inbox/Inbox'
import Account from '../components/pages/account/Account'
import OrderHistory from '../components/pages/orders/OrderHistory'


/* Change image when active (focus) */
const getActiveImg = (navigation, focused) => {
    const { routeName } = navigation.state;
    let imgName;
    if (routeName === 'Home') {
        imgName = focused ? ImageSrc.navbottom.home.active : ImageSrc.navbottom.home.default;
    } else if (routeName === 'Orders') {
        imgName = focused ? ImageSrc.navbottom.orders.active : ImageSrc.navbottom.orders.default;
    }
    else if (routeName === 'Chat') {
        imgName = focused ? ImageSrc.navbottom.chat.active : ImageSrc.navbottom.chat.default;
    }
    else if (routeName === 'Inbox') {
        imgName = focused ? ImageSrc.navbottom.chat.active : ImageSrc.navbottom.inbox.default;
    }
    else if (routeName === 'Account') {
        imgName = focused ? ImageSrc.navbottom.account.active : ImageSrc.navbottom.account.default;
    }

    return <Image style={{ resizeMode: 'cover', width: 30, height: 30 }} source={imgName} />
};



/* Tab Navigator */
const TabNavigator = createBottomTabNavigator(
    {
        Home: { screen: Home },
        Orders: { screen: Orders },
        Chat: { screen: Chat },
        Inbox: { screen: Inbox },
        Account: { screen: Account },
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) =>
                getActiveImg(navigation, focused)
        }),
        tabBarOptions: {
            activeTintColor: Theme.ACTIVE_TINT_COLOR,
            tabBarIcon: ({ focused }) =>
                getActiveImg(navigation, focused),
            inactiveTintColor: Theme.INACTIVE_TINT_COLOR,
        },
    },
)

const Left = (props) => {
    return (
        <TouchableWithoutFeedback onPress={props.onPress}>
            <AntDesign.Button name="arrowleft" backgroundColor="transparent" color="#000" size={25} />
            {/* <Text>=</Text> */}
        </TouchableWithoutFeedback>
    )
}


const AppNavigator = createStackNavigator({
    HomeScreen: {
        screen: TabNavigator,
        navigationOptions: {
            header: null
        }
    },
    GoPay: {
        screen: GoPayPayment
    },
    Voucher: {
        screen: Voucher
    },
    OrderHistoryScreen: {
        screen: OrderHistory
    }
}, {
        mode: 'card',
        defaultNavigationOptions: ({ navigation }) => ({
            headerBackTitle: null,
            headerLeft: <Left onPress={() => navigation.goBack()} />,
            headerRight: null,
            headerLeftContainerStyle: {
                paddingLeft: 10,
            },
            headerTitleContainerStyle: {
                width: '100%',
                marginLeft: -30,
            },
            headerTintColor: '#000',
            headerTitleStyle: {
                fontWeight: 'bold',
                flex: 1,
                textAlign: 'left'
            },
            headerStyle: {
                borderBottomColor: '#f0f0f0',
                borderBottomWidth: 1
            }
        }),
    })



export default AppNavigator;
