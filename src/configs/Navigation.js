
import { createReduxContainer } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';

import Routes from '../routes/Index'

const RouteContainer = createReduxContainer(Routes);
const mapStateToProps = (state) => ({
    state: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(RouteContainer);

export default AppWithNavigationState