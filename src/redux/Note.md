

REDUX CHEATSHEET

Get state to class component

import { connect } from 'react-redux'
import { what action? } from 'action path'

/* State to props */
const mapStateToProps = state => {
    return {
        data: state.data,
        accessibility: state.accessibility
    }
}

/* Dispatch to props */
const mapDispatchToProps = dispatch => {
    return {
        increment,
        decrement,
        visible
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(ClassComponent);


----------------------------


Using Hook 

import { useSelector, useDispatch } from 'react-redux'

const data = useSelector(state => state.data)
const dispatch = useDispatch()
    <Text>{ data }</Text>
    <Button
        title="click Me"
        onPress={() => dispatch(decrement())}
    />

Cool Library
react native animatable


Check Content Offset 
const contentOffset = event.nativeEvent.contentOffset.y

Create ref:
element.ref={(scroller) => { this.scroller = scroller }} 
function() {this.scroller...}



Custom Tab Bar Component 
https://dev.to/hrastnik/lets-create-a-custom-animated-tab-bar-with-react-native-3496

https://aboutreact.com