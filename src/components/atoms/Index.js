/* Global */
import * as Button from './global/Button'
import Modal from './global/Modal'
import Container from './global/Container'
import Header from './global/Header'

/* Home */
import CardItems from './home/CardItems'
import GoPayHeaderArea from './home/GoPayHeaderArea'
import HorizontalHeader from './home/HorizontalHeader'
import * as MenuItem from './home/MenuItem'

/* Orders */
import Orders from './orders/List'

module.exports = {
    AtomGlobal: {
        Button,
        Modal,
        Container,
        Header
    },
    AtomHome: {
        CardItems,
        GoPayHeaderArea,
        HorizontalHeader,
        MenuItem 
    },
    AtomOrder: {
        Orders
    }
}